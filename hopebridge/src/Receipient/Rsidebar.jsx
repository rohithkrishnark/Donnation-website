import React from "react";
import "./Home.css"
import { Link, useNavigate } from "react-router-dom";
function Rsidebar() {
    const navigate=useNavigate()
    const handledelete=()=>{
        localStorage.removeItem("Recepient")
        navigate('/')
        console.log("logout successfully");
        
        
    }
    return ( 
        <>
         <div className="sidebars">
        <div style={{ marginLeft: "15px" }}>
          <Link to="/" style={{ textDecoration: "none" }} className="sidebars-brand">
            HopeBridge
          </Link>
        </div>
        <ul>
          <li><Link to="/Rhome">Home</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/totalsubmission">Accepted Donnations</Link></li>
          <li><Link to="/donnationrequest">Pending Request</Link></li>
          <li><Link to="/donnationtracking">Donation Tracking</Link></li>
          <li><Link to="/" onClick={handledelete}>Logout</Link></li>

        </ul>
      </div></>
     );
}

export default Rsidebar;