import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Dog() {
    const images=["/gallery/DOG4.webp","/gallery/DOG5.webp","/gallery/dogs6.jpg","/gallery/dog7.jpg"]
    return ( 
        <>
        <Navbar/>
         <div className="">
                <img src="./banner.jpg" alt="Hopebridge Banner" className="banner-image" />
            </div>
            <div className="banner-text">
                <h1 style={{marginBottom:"200px"}}>Feed A Stray Dog</h1>
            </div>
            <div className="container mt-5">
                <h3 style={{fontWeight:"bolder"}}>Feed A Stray Dog</h3>
                <div>
                Support our cause to feed stray dogs in need. Your donation provides essential sustenance for these vulnerable animals, ensuring they have nourishment to survive each day. With your help, we can make a difference in the lives of these neglected creatures, offering them a chance at a better life. Join us in showing compassion and kindness to our furry friends by contributing to our Feed A Stray Dog initiative. Together, let's make sure no stray dog goes hungry.
                </div>
            </div>
            <div className="gallery-container" >
        {images.map((src,index)=>{
            return(
            <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="gallery-image"></img>
            )
        })}
        </div>
            <Footer/>
        
        </>
     );
}

export default Dog;