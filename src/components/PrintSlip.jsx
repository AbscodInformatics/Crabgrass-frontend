import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrintSlip = ({slipShow}) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  return (
    <div>
      <div className="border-2  h-full flex justify-center " ref={componentRef}>
      <div className=" w-2/4 h-full my-4 bg-gray-200  "  >
       <div className="flex flex-col  items-center p-4">
        <img src="http://crabgrasss.com/assets/uploads/logos/crabgrass.jpeg" alt="" className="w-36"/>
        <h2>TEST BILLER</h2>
        <p>kanpur ,uttar pradesh</p>
        <p>Tel:123456</p>
        <p>GST Reg: 123456789</p>
        <p>VAT Reg: 987654321</p>
       </div>
       <div>
        <div className="flex justify-between  px-20">
            <span>Sale Number :</span>
            <span className="flex justify-start">12</span>
        </div>
        <div className="flex justify-between px-20">
            <span>Date & Time :</span>
            <span>24/02/2023 17:13</span>
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
        <div className="flex justify-between px-8 pt-1 ">
            <span>
                <span>#1: </span>
                <span>jeans (levis-32)</span>
            </span>
            <span className="text-red-500 font-bold">100 X 5</span>
        </div>
        <div className="flex justify-between px-8 pt-1">
            <span>
                <span>#1: </span>
                <span>jeans (levis-32)</span>
            </span>
            <span className="text-red-500 font-bold">100 X 5</span>
        </div>
    
       </div>
       <div className="mx-8 mt-1">
        <div className="flex justify-between border-b-2 border-black p-1">
            <span>Total</span>
            <span>500.00</span>
        </div>
        <div className="flex justify-between border-b-2 border-black p-1">
            <span>Grand Total</span>
            <span>500.00</span>
        </div>
        <div className="flex justify-between font-light p-1 border-b-2">
            <span>Paid by:Cash</span><span></span>Amount:485.00<span>Change:0</span>
        </div>
        <p className="flex justify-center font-light">Thank you for shopping with us. Please come again.</p>
       </div>
      </div>

    </div>
      <button className="border-2 flex justify-center" onClick={handlePrint}>Print</button>

    </div>
  
  );
};

export default PrintSlip;
