import React, { useState } from "react";
import "../user/register.css"
import { useNavigate } from "react-router-dom";

function AgentRegiter() {
    const [user,setUser]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
   
    const handlesubmit=(event)=>{
        let params={
            user:user,
            email:email,
            password:password,
            userstatus:0
        }
        fetch('http://localhost:4000/recepient/recepientregister',{
            method:'post',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
        }).then((res)=>res.json()).then((result)=>{
            console.log(result);
            // window.location.reload() 
        })
        event.preventDefault()
        navigate('/recepientlogin')
     
    }

    return ( 
        <>
         <div className="register-container">
            <form className="register-form" onSubmit={handlesubmit}>
                <h1 className="register-heading">Register Now</h1>
                <div className="input-group">
                    <label htmlFor="name" className="register-label">Name</label>
                    <input type="text" id="name" className="register-input" onChange={(e)=>setUser(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="email" className="register-label">Email</label>
                    <input type="email" id="email" className="register-input" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="register-label">Password</label>
                    <input type="password" id="password" className="register-input" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="button-group">
                    <button type="submit" className="register-button">Submit</button>
                </div>
            </form>
        </div>
        
        </>
     );
}

export default AgentRegiter;