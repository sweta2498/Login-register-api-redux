import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../Redux/LoginAction';

const Dashbord = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

     function logoutbtn() {
        localStorage.removeItem('token');
        dispatch(setLogout());
        navigate("/login")
    }

  return (
    <div>Dashbord page
        <h1>Hello Users</h1>
        <Button onClick={logoutbtn} >Logout</Button>
    </div>
    
  )
}

export default Dashbord