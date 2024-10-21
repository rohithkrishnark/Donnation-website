import React from "react";
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Adminheader() {
    return ( 
        <>
         <div >
  
  <Navbar bg="" expand="lg" style={{backgroundColor:""}} className="shadow" >
 
        <div>
      <Navbar.Brand href="/" style={{fontWeight:"bolder",color:"#f7c02b",marginLeft:"10px",fontSize:"2.1rem"}} 
      >HopeBridge</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{marginRight:"30px",}} >
        <Nav style={{marginRight:"10px",}} >
          <h3 className="px-5"style={{right:"10px",marginLeft:"450px",color:"#f7c02b"}}> Admin Dashboard</h3>

       

          



          
        </Nav>
      </Navbar.Collapse>
   
      {/* <Link to="/" className="donate px-3 " style={{ marginRight: "25px" }}>Login</Link> */}
          

  </Navbar>
    </div>
        
        </>
     );
}

export default Adminheader;