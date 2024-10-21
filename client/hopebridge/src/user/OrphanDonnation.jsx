import React, { useState, useEffect } from "react";
import Headers from "../Receipient/Header";
import { Link } from "react-router-dom";
import "./OrphanDonnation.css"; // Optional: Add custom styles

function OrphanDonnation() {
  const [orphanagesubmission, setOrphangesubmission] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/orpahn/foruser")
      .then((res) => res.json())
      .then((result) => {
        setOrphangesubmission(result.data);
      });
  }, []);

  return (
    <>
      <Headers />
      <div className="">
                <img src="./banner.jpg" alt="Hopebridge Banner" className="banner-image" />
            </div>
            <div className="banner-text">
                <h1>Help orphange</h1>
            </div>
        
        <div className="container mt-5">
            <h3 style={{fontWeight:"bolder"}}>Help An Orphanage</h3>
            <div>
                <p>At Hopebridge, we are dedicated to making a meaningful impact in the lives of orphaned and vulnerable children. Our orphanage support program focuses on providing essential resources such as nutritious meals, clothing, education, and healthcare to ensure the well-being and development of children who lack parental care. By supporting orphanages, we aim to create a nurturing environment where every child feels valued, loved, and empowered to pursue their dreams. Your contributions help us bring hope and a brighter future to these young lives, giving them a chance to thrive and succeed.</p>
            </div>
        </div>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {orphanagesubmission.length > 0 ? (
            orphanagesubmission.map((form) => (
              <div className="col-xl-3 col-md-6 mb-4 " style={{height:'500px'}} key={form._id}>
                <div className="card shadow-sm border-0" style={{ borderRadius: "15px", height: "100%" }}>
                  <img
                    src={`http://localhost:4000/${form.file}`}
                    className="card-img-top"
                    alt={form.file}
                    style={{ height: "150px", objectFit: "contain", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{form.name}</h6>
                    <p className="card-text mb-0"><strong>Address:</strong> {form.address}</p>
                    <p className="card-text mb-0"><strong>Contact:</strong> {form.number}</p>
                    <p className="card-text mb-0"><strong>Cases:</strong> {form.cases}</p>
                    <p className="card-text mb-0"><strong>Count:</strong> {form.count}</p>
                    <p className="card-text mb-0"><strong>Type:</strong> {form.types}</p>
                    <p className="card-text mb-0"><strong>Date of Need:</strong> {new Date(form.dates).toDateString()}</p>
                  </div>
                  <div className="card-footer text-center">
                    {form.approval === 1 ? (
                      <Link to='/donate' className="badge bg-success text-decoration-none">Donate Now</Link>
                    ) : (
                      <span className="badge bg-warning">Pending</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No orphanage donations available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default OrphanDonnation;
