import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Routing from "./Routing";
import POS from "../components/POS";
import { useLocation } from "react-router-dom";

const DashBoard = () => {
  const {pathname}=useLocation();
  
  // console.log("params",pathname)
  return (
    <>
     {pathname=='/pos' ? <POS/> : <div>
        <Header />
        <div className="flex ">
          <div className="  ">
            <Sidebar />
          </div>
          <div className="w-5/6 ">
            <Routing />
          </div>
        </div>
      </div>}
    </>
  );
};

export default DashBoard;
