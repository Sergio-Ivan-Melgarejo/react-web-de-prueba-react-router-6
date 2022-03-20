import "./home.css"

import imgDark from "../img/home-dark.svg"
import imgLight from "../img/home-light.svg"
import imgApi from "../img/What-is-an-API.png"
import { Link, Outlet } from 'react-router-dom'
import SubNav from "../components/SubNav"

const Home = () => {
  const dark = true;

  return (
    <main className='home'>  
    <Outlet/>
      <section id="1" className='section'>
        <div className='box-text home-box-text'>
        <h1 className='title'>nombre de web</h1>
        <p>app de prueba de React ruter 6, usando algunas apis para rellenar</p>
        </div>
        <div className='home-box-img'>
          <img className='home-img' src={dark ? imgLight : imgDark} alt="developer" />
        </div>
      </section>

      <section id="2" className='section'>
        <div className='box-text'>
          <h2 className='subtitle'>services</h2>
          <p className='text'>pruebe el servicio de algunas de estas apis</p>
          <ol className='ol'>
            <li className='li' >
              <Link to="/services/CoinDesk">CoinDesk</Link>
            </li>
            <li className='li' >
              <Link to="/services/Cat Facts" >Cat Facts</Link>
            </li>
            <li className='li' >
              <Link to="/services/Bored" >Bored</Link>
            </li>
            <li className='li' >
              <Link to="/services/Agify.io" >Agify.io</Link>
            </li>
            <li className='li' >
              <Link to="/services/Genderize.io" >Genderize.io</Link>
            </li>
            <li className='li' >
              <Link to="/services/Nationalize.io" >Nationalize.io</Link>
            </li>
            <li className='li' >
              <Link to="/services/Dogs" >Dogs</Link>
            </li>
            <li className='li' >
              <Link to="/services/Jokes" >Joke</Link>
            </li>
          </ol>
        </div>
        <Link className='box-img' to={`/services/`} >
          <img className='img' src={imgApi} alt="Api" />
        </Link>
      </section>
      
      <section id="3" className='section'>coments</section>
      <section id="4" className='section'>usuarios</section>
      <section id="5" className='section'>sobre mi</section>
      
      <SubNav >
        <a href="#1">1</a>
        <a href="#2">2</a>
        <a href="#3">3</a>
        <a href="#4">4</a>
        <a href="#5">5</a>
      </SubNav>
    </main>
  )
}

export default Home