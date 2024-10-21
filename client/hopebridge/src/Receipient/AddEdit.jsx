import React, { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import Headers from "./Header";
import "./Add.css"
import Rsidebar from "./Rsidebar";
function Addedit() {
    const location=useLocation()
    const navigate=useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")
  const [dates, setDate] = useState("")
  const [amount, setAmount] = useState("")
  const [cases, setCase] = useState("")
  const[file,setFile]=useState("")
  const[refresh,setRefresh]=useState(0)
  const [recepient, setRecepient] = useState(JSON.parse(localStorage.getItem('Recepient')));
  console.log(recepient);
  console.log(recepient._id);
  useEffect(() => {
    // Ensure the ID is correctly passed and fetch the correct data for the recipient
    if (location.state && location.state._id) {
      let data = {
        id: location.state._id,  // Use the correct ID from the location state
      };
  
      fetch('http://localhost:4000/recepient/educationeditview', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setName(result.name);
            setEmail(result.email);
            setNumber(result.number);
            setAge(result.age);
            setGender(result.gender);
            setAmount(result.amount);
            setAddress(result.address);
            setDate(result.dates);
            setCase(result.cases);
            setFile(result.file);
          }
        })
        .catch((error) => {
          console.error('Error fetching recipient data:', error);
        });
    } else {
      console.error('Recipient ID is missing in the location state');
    }
  }, [location.state, refresh]);  // Ensure the effect runs when the state changes
  
  

  const handlesubmit = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
  
    const formdata = new FormData();
    formdata.append("id", location.state._id);  // Ensure you're using the correct ID
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("number", number);
    formdata.append("age", age);
    formdata.append("gender", gender);
    formdata.append("address", address);
    formdata.append("dates", dates);
    formdata.append("amount", amount);
    formdata.append("cases", cases);
    formdata.append("file", file);
  
    if (recepient && recepient._id) {
      formdata.append("recepient_id", recepient._id);
    } else {
      console.error('Recepient ID is missing!');
      return;
    }
  
    fetch('http://localhost:4000/recepient/educationedit', {
      method: 'post',
      body: formdata
    }).then((res) => res.json()).then((result) => {
      if (result.message === "Recipient updated successfully") {
        console.log(result.message);
        navigate('/totalsubmission'); // Redirect to success page or desired route
      } else {
        console.error("Update failed:", result.message);
      }
    }).catch((error) => {
      console.error("Error in update process:", error);
    });
  }
  





  return (
    <>
      <Headers />
      <div className="sidebars">
        <div style={{ marginLeft: "15px" }}>
          <Link to="/" style={{ textDecoration: "none" }} className="sidebars-brand">
            HopeBridge
          </Link>
        </div>
        <Rsidebar/>
      </div>
      <div className="form">
        <div>
          <h3 style={{ color: "#f7c02b" }}>Beneficiaries Details </h3>
        </div>
        <form action="" onSubmit={handlesubmit}>
          <div className="field">
            <span>
              <input type="text" placeholder="Name" value={name} style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setName(e.target.value)} />

            </span>
            <span>
              <input type="email" placeholder="Email"value={email} style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setEmail(e.target.value)} />
            </span>
          </div>
          <div className="field">
            <span >
              <input type="number" placeholder="Phone number"value={number} style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setNumber(e.target.value)} />

            </span>
            <span>
              <input type="number" placeholder="Age"value={age} style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setAge(e.target.value)} />
            </span>
          </div>


          <div className="field">
            <span >
              <input type="text" placeholder="Gender"value={gender} style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setGender(e.target.value)} />

            </span>
            <span>
              <input type="text" placeholder="Address"value={address} style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setAddress(e.target.value)} />
            </span>
          </div>



          <div className="field">
            <span >
              <input type="date" placeholder="Date of Need"value={dates} style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setDate(e.target.value)} />

            </span>
            <span>
              <input type="number" placeholder="Goal Amount"value={amount} style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setAmount(e.target.value)} />
            </span>
          </div>
          <div>
            <textarea name="" id="" placeholder="Case Details"value={cases} style={{ borderRadius: "20px", width: "400px", marginLeft: "200px", paddingLeft: "30px", marginTop: "30px" }} onChange={(e) => setCase(e.target.value)}></textarea>
          </div>
          <div>
            <input type="file" placeholder="upload image"   style={{ borderRadius: "20px", width: "400px", marginLeft: "250px", paddingLeft: "30px", marginTop: "30px" ,color:"white"}} onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
          <div>
            <button className="btn btn-warning" style={{ marginLeft: "300px", width: "200px", marginTop: "30px" }} type="submit">update</button>
          </div>

        </form>
      </div>

    </>
  );
}

export default Addedit;