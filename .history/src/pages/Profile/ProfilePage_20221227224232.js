import React from 'react'
import { useNavigate } from 'react-router-dom'




function ProfilePage() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleGoBack}>
        Go back to home
      </button>
    </div>
  )
}

export default ProfilePage