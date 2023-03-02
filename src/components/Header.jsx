import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiBillLine } from "react-icons/ri";

export default function Header() {
  const [rotate, setRotate] = useState(false);
  const data = JSON.parse(localStorage.getItem("signin"));
  // console.log("header data",data.name)
  return (
    <div className=" ">
      <div className=" h-full relative">
        <div className="bg-black text-white">
          <div className="1xl:container 2xl:mx-auto">
            <nav className="text-white">
              <div className=" flex flex-row h-12 justify-between">
                <div className=" flex space-x-2 items-center py-2 lg:pl-7 sm:pl-6  pl-4 pr-8 text-white">
                  <img
                    src="./Images/crabgrass.png"
                    alt="logo"
                    className="w-20 "
                  />
                </div>
                {/* For large (i.e. desktop and laptop sized screen) */}
                <div className="flex  item-center  absolute right-60 m-2 pl-2 p-1 w-20 bg-blue-400 rounded hover:bg-blue-300">
                  <NavLink
                    to="/pos"
                    className="flex  item-center justify-center  text-white  rounded "
                  >
                    <RiBillLine size={20} className="ml-1" />
                    POS
                  </NavLink>
                </div>
                <div className=" hidden sm:flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8">
                  <div className=" flex justify-center items-center flex-row text-white">
                    <img
                      className="w-10 h-10 "
                      src="https://i.ibb.co/QMddNDb/Ellipse-14.png"
                      alt="individual person "
                    />
                    <div className="ml-2">
                      <p className="text-lg leading-4 font-semibold ">
                        {data.name}
                      </p>
                      <p className=" font-normal text-xs leading-3  mt-1">
                        {data.email}
                      </p>
                    </div>
                    <svg
                      onClick={() => setRotate(!rotate)}
                      className={`${
                        rotate ? "rotate-180" : ""
                      } cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800`}
                      width={14}
                      height={8}
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Burger Icon */}
                <div
                  id="bgIcon"
                  className=" focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className=" transform duration-150"
                      d="M4 6H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className=" transform duration-150"
                      d="M4 18H20"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* for medium-sized devices */}
              <div className="lg:hidden hidden sm:flex flex-col lg:px-7 sm:px-6 px-4 ">
                <hr className=" w-full bg-gray-200 " />
                <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                  <div className>
                    <p className=" font-normal text-xs leading-3 text-gray-600">
                      Hi David
                    </p>
                    <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">
                      Welcome Back
                    </h3>
                  </div>
                  <div className=" focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded ">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z"
                        stroke="#6B7280"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 14L10 10"
                        stroke="#6B7280"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      aria-label="Search Bar"
                      className=" focus:outline-none w-44 lg:w-56 xl:w-64 bg-gray-50 font-normal text-sm leading-4 text-gray-500 placeholder-gray-500 "
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Mobile and Small devices Navigation */}
        <div
          id="MobileNavigation"
        
        >
          <div className=" flex flex-col justify-between h-auto ">
            <div className=" flex flex-col lg:px-7 sm:px-6 px-4">
              <hr className=" w-full bg-gray-200 " />
              <div className="lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4">
                <div className>
                  <p className=" font-normal text-xs leading-3 text-gray-600">
                    Hi David
                  </p>
                  <h3 className=" font-bold text-xl leading-5 text-gray-800 mt-2">
                    Welcome Back
                  </h3>
                </div>
                <div className="cursor-pointer relative flex justify-center items-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200" />
                  <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg" />
                </div>
              </div>
              <div className=" w-auto sm:w-96 focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center pl-4  space-x-3 rounded mt-4 ">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14L10 10"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  aria-label="Search Bar"
                  className=" focus:outline-none w-full bg-gray-50 font-normal pl-2 text-sm leading-4  py-3.5 text-gray-500 placeholder-gray-500 "
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className=" flex items-center flex-row py-6 px-8 bg-gray-100 absolute bottom-0 left-0 w-full">
              <img
                className="w-10 h-10 "
                src="https://i.ibb.co/QMddNDb/Ellipse-14.png"
                alt="individual person "
              />
              <div className="ml-2">
                <p className="text-lg leading-4 font-semibold text-gray-800">
                  {data.name}
                </p>
                <p className=" font-normal text-xs leading-3 text-gray-600 mt-1">
                  {data.email}
                </p>
              </div>
              <svg
                onclick="rotateIcon()"
                className="cursor-pointer transform duration-100 xl:ml-7 ml-3.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 "
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
