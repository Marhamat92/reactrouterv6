import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {

  const location = useLocation();


  //check if user is logged in or not
  //if not logged in then redirect to login page
  //if logged in then show the component or show children

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" state={
      { return_url: location.pathname + location.search }
    } />
  }




  return children
}

export default PrivateRoute