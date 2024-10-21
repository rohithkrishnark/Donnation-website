import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
    const navigate=useNavigate()
    const handledelete = () => {
        localStorage.removeItem("User");
        navigate('/')
        console.log("User removed from localStorage");
      };
      
      
  return (
    <>
      {/* Backdrop div for darkening and blurring the background */}
      <div className={`backdrop ${isOpen ? 'visible' : ''}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>My Account</h2>
          {/* Close button */}
          <button onClick={toggleSidebar} className="close-btn"></button>
        </div>
        <ul className="sidebar-menu">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="" onClick={handledelete} >Logout</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
