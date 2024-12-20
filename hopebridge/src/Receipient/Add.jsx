import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Headers from "./Header";
import "./Add.css"
import Rsidebar from "./Rsidebar";
function Add() {
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
  const [recepient, setRecepient] = useState(JSON.parse(localStorage.getItem('Recepient')));
  console.log(recepient);
  console.log(recepient._id);

  

  const handlesubmit = (event) => {
    // let params = {
    //   name: name,
    //   email: email,
    //   number: number,
    //   age: age,
    //   gender: gender,
    //   address: address,
    //   dates: dates,
    //   amount: amount,
    //   cases: cases,
    //   file:file,
    //   recepient_id:recepient._id
    // }
    const formdata= new FormData()
    formdata.append("name",name)
    formdata.append("email",email)
    formdata.append("number",number)
    formdata.append("age",age)
    formdata.append("gender",gender)
    formdata.append("address",address)
    formdata.append("dates",dates)
    formdata.append("amount",amount)
    formdata.append("cases",cases)
    formdata.append("file",file)
    if (recepient && recepient._id) {
      formdata.append("recepient_id", recepient._id);
    } else {
      console.error('Recepient ID is missing!');
      return; // Stop submission if recepient_id is missing
    }



    fetch('http://localhost:4000/main/dform', {
      method: 'post',
      body:formdata
    }).then((res) => res.json()).then((result) => {
      console.log(result);
      window.location.reload()

    })
    event.preventDefault()
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
              <input type="text" placeholder="Name" style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setName(e.target.value)} />

            </span>
            <span>
              <input type="email" placeholder="Email" style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setEmail(e.target.value)} />
            </span>
          </div>
          <div className="field">
            <span >
              <input type="number" placeholder="Phone number" style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setNumber(e.target.value)} />

            </span>
            <span>
              <input type="number" placeholder="Age" style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setAge(e.target.value)} />
            </span>
          </div>


          <div className="field">
            <span >
              <input type="text" placeholder="Gender" style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setGender(e.target.value)} />

            </span>
            <span>
              <input type="text" placeholder="Address" style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setAddress(e.target.value)} />
            </span>
          </div>



          <div className="field">
            <span >
              <input type="date" placeholder="Date of Need" style={{ width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px", marginLeft: "40px" }} onChange={(e) => setDate(e.target.value)} />

            </span>
            <span>
              <input type="number" placeholder="Goal Amount" style={{ marginLeft: "30px", width: "330px", height: "40px", borderRadius: "30px", paddingLeft: "30px" }} onChange={(e) => setAmount(e.target.value)} />
            </span>
          </div>
          <div>
            <textarea name="" id="" placeholder="Case Details" style={{ borderRadius: "20px", width: "400px", marginLeft: "200px", paddingLeft: "30px", marginTop: "30px" }} onChange={(e) => setCase(e.target.value)}></textarea>
          </div>
          <div>
            <input type="file" placeholder="upload image"style={{ borderRadius: "20px", width: "400px", marginLeft: "250px", paddingLeft: "30px", marginTop: "30px" ,color:"white"}} onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
          <div>
            <button className="btn btn-warning" style={{ marginLeft: "300px", width: "200px", marginTop: "30px" }} type="submit">Submit</button>
          </div>

        </form>
      </div>

    </>
  );
}

export default Add;