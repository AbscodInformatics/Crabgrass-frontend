import React, { useEffect, useRef, useState } from "react";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

function POS() {
  const navigate=useNavigate()
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [arrow, setArrow] = useState(false);
  const [customer, setCustomer] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [qty, setqty] = useState(0);
  const [slipShow, setSlipShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let result = await fetch(`${process.env.REACT_APP_API_BASE_URL}/products`);
    result = await result.json();
    setData([...result]);
  };

  const addHandler = () => {
    let dummyData = searchData.toLowerCase();
    let filterData = data.filter(
      (item) => item.product_name.toLowerCase() === dummyData
    );
    if (filterData.length >= 1) {
      let dummy = filterData[0];
      setCart([...cart, dummy]);
      setqty(qty + 1);
      setTotalAmount(totalAmount + Number(dummy.price));
    } else {
      alert("Product not found");
    }
    setSearchData("");
  };
  const deleteHandle = (id) => {
    let dummyData = cart.filter((item) => item._id !== id);
    setCart([...dummyData]);
  };

  return (
    <div className="flex flex-col h-screen ">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-6 ">
            <div className="flex  justify-center text-white font-bold">
              Point Of Sale
            </div>
            <h3 className=" absolute right-5 text-white cursor-pointer">
              <NavLink
                className="flex justify-center items-center"
                to="/dashboard"
              >
                <AiOutlineHome size={18} />
                <span className="pl-1 pb-1  ">Home</span>
              </NavLink>
            </h3>
          </div>
        </div>
      </nav>
      <div className="flex-1 flex ">
        <div className="w-2/6 border-slate-400 ">
          <div className="flex justify-between items-center">
            <div className=" m-2 w-full   border-slate-300 relative">
              <input
                type="text"
                name=""
                id=""
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                placeholder="Enter Customer Name "
                className="  w-full  border-2  p-1 "
              />
              {arrow ? (
                <div
                  onClick={() => {
                    setCustomer("Walk in Customer");
                    setArrow(!arrow);
                  }}
                  className="top-9 z-30 absolute bg-gray-600 p-1 text-white w-full"
                >
                  Walk in Customer
                </div>
              ) : null}
            </div>
            <div
              className="px-7  py-3 pr-8 ml-2  bg-indigo-700 rounded  text-white hover:bg-indigo-600"
              onClick={() => setArrow(!arrow)}
            >
              {arrow ? <BiDownArrow /> : <BiRightArrow />}
            </div>
          </div>
          <div className="flex w-full ">
            <input
              type="text"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="Search Product"
              className="w-full m-2 p-1 border-2 border-slate-300"
            />
            <div
              onClick={addHandler}
              className="text-white  py-2 px-9 ml-3 mt-2 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-10  rounded flex items-center justify-center"
            >
              ADD
            </div>
          </div>
          <div className="border-2 h-3/5 dark:bg-gray-800">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded">
              <thead>
                <tr className="w-full h-10 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th className="pl-3 text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Product
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Price
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Qty
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Subtotal
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr
                      key={item._id}
                      className="h-12 border-gray-300  border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out"
                    >
                      <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.product_name}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.price}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        1
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.price}
                      </td>
                      <td>
                        <div
                          onClick={() => deleteHandle(item._id)}
                          className="p-2 pr-1 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-trash"
                            width={16}
                            height={20}
                            viewBox="0 0 20 20"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={7} x2={20} y2={7} />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <div className="flex justify-evenly m-3">
              <span>Items: {qty}</span>
              <span>Total: {totalAmount}</span>
            </div>

            <div className="bg-gray-700 p-2  text-white font-bold">
              <div className="flex justify-between m-3    mr-14 mt-4 sm:mt-0 md:mt-5 lg:mt-0 ">
                <span className="">Total Payable:</span>
                <span>Rs.{totalAmount}</span>
              </div>
            </div>
            <div className=" flex justify-center w-full mr-14 mt-4 sm:mt-0 md:mt-5 lg:mt-0">
              <button
                onClick={() => navigate('/bill')}
                className=" w-full m-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-4 text-base md:text-xl"
              >
                Payment
              </button>
            </div>
          </div>
        </div>
        <div className="ml-4" style={{}}>
          <div></div>
          <h1>HEllo</h1>
        </div>
      </div>
    </div>
  );
}

export default POS;
