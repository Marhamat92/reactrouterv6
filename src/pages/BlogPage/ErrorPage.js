import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div
      className='text-5xl font-bold text-red-500 text-center '
    >
      Blog page not found
      <Link to='/blog' className='text-2xl font-bold text-blue-500 text-center '>
        Go to Blog
      </Link>
    </div>
  )
}

export default ErrorPage