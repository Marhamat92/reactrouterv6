import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {



  //check if user is logged in or not
  //if not logged in then redirect to login page
  //if logged in then show the component or show children

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" state={
      { "return_url": window.location.pathname }
    } />
  }




  return children
}

export default PrivateRoute