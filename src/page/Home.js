import React from 'react'
import "./home.css"

import imgDark from "../img/home-dark.svg"
import imgLight from "../img/home-light.svg"
import imgCatFacts from "../img/Cat-Facts.png"
import { Link } from 'react-router-dom'

const Home = () => {
  const dark = true;
  return (
    <main className='home'>  
      <section className='section'>
        <div>
        <h1>nombre de web</h1>
        <p>app de prueba de React ruter 6, usando algunas apis para rellenar</p>
        </div>
        <div>
          <img src={dark ? imgLight : imgDark} alt="developer" />
        </div>
      </section>

      <section className='section'>
        <div>
          <h2>services</h2>
          <p>pruebe el servicio de algunas de estas apis</p>
          <ul>
            <li>Cat Facts</li>
            <li>CoinDesk</li>
            <li>Bored</li>
            <li>Agify.io</li>
            <li>Genderize.io</li>
            <li>Nationalize.io</li>
            <li>Dogs</li>
            <li>Jokes</li>
          </ul>
        </div>
        <div>
          <img src={imgCatFacts} alt={"Cat Facts"} />
          <Link to={"/services/CatFacts"} >go now</Link>
        </div>
      </section>
      
      <section className='section'>coments</section>
      <section className='section'>usuarios</section>
      <section className='section'>sobre mi</section>
      
    </main>
  )
}

export default Home