import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function ListReturn() {
  return (
    <div>
        <Header />
        <div className="flex ">
          <div className="  ">
            <Sidebar />
          </div>
          <div className="w-5/6  body-scroll">
          <div className="mx-8 lg:w-11/12 w-full overflow-x-auto">
      <table className="w-full whitespace-nowrap border-gray-100 border rounded-lg">
        <thead className="bg-gray-100">
          <tr className>
            <th className="text-left py-5 pl-4 rounded-tl-lg">
              <p className="text-sm font-medium leading-none text-gray-900">
                Date
              </p>
            </th>
            <th className="text-left py-5">
              <p className="text-sm font-medium leading-none text-gray-900">
                Reference number
              </p>
            </th>
            <th className="text-left py-5 pl-5 border-l border-gray-200 ">
              <p className="text-sm font-medium leading-none text-gray-900">
                Biller 
              </p>
            </th>
            <th className="text-left py-5 pr-16">
              <div className="flex items-center">
                <p className="text-sm font-medium pr-0.5 leading-none text-gray-900">
                  Customer
                </p>
                
              </div>
            </th>
            <th className="text-left py-5 pr-16">
              <div className="flex items-center">
                <p className="text-sm font-medium pr-0.5 leading-none text-gray-900">
                  Grand Total 
                </p>
                
              </div>
            </th>
            <th className="py-3" />

            
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="py-3 pr-20 pl-4">
              <p className="text-sm leading-none text-gray-900">20/04/2020</p>
            </td>
            <td className="py-3 pr-12">
              <p className="text-sm leading-none text-gray-900">
                Jon Strak &nbsp; 0381 9201716
              </p>
            </td>
            <td className="border-l pl-5 pr-20 border-gray-200 py-3">
              <p className="text-sm leading-none text-gray-900">#41523</p>
            </td>
            <td className="py-3 pr-16">
              <p className="text-sm leading-none text-gray-900">541</p>
            </td>
            <td className="py-3 pr-16">
              <p className="text-sm leading-none text-gray-900">$6,471</p>
            </td>
            
            <td className="py-3" />
          </tr>
          
        </tbody>
      </table>
    </div>
          </div>
        </div>
      </div>
    
  );
}

export default ListReturn;
