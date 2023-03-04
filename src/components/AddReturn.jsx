import React from "react";
import { useFormik } from "formik";
import { returnSchema } from "../Schemas";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AddReturn() {
  const {errors,touched,values,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:{
      date:'',
      reference_no:'',
      biller:'',
      customer_name:'',
      total:'',
      payment_status:''
    },
    validationSchema:returnSchema,
    onSubmit:(values,action)=>{
       //setData(values)
       apiData(values);
      action.resetForm()
    }
  }) 
  // console.log("data",data)
 
const apiData=(body)=>{
  console.log("data",body)
   fetch('https://crabgrassbackend.onrender.com/add-return',{
    method:'POST',
    body:JSON.stringify(body),
    headers:{
      'content-type':'application/json'
    }
  }).then((resp)=>resp.json())
  .then((res)=>console.log(res))
  
  
}


  return (
    <>
    <div>
        <Header />
        <div className="flex ">
          <div className="  ">
            <Sidebar />
          </div>
          <div className="w-5/6  body-scroll">
          <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <form action="" onSubmit={handleSubmit}>
          <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
            <div>
              <p className="text-xl font-semibold leading-tight text-gray-800 text-center">
                Add Return
              </p>
            </div>

            <div className="pt-5">
              <p className="text-xl font-medium leading-tight text-gray-800">
                General Information
              </p>
            </div>
            <div className="lg:flex md:block block justify-center gap-4 pt-6">
              <div className="w-full">
                <p className="text-base leading-none text-gray-800">Date</p>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  placeholder="Enter Date"
                  className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                />
                {
                   errors.date && touched.date ? <p style={{color:'red'}}>{errors.date}</p>:null

                }
              </div>
              <div className="w-full">
                <p className="text-base leading-none text-gray-800">
                  Reference No.
                </p>
                <input
                  type="text"
                  name="reference_no"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reference_no}
                  placeholder="Enter Reference No."
                  className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                />{
                   errors.reference_no && touched.reference_no ? <p style={{color:'red'}}>{errors.reference_no}</p>:null
                   
                }
              </div>
            </div>

            <div className="pt-6">
              <div className="lg:flex md:block block justify-between gap-4">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">Biller</p>
                  <input
                    type="text"
                    name="biller"
                    onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.biller}
                    placeholder="Enter Biller Name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {
                   errors.biller && touched.biller ? <p style={{color:'red'}}>{errors.biller}</p>:null
                   
                }
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                    Customer Name
                  </p>
                  <input
                    type="text"
                    name="customer_name"
                    onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.customer_name}
                    placeholder="Enter Customer Name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                  />
                  {
                   errors.customer_name && touched.customer_name ? <p style={{color:'red'}}>{errors.customer_name}</p>:null
                   
                }
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="lg:flex md:block block justify-between gap-4">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">
                    Grand Total
                  </p>
                  <input
                    type="text"
                    name="total"
                    onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.total}
                    placeholder="Enter total Amount"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {
                   errors.total && touched.total ? <p style={{color:'red'}}>{errors.total}</p>:null
                   
                }
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                    Payment Status
                  </p>
                  <input
                    type="text"
                    name="payment_status"
                    onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.payment_status}
                    placeholder="Enter Payment Status"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                  />
                  {
                   errors.payment_status && touched.payment_status ? <p style={{color:'red'}}>{errors.payment_status}</p>:null
                   
                }
                </div>
              </div>
            </div>
            <div className="lg:flex md:block block justify-between gap-5 items-center pt-5"></div>
            <div>
              <div className="lg:block md:hidden hidden">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 pt-4"></div>
                  <div className="flex gap-5 pt-4">
                    <button
                      type="onSubmit"
                      className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600"
                    >
                      Add Return
                      <svg
                        className="mt-1 float-right flex justify-center items-center"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          </form>
        </div>
      </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default AddReturn;
