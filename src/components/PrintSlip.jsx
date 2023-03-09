import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import productContext from "../Context/appContext";

const PrintSlip = () => {
  const { billCart } = useContext(productContext);
  const [totalAmount, setTotalAmount] = useState(0);

  var today = new Date().toLocaleDateString();

  var time = new Date();
  time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    let dummy = [];

    for (let item of billCart) {
      dummy.push(Number(item.price));
    }
    let dummmyPrice;
    if (dummy.length) {
      dummmyPrice = dummy.reduce((a, b) => a + b);
      setTotalAmount(dummmyPrice);
    } else {
      setTotalAmount(dummy[0]);
    }
    console.log("dummy", totalAmount);
  }, []); 
  // setTotalAmount(dummy.reduce((a,b)=>a+b))

  return (
    <div>
      <div className=" h-full flex justify-center " ref={componentRef}>
        <div className=" w-2/4 h-full my-4 bg-gray-200  ">
          <div className="flex flex-col  items-center p-4">
            <img
              src="http://crabgrasss.com/assets/uploads/logos/crabgrass.jpeg"
              alt=""
              className="w-36"
            />
            <p>kanpur ,uttar pradesh</p>
            <p>Tel:123456</p>
            <p>GST Reg: 123456789</p>
          </div>
          <div>
            <div className="flex justify-between  px-20">
              <span>Sale Number :</span>
              <span className="flex justify-start">
                {Math.floor(Math.random() * 10000 * 2)}
              </span>
            </div>
            <div className="flex justify-between px-20">
              <span>Date :</span>
              <span>{today} </span>
            </div>
            <div className="flex justify-between px-20">
              <span>Time :</span>
              <span>{time} </span>
            </div>
            <div className="flex justify-between px-20">
              <span>Sales Associate :</span>
              <span>Crabgrasss Crabgrasss</span>
            </div>
            <div className="flex justify-between px-20 pt-0">
              <span>Customer : </span>
              <span>Walk-in Customer</span>
            </div>
          </div>
          <div>
            {billCart.map((item, id) => {
              return (
                <div key={id} className="flex justify-between px-8 pt-1 ">
                  <span>
                    <span>#:{id + 1} </span>
                    <span>
                      {item.product_name} ({item.size})
                    </span>
                  </span>
                  <span className="text-red-500 font-bold">
                    {item.price}X {item.quantity}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mx-8 mt-1">
            <div className="flex justify-between border-b-2 border-black p-1">
              <span>Total</span>
              <span>{totalAmount}</span>
            </div>
            <div className="flex justify-between border-b-2 border-black p-1">
              <span>Grand Total</span>
              <span>{totalAmount}</span>
            </div>
            <div className="flex justify-between font-light p-1 border-b-2">
              <span>Paid by:Cash</span>
              <span></span>Amount:485.00<span>Change:0</span>
            </div>
            <p className="flex justify-between font-light">
              Thank you for shopping with us. Please come again.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between item center w-full">
        <button
          className="border-2 w-full mx-96 bg-blue-600 p-2 text-white text-lg rounded font-800 hover:bg-blue-500"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default PrintSlip;
