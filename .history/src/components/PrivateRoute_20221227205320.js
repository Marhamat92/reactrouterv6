import React from 'react'

function PrivateRoute({ children }) {

  //check if user is logged in or not
  //if not logged in then redirect to login page
  //if logged in then show the component or show children






  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute