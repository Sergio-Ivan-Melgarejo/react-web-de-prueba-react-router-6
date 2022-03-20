import React from 'react'
import {Router, Link, Outlet, useParams } from 'react-router-dom'

const Services = () => {
  const params = useParams();
  console.log(params)
  return (
    <section className='section services'>
      <h1>{params.api ? params.api : "Elige una api"}</h1>
      <footer className='footer'>
        <Link to="Cat Facts" >Cat Facts</Link>
        <Link to="CoinDesk" >CoinDesk</Link>
        <Link to="Bored" >Bored</Link>
        <Link to="Agify.io" >Agify.io</Link>
        <Link to="Genderize.io" >Genderize.io</Link>
        <Link to="Genderize.io" >Nationalize.io</Link>
        <Link to="Genderize.io" >Dogs</Link>
        <Link to="Jokes" >Jokes</Link>
      </footer>
<hr/>
      <Link to="detalle" >detalle</Link>
      <Outlet />
     
    </section>
  )
}

export default Services