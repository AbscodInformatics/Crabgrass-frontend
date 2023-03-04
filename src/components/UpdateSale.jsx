import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { saleSchema } from "../Schemas";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function UpdateSale() {
  const navigate = useNavigate();
  const params = useParams();
  const [sale, setSale] = useState();

  const { errors, values, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        date: "",
        biller_name: "",
        customer_name: "",
        price: "",
        quantity: "",
        product: "",
      },
      validationSchema: saleSchema,
      onSubmit: (values, action) => {
        apiData(values);
        navigate("/listsale");
      },
    });

  useEffect(() => {
    const getSaleDetail = async () => {
      let resp = await fetch(`https://crabgrassbackend.onrender.com/sale/${params.id}`);
      let result = await resp.json();
      setSale(result);
      values.date = result.date;
      values.biller_name = result.biller_name;
      values.customer_name = result.customer_name;
      values.price = result.price;
      values.quantity = result.quantity;
      values.product = result.product;
    };
    getSaleDetail();

  }, []);
  
  const apiData = async (data) => {
    // console.log(data)
    let result = await fetch(`http://localhost:4000/sale/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.log("result", result);
  };
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
        <form action="" onSubmit={handleSubmit}>
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
            <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
              <div>
                <p className="text-xl font-semibold leading-tight text-gray-800 text-center">
                  Update Sale
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
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Date"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.date && touched.date ? (
                    <p style={{ color: "red" }}>{errors.date}</p>
                  ) : null}
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">
                    Biller Name
                  </p>
                  <input
                    type="text"
                    name="biller_name"
                    value={values.biller_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Biller name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                  {errors.biller_name && touched.biller_name ? (
                    <p style={{ color: "red" }}>{errors.biller_name}</p>
                  ) : null}
                </div>
              </div>

              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Customer Name
                    </p>
                    <input
                      type="text"
                      name="customer_name"
                      value={values.customer_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Customer Name"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.customer_name && touched.customer_name ? (
                      <p style={{ color: "red" }}>{errors.customer_name}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      price
                    </p>
                    <input
                      type="text"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Price"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.price && touched.price ? (
                      <p style={{ color: "red" }}>{errors.price}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="lg:flex md:block block justify-between gap-4">
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800">
                      Quantity
                    </p>
                    <input
                      type="number"
                      name="quantity"
                      value={values.quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Quantity"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                    />
                    {errors.quantity && touched.quantity ? (
                      <p style={{ color: "red" }}>{errors.quantity}</p>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                      product
                    </p>
                    <input
                      type="text"
                      name="product"
                      value={values.product}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Order Name"
                      className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                    />
                    {errors.product && touched.product ? (
                      <p style={{ color: "red" }}>{errors.product}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div>
                <div className="lg:block md:hidden hidden">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 pt-4"></div>
                    <div className="flex gap-5 pt-4">
                      <button
                        onClick={() => navigate("/listsale")}
                        type="submit"
                        className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600"
                      >
                        Update Sale
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
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default UpdateSale;
