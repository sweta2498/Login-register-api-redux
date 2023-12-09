import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  function loginbtn() {
    navigate('/login')
  }

  function registerbtn() {
    navigate('/register')
  }


  return (
    <>
        <Button onClick={loginbtn}>Login</Button>
        <Button onClick={registerbtn}>Signup</Button>

      </>
      )
}

      export default Home