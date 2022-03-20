import { useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Config from './components/Config';
import Nav from './components/Nav';
import Error from './page/404';

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
            <Route path='/' element={<Home/> } >
            </Route>
            <Route path='/services' element={<Services />} >
              <Route path=':api' element={<Services />} ></Route>
              <Route path='detalle' element={<h1>funciona</h1>} ></Route>
            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
          <Config dataApp={dataApp} setDataApp={setDataApp} />
      </div>
    </div>
  );
}

export default App;
