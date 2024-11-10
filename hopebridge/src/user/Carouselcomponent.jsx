import React, { useState,useEffect } from "react";
import '../user/Intro.css'
import { Link } from "react-router-dom";

function Carouselcomponent() {

  
  return (
    <div className=""style={{height:"500px"}}>
            <div className="container mt-4 " style={{height:"400px"}}>
                <div className="row" style={{height:'100%'}} >
                    <div className="col-xl-7" style={{height:'100%'}}>
                        <h1 className="header mb-0">Be the Reason </h1>
                        <h1 className="headers mt-0">Someone Smiles Today! </h1>
                        <p className="subpara" style={{textAlign:'justify'}}>Business is the cornerstone of modern society, driving economic growth, innovation, and job creation. At its core, business involves the production and exchange of goods or services to meet the needs and desires of consumers. Successful businesses thrive by understanding market demands, fostering creativity, and maintaining a commitment to excellence. They build strong </p>
                        <div className="buttons">
                           
                            <div className="arrow">
                            <p>Donnate Now❤️</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 " style={{height:'100%'}}>
                        <img src="/pic.jpg" className="ms-5" width={'400px'} height={'100%'}  alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Carouselcomponent
