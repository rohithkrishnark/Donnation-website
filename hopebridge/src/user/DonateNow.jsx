import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Donate.css';

function Donate() {
    return (
        <>
            <Navbar />
            <div className="" style={{ width: "100%", minHeight: '90vh' }}>
                <div className="row  py-2 donation-banner" style={{ height: '480px', width: '100%' }}>
                    <div className="col-xl-8">

                    </div>
                    <div className="col-xl-4 h-100 ">
                        <div className="donation-form-container">
                            <div className="donation-form shadow rounded px-2"style={{height:'460px'}}>
                                <div className="donation-buttons">
                                    <button className="donation-type active">Give Once</button>
                                    <button className="donation-type">Give Monthly</button>
                                </div>

                                <p className="donation-text mt-0 mb-0">
                                    Please select your donation amount <br />
                                    (*1 Meal = ₹ 25)
                                </p>
                                <div className="amount-options mb-0">
                                    <div className="bttn border">₹50000</div>
                                    <div className="bttn">₹50000</div>
                                    <div className="bttn">₹50000</div>
                                    <div className="bttn">₹50000</div>
                                   
                                </div>
                                <input className="custom-amount mb-0 mt-0" type="text" placeholder="Enter amount" />
                                <p className="pledge-text">You pledge to serve <span>0</span> nutritious meals.</p>

                                <div className="payment-options mb-0">
                                    {/* Payment logos */}
                                    <img src="visa.png" alt="Visa" />
                                    <img src="mastercard.png" alt="Mastercard" />
                                    <img src="rupay.png" alt="Rupay" />
                                    <img src="paytm.png" alt="Paytm" />
                                    <img src="gpay.png" alt="GPay" />
                                    <img src="upi.png" alt="UPI" />
                                </div>
                                <button className="donate-button mb-0">Proceed to Donate</button>
                                <p className="tax-text mt-0 mb-0">Donations are tax-exempted under 80G </p>
                                <p className="text-center mt-0">For Bank Transactions <a href="#">Click Here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Donate;

