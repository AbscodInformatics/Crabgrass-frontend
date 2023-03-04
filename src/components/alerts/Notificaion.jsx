import React from "react";


const Notification = ({value,msg,show,setShow}) => {


 
    return (
        <div>
            {
               (show)? <div className="py-6  transition duration-100 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-transparent " id="modal">
                <div role="alert" className="  container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-full flex items-center text-green-400 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={9} />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight ml-2">{value}</h1>
                        </div>
                        <p className="mb-5 text-sm text-gray-600 font-normal">{msg}</p>
                        
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()" onClick={()=>setShow(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>:null
            }
        </div>
    );
};
export default Notification;
