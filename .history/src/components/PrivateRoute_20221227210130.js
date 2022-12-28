import React from 'react'
import { useAuth } from '../context/AuthContext'

function PrivateRoute({ children }) {

  //check if user is logged in or not
  //if not logged in then redirect to login page
  //if logged in then show the component or show children

  const { user } = useAuth();
  console.log(user, "userrrr");





  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute