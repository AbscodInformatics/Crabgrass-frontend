import React, { useEffect, useRef, useState } from "react";
import { FcPrint } from "react-icons/fc";
import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";
const PrintBarCode = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  const [barShow, setBarShow] = useState(false);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [searchCart, setSearchCart] = useState();

  const updateHandler = () => {
    setBarShow(true);
  };
  const resetHandler = () => {
    setBarShow(false);
  };
  useEffect(() => {
    const getData = async () => {
      let result = await fetch("http://localhost:4000/products");
      result = await result.json();
      if (result) {
        setData(result);
      }
    };
    getData();
  }, []);

  const clickHandler = (e) => {
    const dummyData = data.filter((item) => item._id === e.target.value);
    setCart([...cart, ...dummyData]);
  };

  const deleteHandle = (id) => {
    const dummyData = cart.filter((item) => item._id !== id);
    setCart([...dummyData]);
  };
  const searchHandle = (e) => {
    setSearch(e.target.value);

    const dummyData = data.filter((item) => item.product_name.includes(search));
    setSearchCart([...dummyData]);
  };

  const addHandler = (id) => {
    const dummyData = searchCart.filter((item) => item._id === id);
    setCart([...cart, ...dummyData]);
  };

  const printBarCode = () => {
    for (let item of cart) {
      console.log("cart", item._id);
    }
  };

  return (
    <div className="h-screen ">
 
      <div className="border-2   text-blue-900 text-lg font-bold flex justify-between">
        <h2 className="p-3">Print Barcode/Label</h2>
        <div className="pt-3 px-3 border-l-2">
          <FcPrint size={28} />
        </div>
      </div>
      <div className="border-2 h-2/3 m-8 bg-gray-100">
        <div className=" border-2 my-8 mx-12 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => searchHandle(e)}
            placeholder="Search Products"
            className="w-full p-3 "
          />
          {searchCart &&
            searchCart.map((item) => {
              return (
                <div
                  style={{
                    zIndex: "2",
                    top: "50px",
                    position: "absolute",
                    background: "white",
                    width: "100%",
                    border: "1px solid light-gray",
                    overflow: "auto",
                    padding: "5px",
                    Height: "40px",
                    overflowY: "scroll",
                  }}
                >
                  <p onClick={() => addHandler(item._id)}>
                    {item.product_name}
                  </p>
                </div>
              );
            })}
          <select
            name=""
            id=""
            onChange={(e) => clickHandler(e)}
            className="w-full mt-2 p-2"
          >
            <option value="" defaultChecked>
              Select Product
            </option>
            {data.map((item) => {
              return <option value={item._id}>{item.product_name}</option>;
            })}
          </select>
        </div>
        <div className="border-2 my-8 mx-12 ">
          <div className="border-2 h-3/5 dark:bg-gray-800">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded">
              <thead>
                <tr className="w-full h-10 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th className="pl-3 text-gray-600 font-normal w-96 pr-2 text-left  text-sm tracking-normal leading-4">
                    Product Name (Product Code)
                  </th>
                  <th className="text-gray-600 font-normal w-96  pr-2 text-left text-sm tracking-normal leading-4">
                    Quantity
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Variants
                  </th>
                  <th className="text-gray-600 font-normal pr-2 w-12 text-left text-sm tracking-normal leading-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, id) => {
                  return (
                    <tr
                      key={id}
                      className="h-12 border-gray-300  border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out"
                    >
                      <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.product_name}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <input
                          type="number"
                          placeholder="Quantity"
                          className="p-2 border-2 w-24 border-black"
                        />
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {item.category_name}
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
        </div>
        <div className="m-12  ">
          <button
            className="border-2 py-3 px-9 mr-8 bg-green-700 rounded shadow-black text-white text-lg"
            onClick={() => {
              updateHandler();
              printBarCode();
            }}
          >
            Update
          </button>
          <button
            className="border-2 py-3 px-10 bg-red-700 rounded shadow-black text-white text-lg"
            onClick={() => resetHandler()}
          >
            Reset
          </button>
        </div>
      </div>
      {barShow && (
        <div className="mx-9 border-2 bg-gray-100 h-4/5">
          <div className="m-4 ">
            <button onClick={handlePrint} className="flex justify-center  p-2 border-2 w-full bg-blue-700 text-white font-medium rounded">
              <FcPrint size={28}  /> Print
            </button>
          </div>
          <div className="grid grid-cols-3   w-96 mt-1 " ref={componentRef}>
            {cart.map((item) => {
              {/* console.log(typeof(item._id)) */}
              let dummy=item._id.slice(15,-1)

              return (
                <p className="  flex  pl-1  w-32  h-20 bg-white"  >
                   <div className="flex flex-col items-center" >
                   <span className="pb-0 mb-0 pr-1 text-sm">Crabgrass</span>
                   {/* <span className="p-0 mt-0 text-sm">Price: {item.price}</span> */}
                  <Barcode value={dummy} height={35}  width={1} font={0.7} textMargin={1} fontSize={10}  margin={0}  displayValue={true}/>

                   </div>
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintBarCode;
