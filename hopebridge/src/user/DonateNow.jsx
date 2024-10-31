import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Donate.css';
import Swipercomponent from "./Swiper";
import InfoCards from "./Infocard";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonnateAmount = ({ amount, onClick }) => {
    return (
        <div className="shadow rounded  d-flex  justify-content-center" style={{ width: '18%', height: 40, border: '1px solid yellow' }}
            onClick={() => onClick(amount)}>
            <p className="text2 mt-2">{amount}rs</p>
        </div>
    )
}
function Donate() {
    const [donnationamount, setDonnationAmount] = useState("")
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('User')));
    console.log(user);
    

    const handleClick = (amount) => {
        setDonnationAmount(amount)
    }
    const navigate = useNavigate()
    const handleConfirmBooking = async () => {
        if (isNaN(donnationamount) || donnationamount.trim() === "" || Number(donnationamount) <= 0) {
            toast.error("Please enter a valid number.", {
                autoClose: 1000, 
            });
            setDonnationAmount("")
            return
        }
        try {
            const response = await fetch("http://localhost:4000/transaction/api/payment", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: donnationamount * 100
                })
            });
    
            if (!response.ok) {
                throw new Error("Failed to create order");
            }
    
            const orderData = await response.json();
            const { amount, id: order_id, currency } = orderData;
    
            if (!amount) {
                throw new Error('Invalid amount received');
            }
    
            const options = {
                key: "rzp_test_4Ex6Tyjkp79GFy",
                amount: (amount * 100).toString(),
                currency: currency,
                name: "Archana Anil",
                description: "Test Transaction",
                order_id: order_id,
                handler: async (response) => {
                    const paymentVerification = await fetch("http://localhost:4000/transaction/api/paymentVerification", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                            amount: amount,
                            currency: currency,
                            userId: user ? user._id : null
                        }),
                    });
                    const paymentVerificationData = await paymentVerification.json();
                    console.log(paymentVerificationData);
                    
                    if (paymentVerificationData.success) {
                        alert("Payment successful");
                        setTimeout(() => {
                            navigate('/')
                        }, 3000);
                    } else {
                        alert("Payment verification failed");
                    }
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Error during payment process:', error);
            alert('An error occurred during the payment process. Please try again.');
        }
    };
    
    return (
        <>
            <Navbar />
            <div style={{ minHeight: '90vh', width: '100vw'}}>
                <div className="row mt-2 mb-5" style={{ width: "100vw", minHeight: 400 }}>
                    <div className="col-xl-7 d-flex justify-content-center  ps-5 py-2" >
                        <div style={{ width: '96%', height: 200 }} className=" py-2">
                            <div className="d-flex align-items-center">
                                <h4 className="texts">H<span className="text-warning">o</span>peBridge</h4>
                                <img src="/value.gif" alt="UPI Icon 1" style={{ width: 80, height: 80 }} />
                            </div>
                            <h3 style={{ textAlign: "justify" }} className="text4">Together, We Can Make a Difference and Bring Hope to Those in Need!</h3>
                            <h4 style={{ textAlign: "justify" }} className="text6">United in Compassion, We Can Transform Lives and Create Lasting Change for Those in Need!</h4>
                            <p style={{ textAlign: "justify" }} className="text5">Every contribution, no matter the size, has the power to change lives. Join us in our journey to uplift communities, provide essential resources, and foster a spirit of compassion. Together, we can turn empathy into action and create a lasting impact!</p>
                            <div className="rouned" style={{ width: '100%', height: 200 }}>
                                <Swipercomponent />
                            </div>
                        </div>
                    </div>
                    {/* donnnation card goes here */}
                    <div className="col-xl-5  py-3 d-flex justify-content-center position-relative">
                        <div style={{ width: "80%", height: 400, top: 10 }} className="shadow rounded position-sticky box">
                            <div style={{ width: "100%", height: 80 }} className="  d-flex flex-column align-items-center ">
                                <h4 className="text mb-0 ">Help Us Bring Hope</h4>
                                <p className="text2 mt-0 text-center">Every contribution counts towards a brighter future for those facing hardship🌟</p>
                            </div>
                            <div style={{ width: "100%", height: 70 }} className=" gap-2 d-flex align-items-center justify-content-center text2">
                                {[100, 200, 500, 1000, 2000].map(amount => (
                                    <DonnateAmount amount={amount} key={amount} onClick={handleClick} />
                                ))}
                            </div>
                            <div style={{ width: "100%", height: 90 }} className=" gap-2 d-flex flex-column px-2 align-items-center justify-content-center">
                                <input type="text" className="form-control mb-0 shadow" onChange={(e) => setDonnationAmount(e.target.value)} placeholder="Enter the amount you are willing to pay" value={donnationamount} style={{ height: 50 }} />
                            </div>
                            <div style={{ width: "100%", height: 120 }} className=" flex-column gap-2 d-flex align-items-center justify-content-center px-2 ">
                                <div className="btn btn-outline-success w-100 text3" onClick={handleConfirmBooking}>Procced to Payment</div>
                                <p className="text3 mt-0 ">Your kindness today brings hope to those who need it most</p>
                                <div style={{ width: "80%", height: 45 }} className="  gap-2 d-flex  px-2 align-items-center justify-content-around">
                                    <img className="rounded-circle" src="/arrow.webp" alt="UPI Icon 1" style={{ width: 40, height: 40 }} />
                                    <img src="/gpay.png" alt="UPI Icon 2" style={{ width: 30, height: 30 }} />
                                    <img src="/phone.png" alt="UPI Icon 3" style={{ width: 60, height: 35 }} />
                                    <img src="/pytm.png" alt="UPI Icon 4" style={{ width: 40, height: 40 }} />
                                    <img src="/amazon.png" alt="UPI Icon 4" style={{ width: 40, height: 40 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="row d-flex align-items-center justify-content-center" style={{ width: "100vw", minHeight: 350 }}>
                    <div className=" col-xl-8 shadow rounded" style={{width:"95%",height:280}}>
                    <InfoCards/>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default Donate;

