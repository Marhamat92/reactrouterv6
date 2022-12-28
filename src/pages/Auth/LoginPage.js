import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function LoginPage() {

  const location = useLocation(); //!we use this to get the location of the page when we redirect to login page,after we login we redirect to the page we were before login

  console.log(location)

  const { setUser, user } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({
      name: "Marhamat Baghirov",
      id: 1
    });
    navigate(location?.state?.return_url || "/");
  }



  return (
    <>
      {user && <h1>Logged in as {user.name}</h1>}
      {!user && <button className='bg-green-500 text-white hover:bg-yellow-500 hover:text-green-500' onClick={handleLogin}>
        Login
      </button>}

      {user && <Link to="/" >
        Go to Home Page
      </Link>}
    </>
  )
}

export default LoginPage