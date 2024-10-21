import React from "react";
import Headers from "../Receipient/Header";

import Footer from "./Footer";
function Food() {
    return (  
        <>
       <Headers/>
        <div className="">
                <img src="./banner.jpg" alt="Hopebridge Banner" className="banner-image" />
            </div>
            <div className="banner-text">
                <h1>Feed Homeless</h1>
            </div>
        
        <div className="container mt-5">
            <h3 style={{fontWeight:"bolder"}}>Feed A Homeless Person</h3>
            <div>
                <p>In a world where approximately 150 million people face the harsh reality of hunger every night, your contribution can make a profound difference. With over 9 million lives lost annually due to hunger and starvation, homeless individuals are among the most vulnerable. Your small but meaningful donation from your income can provide vital sustenance to those in need, especially the homeless. Together, we can ensure that no one goes to bed hungry. As a token of our gratitude for your compassion, we'll share a photo of the homeless person whose life you've touched. Join us in our mission to eradicate hunger and build a world where no one suffers from the pains of an empty stomach.</p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Food;