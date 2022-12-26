import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {

  //we use <Outlet /> to render the child components of the parent component,that is for nested routes,otherwise it is not possible to show nested routes 

  return (
    <div>
      {<Outlet />}
    </div>
  )
}

export default BlogLayout