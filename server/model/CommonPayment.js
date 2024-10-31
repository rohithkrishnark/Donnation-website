var mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    razorpayPaymentId: {
    type: String,
    required: true,
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpaySignature:{
    type: String,
    required: true,
  },
  amount:{
    type: Number,
    required: true,
  },
  currency:{
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loginform",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const RazerpaymentSchema = mongoose.model("PaymentSchema",PaymentSchema);
module.exports = { RazerpaymentSchema };
