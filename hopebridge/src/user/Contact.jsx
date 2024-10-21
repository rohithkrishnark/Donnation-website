import React, { useState } from "react";
import "./contact.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
    const[name,setname]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[address,setAddress]=useState('')
    const[cases,setCase]=useState('')
     
    const handleform=(event)=>{
        let params={
            name:name,
            email:email,
            phone:phone,
            address:address,
            cases:cases

        }
        fetch('http://localhost:4000/main/cform',{
            method:'post',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
        }).then((res)=>res.json()).then((result)=>{
            console.log(result);
            window.location.reload()
            
        })
        event.preventDefault()
    }


    return ( 
        <>
        <Navbar/>
       
      <div className="">
        <img src="./banner.jpg" alt="Hopebridge Banner" className="banner-image" />
      </div>
      <div className="banner-text">
          <h1>Contact Us</h1>
        </div>
         <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleform}>
        <h2>Contact Us</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name"  onChange={(e)=>setname(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"  onChange={(e)=>setPhone(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" onChange={(e)=>setAddress(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Case Description</label>
          <textarea id="description" name="description" placeholder="Describe your case" rows="4"  onChange={(e)=>setCase(e.target.value)}></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>

    <div className="container">
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31551.853657883665!2d76.79524864196554!3d8.69328639672258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e9f654143cbf%3A0x20d213704165f74c!2sAttingal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1725442621371!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
    </div>
     <Footer/>   
        </>
     );
}

export default Contact;