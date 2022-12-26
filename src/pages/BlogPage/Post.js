import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {

  const { url, id } = useParams() //!we use useParams to get the url parameter from the url


  return (
    <div>Post {url} + {id}</div>
  )
}

export default Post