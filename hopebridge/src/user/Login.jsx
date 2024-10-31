import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
function Login() {
    
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const loginform=(event)=>{
        console.log("workign");
        
        let params={
            email:email,
            password:password
        }
        fetch('http://localhost:4000/main/lform',{
            method:'post',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'  
            },
            body:JSON.stringify(params)
        }).then((res)=>res.json()).then((result)=>{
            if(result.success===true){
                localStorage.setItem('User',JSON.stringify(result.data))
                console.log(result);
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }else{
                alert("invalid credentials")
            }
        })
        event.preventDefault()

    }
    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-heading">Login</h1>
                <form onSubmit={loginform}>
                    <div className="input-container">
                        <label htmlFor="email" className="login-label">Email</label>
                        <input type="email" id="email" className="login-input"onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input type="password" id="password" className="login-input"onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="login-button">Login</button>
                        <h6 className="register-text">
                            New user? <Link to="/register" className="register-link">Register now</Link>
                        </h6>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
