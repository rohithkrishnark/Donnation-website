import React from "react";
import Headers from "./Header";
import { Link } from "react-router-dom";
import "./Home.css";
import Dashboard from "./Chart";
import Rsidebar from "./Rsidebar";

function Rhome() {
  return (
    <>
      <Headers />
     <Rsidebar/>
      <div className="main-content">
        <Dashboard />
      </div>
    </>
  );
}

export default Rhome;
