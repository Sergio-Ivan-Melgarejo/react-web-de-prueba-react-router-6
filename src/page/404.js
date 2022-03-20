import React from 'react'
import img from "../img/undraw_page_not_found_re_e9o6.svg"
import "./404.css"

const Error = () => {
  return (
    <div className='error'>
        <img className='img-404' src={img} alt="404" />
        <h1 className='title-404'>Page does not Exist</h1>
    </div>
  )
}

export default Error