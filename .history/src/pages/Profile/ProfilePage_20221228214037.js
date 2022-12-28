import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'




function ProfilePage() {

  const { setUser, user } = useAuth();

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
      {user && <button className='bg-blue-600 text-white' onClick={handleGoBack}>
        Go back to home
      </button>}
      {!user && <Link to="auth/login" >Go to Login Page</Link>}

      {user && <button className='bg-red-600 text-white' onClick={handleLogout}>
        Logout
      </button>}
    </div>
  )
}

export default ProfilePage