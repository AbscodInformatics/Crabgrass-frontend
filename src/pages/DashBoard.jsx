import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Routing from "./Routing";

const DashBoard = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex ">
          <div className="  ">
            <Sidebar />
          </div>
          <div className="w-5/6  body-scroll">
            {/* <Routing /> */}
            Dash board Page
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
