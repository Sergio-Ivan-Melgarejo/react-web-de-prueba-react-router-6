import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

import Home from './page/Home';
import Services from './page/Services';

// react 
// tacos => services
// bots
// search-page => category

// spa - api Lorem space - react ruter dom

function App() {
  const [dataApp, setDataApp] = useState({
    dark: true
  })

  return (
    <div className={dataApp.dark ? "App dark" : "App"}>
      <div className='container-App'>
        <Nav />
          <Routes>
            <Route path='/' element={<Home/> } />
            {/* <Route path='/services/:api' element={<Services />} >
              <Route path='services' element={<h2>dentro de una api</h2>} />
            </Route> */}
            <Route path='*' element={<h1>no existe pagina</h1> } />
          </Routes>
      </div>
    </div>
  );
}

export default App;
