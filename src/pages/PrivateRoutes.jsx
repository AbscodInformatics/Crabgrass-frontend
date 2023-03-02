import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({component}) => {
    const navigate=useNavigate();
    useEffect(()=>{
        let login=false;
        if(!login){
            navigate('/login');
        };
    },[])
  return (
    <div>
      <component/>
    </div>
  )
}

export default PrivateRoutes
