import React, { useState,useEffect } from "react";
import '../user/Intro.css'
import { Link } from "react-router-dom";

function Carouselcomponent() {

  
  return (
    <div className="intor page">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-xl-7">
                        <h1 className="headers">List Your Business <span className="text-danger">for FREE</span></h1>
                        <p style={{textAlign:'justify'}}>Business is the cornerstone of modern society, driving economic growth, innovation, and job creation. At its core, business involves the production and exchange of goods or services to meet the needs and desires of consumers. Successful businesses thrive by understanding market demands, fostering creativity, and maintaining a commitment to excellence. They build strong relationships with customers, suppliers, and stakeholders, ensuring sustainable growth and long-term success. Ethical practices and corporate social responsibility are increasingly vital, as businesses not only aim for profitability but also strive to make a positive impact on the community and environment. By adapting to changing market conditions and embracing new technologies, businesses remain competitive and continue to play a crucial role in shaping the future.</p>
                        
                        
                        <h5 className="mb-2 sucess">✅️  Get Discovered and Create Your Online Business</h5>
                        <h5 className="mb-2 sucess">✅️  Respond to Customer Reviews and Questions</h5>
                        <h5 className="mb-2 sucess">✅️  Showcase Your Product and Service Offerings</h5>
                    </div>
                    <div className="col-xl-5">
                        <img src="man.webp" width={'600px'} height={'100%'}  alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Carouselcomponent
