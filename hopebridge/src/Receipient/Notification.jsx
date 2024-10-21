import React, { useState, useEffect } from "react";
import Rsidebar from "./Rsidebar";
import Headers from "./Header";
import "./Notify.css"; // Add custom styles

function Notify() {
  const [recepient, setRecepient] = useState(JSON.parse(localStorage.getItem('Recepient')));
  const [submission, setSubmission] = useState([]);
  const [dresssubmission, setDresssubmission] = useState([]);
  const [foodsubmission, setFoodsubmission] = useState([]);
  const [orphanagesubmission, setOrphangesubmission] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/education/notification", {
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

  //dress
  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/dress/notification", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recepient: recepient._id
      })
    })
      .then((res) => res.json())
      .then((result) => {
        setDresssubmission(result.data);
      })
      .catch((error) => {
        console.error("Error fetching dress submissions:", error);
      });
  }, [recepient]);
  //food
  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/food/notification", {
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

  //orphange
  useEffect(() => {
    fetch("http://localhost:4000/recepient/api/orphanage/notification", {
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

  const approvednotificationLength = submission.filter((eduction) => eduction.approval === 1).length +
    dresssubmission.filter((dress) => dress.approval === 1).length +
    foodsubmission.filter((food) => food.approval === 1).length +
    orphanagesubmission.filter((orphan) => orphan.approval === 1).length

  const pendigNotificaionLength = submission.filter((eduction) => eduction.approval === 0).length +
    dresssubmission.filter((dress) => dress.approval === 0).length +
    foodsubmission.filter((food) => food.approval === 0).length +
    orphanagesubmission.filter((orphan) => orphan.approval === 0).length

  return (
    <>
      <Headers />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 ">
            <Rsidebar />
          </div>
          <div className="col-xl-10 ">
            <h2 className="notification-title text-dark mt-2">🔥 𝐃onnation Status 🔥</h2>
            <div className="notification-container ">
              <div className="row w-100 h-100 ">
                <div className="col-xl-6 position-relative  h-100" style={{ overflowY: "scroll", scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <p className="text-center" style={{ fontFamily: 'monospace' }}>Pending Notifications</p>
                  {
                    pendigNotificaionLength && pendigNotificaionLength > 0 ? (
                      <>
                        {submission.length > 0 ? (
                          submission
                            .filter((eduction) => eduction.approval === 0)
                            .map((form, index) => (
                              <div class="alert alert-warning" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{form.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission is pending approval❗.</p>
                              </div>
                            ))
                        ) : null}
                        {dresssubmission.length > 0 ? (
                          dresssubmission
                            .filter((dress) => dress.approval === 0)
                            .map((dressform, index) => (
                              <div class="alert alert-warning" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{dressform.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission is pending approval❗.</p>
                              </div>
                            ))
                        ) : null}

                        {foodsubmission.length > 0 ? (
                          foodsubmission
                            .filter((food) => food.approval === 0)
                            .map((foodform, index) => (
                              <div class="alert alert-warning" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{foodform.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission is pending approval❗.</p>
                              </div>
                            ))
                        ) : null}
                        {orphanagesubmission.length > 0 ? (
                          orphanagesubmission
                            .filter((orphanform) => orphanform.approval === 0)
                            .map((orphangeform, index) => (
                              <div class="alert alert-warning" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{orphangeform.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission is pending approval❗.</p>
                              </div>
                            ))
                        ) : null}
                      </>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <img src="/nonotification.avif" className="rounded-circle" alt="" style={{
                       width:400,
                       height:400,
                       
                      }} />
                   </div>
                    )
                  }
                </div>

                <div className="col-xl-6  position-relative h-100" style={{ overflowY: "scroll", scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <p className="text-center" style={{ fontFamily: 'monospace' }}>Approved Notifications</p>
                  {
                    approvednotificationLength && approvednotificationLength > 0 ? (
                      <>
                        {submission.length > 0 ? (
                          submission
                            .filter((eduction) => eduction.approval === 1)
                            .map((form, index) => (
                              <div class="alert alert-success" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{form.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission has been approved by the admin 🤝.</p>
                              </div>
                            ))
                        ) : null}
                        {dresssubmission.length > 0 ? (
                          dresssubmission
                            .filter((dress) => dress.approval === 1)
                            .map((dressform, index) => (
                              <div class="alert alert-success" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{dressform.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission has been approved by the admin 🤝.</p>
                              </div>
                            ))
                        ) : null}
                        {foodsubmission.length > 0 ? (
                          foodsubmission
                            .filter((food) => food.approval === 1)
                            .map((foodform, index) => (
                              <div class="alert alert-success" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{foodform.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission has been approved by the admin 🤝.</p>
                              </div>
                            ))
                        ) : null}
                        {orphanagesubmission.length > 0 ? (
                          orphanagesubmission
                            .filter((orphanform) => orphanform.approval === 1)
                            .map((orphangeform, index) => (
                              <div class="alert alert-success" role="alert" key={index}>
                                <h5 style={{ fontSize: 14 }}>{orphangeform.name}</h5>
                                <p style={{ fontSize: 12 }}> Your submission has been approved by the admin 🤝.</p>
                              </div>
                            ))
                        ) : null}
                      </>
                    ) : (
                      <>
                        <div className="d-flex align-items-center justify-content-center w-100 h-100">
                           <img src="/nonotification.avif" className="rounded-circle" alt="" style={{
                            width:400,
                            height:400,
                            
                           }} />
                        </div>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notify;
