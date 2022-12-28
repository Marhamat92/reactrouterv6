import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'




function ProfilePage() {

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  }

  const handleLogout = () => {
    setUser(null);
    navigate("/auth/login");
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <button className='bg-blue-600 text-white' onClick={handleGoBack}>
        Go back to home
      </button>
      <button className='bg-red-600 text-white' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default ProfilePage