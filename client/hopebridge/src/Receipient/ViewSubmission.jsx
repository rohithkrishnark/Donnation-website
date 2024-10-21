import React, { useState, useEffect } from "react";
import Headers from "./Header";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Rsidebar from "./Rsidebar";



function ViewSubmission() {
  const [recepient, setRecepient] = useState(JSON.parse(localStorage.getItem('Recepient')));
  const [submission, setSubmission] = useState([]);
  const [dresssubmission, setDresssubmission] = useState([]);
  const [foodsubmission, setFoodsubmission] = useState([]);
  const [orphanagesubmission, setOrphangesubmission] = useState([]);
  const [showModal, setShowModal] = useState(false); 


  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/totalsubmission", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recepient: recepient._id
      })
    }).then((res) => res.json()).then((result) => {
      setSubmission(result.data);
    });
  }, [recepient]);

  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/viewdressform", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recepient: recepient._id
      })
    }).then((res) => res.json()).then((result) => {
      setDresssubmission(result.data);
    });
  }, [recepient])

  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/viewfoodform", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recepient: recepient._id
      })
    }).then((res) => res.json()).then((result) => {
      setFoodsubmission(result.data);
    });
  }, [recepient]);


  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/viewOrphangeform", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recepient: recepient._id
      })
    }).then((res) => res.json()).then((result) => {
      setOrphangesubmission(result.data);
    });
  }, [recepient]);

  // Function to handle modal open
  const handleShow = () => setShowModal(true);

  // Function to handle modal close
  const handleClose = () => setShowModal(false);


  return (
    <>
      <Headers />

      <div className="container-fluid" style={{ overflowX: 'hidden' }}>
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-xl-2 ">
            <Rsidebar />
          </div>

          {/* Main Content */}
          <div className="col-xl-10 " style={{ marginLeft: "280px" }}>
            <div className=" position-fixed shadow px-2 py-1 rounded" style={{ height: '45px',top:'10%',zIndex:1,right:5 }}>
              {/* Button to trigger modal */}
              <Link className="btn btn-outline-primary" onClick={handleShow}>Add New Request</Link>
            </div>
            
          {
            submission && submission.some((eductaionform)=> eductaionform.approval === 1) ? (
              <div className="row row-cols-1 row-cols-md-3 g-4  mb-2 mt-5" style={{height:'420px'}}>
              {submission
              .filter((forms) => forms.approval === 1)
              .map((forms, index) => (
                <div className="col-xl-3 " key={index} style={{height:'400px'}}>
                  <div className="card border shadow px-2 " style={{ borderRadius: "15px", height: "400px" }}>
                  <p className="card-text position-absolute">
                        <img style={{
                          width:'70px'
                        }} src="./verify.png" alt="" />
                      </p>
                      <img
                      src={`http://localhost:4000/${forms.file}`}
                      className="card-img-top"
                      alt={forms.file}
                      style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{forms.name}</h5>
                      <p className="card-text"  style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}>Case Details: {forms.cases}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            ):(
              null
            )
          }
          
         {
          dresssubmission && dresssubmission.some((dressform)=> dressform.approval === 1) ? (
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-2 " style={{height:'420px'}}>
          {dresssubmission
           .filter((dressform) => dressform.approval === 1)
          .map((dressform, index) => (
            <div className="col-xl-3 " key={index} style={{height:'400px'}}>
              <div className="card border shadow px-2 " style={{ borderRadius: "15px", height: "400px" }}>
              <p className="card-text position-absolute">
                    <img style={{
                      width:'70px'
                    }} src="./verify.png" alt="" />
                  </p>
                <img
                  src={`http://localhost:4000/${dressform.file}`}
                  className="card-img-top"
                  alt={dressform.file}
                  style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                />
                <div className="card-body">
                  <h5 className="card-title">{dressform.name}</h5>
                  <p className="card-text" style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}>Case Details: {dressform.cases}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
          ):(
            null
          )
         }
          {
            foodsubmission && foodsubmission.some((foodform)=>foodform.approval === 1) ? (
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-2" style={{height:'420px'}}>
            {foodsubmission
            .filter((foodform) => foodform.approval === 1)
            .map((foodform, index) => (
              <div className="col-xl-3 " key={index} style={{height:'400px'}}>
                <div className="card border shadow px-2 " style={{ borderRadius: "15px", height: "400px" }}>
                <p className="card-text position-absolute">
                      <img style={{
                        width:'70px'
                      }} src="./verify.png" alt="" />
                    </p>
                  <img
                    src={`http://localhost:4000/${foodform.file}`}
                    className="card-img-top"
                    alt={foodform.file}
                    style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{foodform.name}</h5>
                    <p className="card-text" style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}>Case Details: {foodform.cases}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
            ):(
              null
            )
          } 

           {
            orphanagesubmission && orphanagesubmission.some((orphanform)=>orphanform.approval === 1) ? (
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-2" style={{height:'420px'}}>
              {orphanagesubmission
              .filter((orphangeform) => orphangeform.approval === 1)
              .map((orphangeform, index) => (
                <div className="col-xl-3 " key={index} style={{height:'400px'}}>
                  <div className="card border shadow px-2 " style={{ borderRadius: "15px", height: "400px" }}>
                  <p className="card-text position-absolute">
                        <img style={{
                          width:'70px'
                        }} src="./verify.png" alt="" />
                      </p>
                    <img
                      src={`http://localhost:4000/${orphangeform.file}`}
                      className="card-img-top"
                      alt={orphangeform.file}
                      style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{orphangeform.name}</h5>
                      <p className="card-text"  style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}>Case Details: {orphangeform.cases}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            ):(
              null
            )
           }
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="shadow">
          <Modal.Title>Select Form Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li><Link to="/add" style={{ textDecoration: "none", color: "black" }}>Education</Link></li>
            <li><Link to="/dressform" style={{ textDecoration: "none", color: "black" }}>Dress Donation</Link></li>
            <li><Link to="/foodform" style={{ textDecoration: "none", color: "black" }}>Food Donation</Link></li>
            <li><Link to="/orphangeform" style={{ textDecoration: "none", color: "black" }}>Orphanage Charity</Link></li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewSubmission;
