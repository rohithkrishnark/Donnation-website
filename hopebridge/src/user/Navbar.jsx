import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";


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
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" style={{ marginLeft: "10px" }}>Hopebridge</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/" state={{ showProjects: true }}>Projects</Link></li>

          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="navbar-button">
          {
            recepient ? <Link to="/Rhome" className="donate-btn px-2 py-1" style={{ marginRight: "30px" }}>Be Receipient</Link>:
            <Link to="/recepientlogin" className="donate-btn px-2 py-1" style={{ marginRight: "30px" }}>Be Receipient</Link>
          }
          <Link to="/donate" className="donate-btn px-2 py-1" style={{ marginRight: "25px" }}>Donate Now</Link>
          {/* Clicking on the user icon will toggle the sidebar */}
          {
            auth ? (
              <span onClick={toggleSidebar} style={{ cursor: 'pointer', marginRight: "20px",fontSize:"30px"}}>🙋</span>
            ):(
              <Link to='/login' style={{textDecoration:"none"}}><span  style={{ cursor: 'pointer', marginRight: "20px",fontSize:"30px" }}>🙋</span></Link>
            )
          }
        </div>
      </nav>

      {/* Sidebar Component */}
     
    {
      auth &&  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    }
    </>
  );
}

export default Navbar;
