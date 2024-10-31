import React, { useEffect, useState } from "react";
import Rsidebar from "./Rsidebar";
import Headers from "./Header";
import "./Notify.css"; // Add custom styles
import { useQuery } from '@tanstack/react-query';

function DonationTracking() {
  const [education, setEducation] = useState([]); 
  const [dressdata, setDressData] = useState([]);

  
  
  const [recepient, setRecepient] = useState(() => {
    const storedRecepeint = localStorage.getItem("Recepient");
    return storedRecepeint ? JSON.parse(storedRecepeint) : null;
  });

  const fetchEducationData = async (recepient) => {
    const response = await fetch("http://localhost:4000/recepient/api/totalsubmission", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recepient: recepient })
    });
    if (!response.ok) {
      throw new Error("Network Response was not ok!");
    }
    const jsonData = await response.json();
    setEducation(jsonData.data);
    return jsonData;
  };
  
  const fetchDressData = async (recepient) => {
    const response = await fetch("http://localhost:4000/recepient/api/viewdressform", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recepient: recepient })
    });
    if (!response.ok) {
      throw new Error("Network Response was not ok!");
    }
    const jsonDressdata = await response.json();
    setDressData(jsonDressdata.data);
    return jsonDressdata;
  };

  const { data: iseducation, error: isEducationError, isLoading: isEducationLoading } = useQuery({
    queryKey: ['educationData', recepient?._id],
    queryFn: () => fetchEducationData(recepient._id),
    enabled: !!recepient // Ensure the query runs only when the recipient is available
  });

  const { data: Dressdata, error: isDressError, isLoading: isDressLoading } = useQuery({
    queryKey: ['dressData', recepient?._id],
    queryFn: () => fetchDressData(recepient._id),
    enabled: !!recepient // Ensure the query runs only when the recipient is available
  });

  if (isEducationLoading || isDressLoading) return <div>Loading...</div>;
  if (isEducationError || isDressError) return <div>Error: {isEducationError?.message || isDressError?.message}</div>;

  return (
    <>
      <Headers />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2">
            <Rsidebar />
          </div>
          <div className="col-xl-10" style={{ height: '90vh' }}>
            <h5 className="donation-title text-dark mt-2" style={{fontFamily:"revert-layer"}}>Approved by Admin💖🥰</h5>
            
            {/* Education Section */}
             {education &&  <h6 className="text-dark">Education Donations</h6>}
            <div className="donation-container mt-4">
              <div className="row  w-100">
                {education
                  .filter((recipient) => recipient.approval === 1)
                  .map((recipient) => {
                    const goalAmount = recipient.amount;
                    const userDonation = parseFloat(recipient.received_amoutn || 0);
                    const progressprecentage = Math.floor((userDonation / goalAmount) * 100) || 0;

                    let progressMessage = "";
                    if (userDonation >= goalAmount) {
                        progressMessage = "Congratulations, you have raised the required fund for this dress!🎁❤️";
                      } else if (userDonation >= (2 * goalAmount) / 3) {
                        progressMessage = "Awesome! You're just a few steps away from the milestone!🎉";
                      } else if (userDonation >= goalAmount / 3) {
                        progressMessage = "Good progress! Keep going!📈";
                      }else if(userDonation >= 0){
                          progressMessage = "we have just Received money💪"
                      }
                       else {
                        progressMessage = "Not started collecting money.🌈";
                      }

                    return (
                      <div className="col-xl-3 py-2" style={{ height: 410}} key={recipient._id}>
                        <div className="card w-100 border shadow px-1 py-1 rounded" style={{ height: '99%' }}>
                          <div style={{ width: '100%', height: 200 }}>
                            <img src={`http://localhost:4000/${recipient.file}` || "/poor.jpg"}
                              className="rounded"
                              alt=""
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                          <h5 className="text-danger mb-0 mt-1" style={{ fontFamily: 'cursive', fontSize: 15, fontWeight: 600 }}>{recipient.name}</h5>
                          <p className="card-text" style={{ fontFamily: 'revert', fontSize: 12, fontWeight: 500 }}>
                            The Amount Needed for this client <strong>₹{recipient.amount}</strong>!
                          </p>
                          <div className="progress mb-3" style={{ height: "30px", borderRadius: "15px" }}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{
                                width: `${progressprecentage}%`,
                                borderRadius: "15px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              aria-valuenow={progressprecentage}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {progressprecentage}%
                            </div>
                          </div>
                          <p className="mb-0" style={{fontSize:10}}>You've donated: <strong>₹{recipient.received_amoutn}</strong> out of <strong>₹{recipient.amount}</strong></p>
                          <p style={{ fontFamily: 'revert', fontSize: 12, fontWeight: 500 }}>
                            {progressMessage}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Dress Data Section */}
              <h6 className="text-dark">Dress Donations</h6>
            <div className="donation-container mt-4">
              <div className="row   w-100">
                {dressdata && dressdata
                  .filter((dress) => dress.approval === 1) 
                  .map((dress) => {
                    const goalAmount = dress.count; 
                    const userDonation = parseFloat(dress.received_amount|| 0);
                    const progressprecentage = Math.floor((userDonation / goalAmount) * 100) || 0;

                    let progressMessage = "";
                    if (userDonation >= goalAmount) {
                      progressMessage = "Congratulations, you have raised the required fund for this dress!🎁❤️";
                    } else if (userDonation >= (2 * goalAmount) / 3) {
                      progressMessage = "Awesome! You're just a few steps away from the milestone!🎉";
                    } else if (userDonation >= goalAmount / 3) {
                      progressMessage = "Good progress! Keep going!📈";
                    }else if(userDonation >= 0){
                        progressMessage = "we have just Received money💪"
                    }
                     else {
                      progressMessage = "Not started collecting money.🌈";
                    }

                    return (
                      <div className="col-xl-3  py-2" style={{ height: 410 }} key={dress._id}>
                        <div className="card w-100 border shadow px-1 py-1 rounded" style={{ height: '99%' }}>
                          <div style={{ width: '100%', height: 200 }}>
                            <img src={`http://localhost:4000/${dress.file}` || "/default-dress.jpg"} 
                              className="rounded"
                              alt=""
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                          <h5 className="text-danger mb-0 mt-1" style={{ fontFamily: 'cursive', fontSize: 15, fontWeight: 600 }}>{dress.name}</h5>
                          <p className="card-text" style={{ fontFamily: 'revert', fontSize: 12, fontWeight: 500 }}>
                            The Amount Needed for this dress <strong>₹{dress.count}</strong>!
                          </p>
                          <div className="progress mb-3" style={{ height: "30px", borderRadius: "15px" }}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{
                                width: `${progressprecentage}%`,
                                borderRadius: "15px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              aria-valuenow={progressprecentage}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {progressprecentage}%
                            </div>
                          </div>
                          <p className="mb-0" style={{fontSize:10}}>You've donated: <strong>₹{dress.received_amount}</strong> out of <strong>₹{dress.count}</strong></p>
                          <p style={{ fontFamily: 'revert', fontSize: 12, fontWeight: 500 }}>
                            {progressMessage}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* {food donnation} */}

            
          </div>
        </div>
      </div>
    </>
  );
}

export default DonationTracking;
