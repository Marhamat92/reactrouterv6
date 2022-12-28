import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function LoginPage() {

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
    <div>LoginPage</div>
  )
}

export default LoginPage