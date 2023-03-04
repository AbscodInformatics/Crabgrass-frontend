import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';

const PrivateRoutes = () => {
  const navigate=useNavigate()
     const auth=JSON.parse(localStorage.getItem('signin'))
    //  console.log(auth)
     if(auth){
      return <Outlet/>
     }
     else {
      return <SignIn/>
     }
}

export default PrivateRoutes
