import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function LoginPage() {

  const location = useLocation(); //we use this to get the location of the page when we redirect to login page

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({
      name: "Marhamat Baghirov",
      id: 1
    });
    navigate("/");
  }



  return (
    <>
      <div >LoginPage</div>
      <button className='bg-green-500 text-white hover:bg-yellow-500 hover:text-green-500' onClick={handleLogin}>
        Login
      </button>

    </>
  )
}

export default LoginPage