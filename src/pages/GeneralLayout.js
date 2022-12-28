import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function GeneralLayout() {
  return (
    <>
      <div className='col-span-1'>
        <nav>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default GeneralLayout