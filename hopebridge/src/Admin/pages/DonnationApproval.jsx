import React, { useState, useEffect } from "react";
import Adminheader from "../Adminheader";
import Adminsidebar from "../Adminsidebar";
import '../styles/new.css'
import 'react-toastify/dist/ReactToastify.css'; // Importing the CSS for the toast
import { toast ,ToastContainer } from 'react-toastify';

const handleApprove = async (ID) => {
    console.log(ID);
    try {
        const response = await fetch("http://localhost:4000/admin/api/education/approval", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: ID })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);

        // Show success toast
        toast.success("Approval updated successfully!");
    } catch (error) {
        console.log(error);
        // Show error toast
        toast.error("Failed to update approval: " + error.message);
    }
};



function DonnationApproval() {
    const [education, setEducation] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/admin/api/education/request").then((res) => res.json()).then((result) => {
            console.log(result);
            setEducation(result ? result : []);
        });
    }, []);

  const handleapprove = async (ID) => {
    console.log(ID);
    try {
        const response = await fetch("http://localhost:4000/admin/api/education/approval", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: ID })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);
        toast.success("Approval updated successfully!");
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    } catch (error) {
        console.log(error);
        // Show error toast
        toast.error("Failed to update approval: " + error.message);
    }
};
    return (
        <>
            <Adminheader />
            <div className="row">
                <div className="col-xl-2">
                    <Adminsidebar />

                </div>
                <div className="col-xl-10">
                    {
                        education && education.length > 0 && (
                            education.map((value, index) => {
                                return (
                                    <div className=" row d-flex align-items-center shadow rounded mb-2" style={{ width: '90%', minHeight: 220 }} key={index}>
                                        <div className="col-xl-3">
                                            <img src={`http://localhost:4000/${value.file}`} className="rounded-circle" style={{ width: 200, height: 200 }} alt="" />
                                        </div>
                                        <div className="col-xl-7">
                                            <h6 className="text mt-1 mb-0 "> <strong className="text-danger">Name</strong> :{value.name}</h6>
                                            <h6 className="text mt-1 mb-0"> <strong className="text-danger">Gender</strong> :{value.gender}</h6>
                                            <h6 className="text mt-1 mb-0"> <strong className="text-danger">Age</strong> :{value.age}</h6>
                                            <h6 className="text mt-1 mb-0"> <strong className="text-danger">Email</strong> : {value.email}</h6>
                                            <h6 className="text mt-1 mb-0"> <strong className="text-danger">Address</strong> : {value.address}</h6>
                                            <h6 className="text mt-1 mb-0"> <strong className="text-danger">Number</strong> :{value.number}</h6>
                                            <h6 className="text mt-1 mb-0"> <strong className="text-danger">cases</strong> : {value.cases}</h6>
                                        </div>
                                        <div className="col-xl-2">
                                            <button className="btn btn-outline-success" onClick={() => handleapprove(value._id)}>Approve</button>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}

export default DonnationApproval;