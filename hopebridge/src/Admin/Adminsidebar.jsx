import React from "react";
import { Link } from "react-router-dom";
function Adminsidebar() {
    return ( 
        <>
         <div className="sidebars">
        <div style={{ marginLeft: "15px" }}>
          <Link to="/" style={{ textDecoration: "none" }} className="sidebars-brand">
            HopeBridge
          </Link>
        </div>
        <ul>
          <li><Link to="/admin">Home</Link></li>
          <li><Link to="">Manage Recepient </Link></li>
          <li><Link to=""> Reports and Analytics</Link></li>
          <li><Link to="/approval">Donation Approvals</Link></li>
          <li><Link to="">Payment Tracking</Link></li>
          <li><Link to="">Notifications</Link></li>

        </ul>
      </div>
        </>
     );
}

export default Adminsidebar;