import React from "react";
import Navbar from "./Navbar"; 
import "./Gallery.css"
import Footer from "./Footer";
function Gallery() {
    const images=[
        "gallery/1.webp","/gallery/2.webp","/gallery/2.webp","/gallery/3.webp","/gallery/4.webp","/gallery/5.webp",
        "/gallery/CAKE3.webp","/gallery/CAKE5.webp","/gallery/DOG4.webp","/gallery/EDUCATION3.webp","/gallery/srilanka4.webp"
    ]
    return ( 
        <>
        <Navbar/>
        <div className="">
                <img src="./banner.jpg" alt="Hopebridge Banner" className="banner-image" />
            </div>
            <div className="banner-text">
                <h1>Gallery</h1>
            </div>
        <div className="gallery-container">
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

export default Gallery;