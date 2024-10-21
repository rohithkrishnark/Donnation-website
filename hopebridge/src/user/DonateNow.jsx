import React from "react";
import Navbar from "./Navbar";
import './Donate.css';
import Footer from "./Footer"

function Donate() {
    return (
        <>
            <Navbar />
            <div className="">
                <img src="gallery/difference.jpg" alt="Hopebridge Banner" className="banner-image" style={{ height: "300px" }} />
            </div>
            <div className=" row" style={{width:"100vw", minHeight:"1000px"}}>
                <div className="col-xl-7 bg-primary"></div>
                <div className="col-xl-5 row overflow position-sticky mt-4 mb-4 ps-4" >
                <div className="">
                        <div className="payment-form-container" style={{ bottom: "20px" }}>
                            <h2>Make a Donation</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="amount">Donation Amount:</label>
                                    <input type="number" id="amount" name="amount" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="payment-method">Payment Method:</label>
                                    <select id="payment-method" name="payment-method">
                                        <option value="credit-card">Credit Card</option>
                                        <option value="debit-card">Debit Card</option>
                                        <option value="paypal">PayPal</option>
                                    </select>
                                </div>
                                <div>
                                    <img src="gallery/payment-icons.webp" alt="no image" style={{ marginLeft: "2px" }} />
                                </div>

                                <button type="submit" className="donate-button">Donate Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="d-flex  row" style={{ width: "100vw", height: "900px", backgroundColor: "green" }}>
                    <div className="">
                        <div style={{ width: "100px", backgroundColor: "pink" }}>ded</div>
                    </div>
                    <div className="">
                        <div className="payment-form-container" style={{ bottom: "20px" }}>
                            <h2>Make a Donation</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="amount">Donation Amount:</label>
                                    <input type="number" id="amount" name="amount" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="payment-method">Payment Method:</label>
                                    <select id="payment-method" name="payment-method">
                                        <option value="credit-card">Credit Card</option>
                                        <option value="debit-card">Debit Card</option>
                                        <option value="paypal">PayPal</option>
                                    </select>
                                </div>
                                <div>
                                    <img src="gallery/payment-icons.webp" alt="no image" style={{ marginLeft: "2px" }} />
                                </div>

                                <button type="submit" className="donate-button">Donate Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />
        </>
    );
}

export default Donate;
