import React, { useState, useEffect } from "react";
import Headers from "./Header";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rsidebar from "./Rsidebar";

function DonnationRequest() {
  const [recepient, setRecepient] = useState(JSON.parse(localStorage.getItem('Recepient')));
  const [submission, setSubmission] = useState([]);
  const [dresssubmission, setDresssubmission] = useState([]);
  const [foodsubmission, setFoodsubmission] = useState([]);
  const [orphanagesubmission, setOrphangesubmission] = useState([]);

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
  }, [recepient]);

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

  const deleteForm = (ID) => {
    fetch('http://localhost:4000/recepient/api/deleteform', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: ID })
    }).then((res) => res.json()).then((result) => {
      window.location.reload();
    });
  };

  const handledelete = (Id) => {
    fetch('http://localhost:4000/recepient/api/dressdeleteform', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: Id })
    }).then((res) => res.json()).then((result) => {
      window.location.reload();
    });
  };

  const fooddeleted = (ID) => {
    fetch('http://localhost:4000/recepient/api/fooddeleteform', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: ID })
    }).then((res) => res.json()).then((result) => {
      window.location.reload();
    });
  };

  const orphangedelete = (ID) => {
    fetch('http://localhost:4000/recepient/api/orphangedeleteform', {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: ID })
    }).then((res) => res.json()).then((result) => {
      window.location.reload();
    });
  };

  return (
    <>
      <Headers />
      <div className="container-fluid" style={{ overflowX: 'hidden' }}>
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-xl-2">
            <Rsidebar />
          </div>

          {/* Main Content */}
          <div className="col-xl-10" style={{ marginLeft: "280px" }}>

            {/* Submission Cards in a Single Row */}
            <div className="d-flex flex-wrap mt-3"  style={{maxHeight:'410px'}}>
              {submission
                .filter((forms) => forms.approval === 0)
                .map((forms, index) => (
                  <div className="card m-2 shadow-sm border-0 px-2" key={index} style={{ borderRadius: "15px", width: "250px",height:'400px'  }}>
                    <img
                      src={`http://localhost:4000/${forms.file}`}
                      className="card-img-top"
                      alt={forms.file}
                      style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                    />
                    <div className="card-body">
                      <p className="card-text"  style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}><strong>Case Details</strong>: {forms.cases}</p>
                      <Link to="/addedit" className="btn btn-warning me-2" style={{ width: "70px" }} state={{ _id: forms._id }}>Edit</Link>
                      <button className="btn btn-danger" onClick={() => deleteForm(forms._id)}>Delete</button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Similar for Dress, Food, Orphanage Forms */}
            <div className="d-flex flex-wrap mt-3 " style={{maxHeight:'410px'}}>
              {dresssubmission
                .filter((dressform) => dressform.approval === 0)
                .map((dressform, index) => (
                  <div className="card m-2 shadow-sm border-0 px-2 py-1" key={index} style={{ borderRadius: "15px", width: "250px",height:'400px' }}>
                    <img
                      src={`http://localhost:4000/${dressform.file}`}
                      className="card-img-top"
                      style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                    />
                    <div className="card-body">
                      <p className="card-text " style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}><strong>Case Details</strong>: {dressform.cases}</p>
                      <Link to="/dressedit" className="btn btn-warning me-2" style={{ width: "70px" }} state={{ _id: dressform._id }}>Edit</Link>
                      <button className="btn btn-danger" onClick={() => handledelete(dressform._id)}>Delete</button>
                    </div>
                  </div>
                ))}
            </div>

            <div className="d-flex flex-wrap mt-3" style={{maxHeight:'410px'}}>
              {foodsubmission
                .filter((foodform) => foodform.approval === 0)
                .map((foodform, index) => (
                  <div className="card m-2 shadow-sm border-0 px-2" key={index} style={{ borderRadius: "15px", width: "250px",height:'400px' }}>
                     <img
                      src={`http://localhost:4000/${foodform.file}`}
                      className="card-img-top"
                      style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                    />
                    <div className="card-body">
                      <p className="card-text"  style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}><strong>Case Details</strong>: {foodform.cases}</p>
                      <Link to="/foodedit" className="btn btn-warning me-2" style={{ width: "70px" }} state={{ _id: foodform._id }}>Edit</Link>
                      <button className="btn btn-danger" onClick={() => fooddeleted(foodform._id)}>Delete</button>
                    </div>
                  </div>
                ))}
            </div>

            <div className="d-flex flex-wrap mt-3" style={{maxHeight:'410px'}}>
              {orphanagesubmission
                .filter((orphangeform) => orphangeform.approval === 0)
                .map((orphangeform, index) => (
                  <div className="card m-2 shadow-sm border-0 px-2" key={index} style={{ borderRadius: "15px", width: "250px" ,height:'400px'}}>
                    <img
                      src={`http://localhost:4000/${orphangeform.file}`}
                      className="card-img-top"
                      style={{ width: "100%", height: "190px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,objectFit:'cover'}}
                    />
                    <div className="card-body">
                      <p className="card-text"  style={{height:'100px',overflowY:"scroll",scrollbarWidth: 'none', msOverflowStyle: 'none'}}><strong>Case Details</strong>: {orphangeform.cases}</p>
                      <Link to="/orphangeedit" className="btn btn-warning me-2" style={{ width: "70px" }} state={{ _id: orphangeform._id }}>Edit</Link>
                      <button className="btn btn-danger" onClick={() => orphangedelete(orphangeform._id)}>Delete</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonnationRequest;
