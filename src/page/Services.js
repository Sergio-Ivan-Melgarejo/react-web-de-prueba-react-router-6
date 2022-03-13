import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'


const Services = () => {
  const params = useParams();
  console.log(params)
  return (
    <section className='section'>
      <Link to="Cat Facts" >Cat Facts</Link>
      <Link to="CoinDesk" >CoinDesk</Link>
      <Link to="Bored" >Bored</Link>
      <Link to="Agify.io" >Agify.io</Link>
      <Link to="Genderize.io" >Genderize.io</Link>
      <Link to="Genderize.io" >Nationalize.io</Link>
      <Link to="Genderize.io" >Dogs</Link>
      <Link to="Jokes" >Jokes</Link>

      <Outlet/>
    </section>
  )
}

export default Services