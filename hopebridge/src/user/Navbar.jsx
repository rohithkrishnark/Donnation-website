import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';



function Navbar() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('User')));
  const [recepient, setRecepient] = useState(JSON.parse(localStorage.getItem('Recepient')));
  console.log(recepient);


  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar shadow     ">
        <div className="d-flex align-items-center">
          <h4 className="texthead text-dark">H<span className="text-warning">o</span>peBridge</h4>
          <img src="/value.gif" alt="UPI Icon 1" style={{ width: 60, height: 60 }} />
        </div>
        <div className="navbar-button">
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            {
              recepient ?
                <Tooltip title="Become a Recepeint🛡️ ">
                  <li><Link to="/Rhome"  >Be Receipient</Link></li>
                </Tooltip> :
                <Tooltip  title="Become a Recepeint                                   🛡️">
                  <li><Link to="/recepientlogin" >Be Receipient</Link></li>
                </Tooltip>
            }
            <li><Link to="/donate" className=" me-3" >Donate Now</Link></li>
            {/* <li><Link to="/contact">Contact Us</Link></li> */}
          </ul>


          {
            auth ? (

              <Tooltip title="Go to Profile Page">
                <Avatar onClick={toggleSidebar} alt="Remy Sharp" src="/poor.jpg" style={{ cursor: 'pointer', marginRight: "20px", fontSize: "30px" }} />
              </Tooltip>
            ) : (
              <Link to='/login' style={{ textDecoration: "none" }}><span style={{ cursor: 'pointer', marginRight: "20px", fontSize: "30px" }}>🙋</span></Link>
            )
          }
        </div>
      </nav>

      {/* Sidebar Component */}

      {
        auth && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      }
    </>
  );
}

export default Navbar;
