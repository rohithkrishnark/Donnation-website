
var {RazerpaymentSchema} = require('../model/CommonPayment')

const crypto = require("crypto");
const Razorpay = require("razorpay");


const razorpay = new Razorpay({
    key_id: "rzp_test_4Ex6Tyjkp79GFy",
    key_secret: "lVGcQB0HSAttEhr7mq4AbM7Z",
  });
  

exports.payment = async (req, res) => {
    const { amount } = req.body;
    console.log(amount);
    try {
      const options = {
        amount: amount,
        currency: "INR",
        receipt: crypto.randomBytes(10).toString("hex"),
      };
      const order = await razorpay.orders.create(options);
      if (!order) return res.status(500).send("Some error occurred");
      res.json(order);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.paymentVerification = async (req, res) => {
    console.log(req.body);
  
    const {
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      amount,
      currency,
      userId,
    } = req.body;
  
    const body = razorpayOrderId + "|" + razorpayPaymentId;
    const expectedSignature = crypto
      .createHmac("sha256", "lVGcQB0HSAttEhr7mq4AbM7Z")
      .update(body.toString())
      .digest("hex");
  
    const isAuthentic = expectedSignature === razorpaySignature;
  
    if (isAuthentic) {
      const newTransaction = new RazerpaymentSchema({
        razorpayOrderId: razorpayOrderId,
        razorpayPaymentId: razorpayPaymentId,
        razorpaySignature: razorpaySignature,
        currency: currency,
        amount: amount,
        userId:userId,
        status: "Success",
      });
      try {
        await newTransaction.save();
        res.json({ success: true });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "Error saving transaction." });
      }
    } else {
      res.status(400).json({ success: false });
    }
  };