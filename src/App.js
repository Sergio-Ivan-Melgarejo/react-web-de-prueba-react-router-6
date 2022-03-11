import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

import Home from './page/Home';
import Category from './page/Category';
import Products from './page/Products';

// react 
// tacos => products
// bots
// search-page => category

// spa - api Lorem space - react ruter dom

function App() {
  const [dataApp, setDataApp] = useState({
    dark: true
  })

  const products = [
    "game" ,"album", "movie", "watch", "book", "shoes", "fashion", "face"
  ]

  return (
    <div className={dataApp.dark ? "App dark" : "App"}>
      <div className='container-App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category products={products} /> } />
          <Route path='/products:keywords' element={<Products /> } />
          <Route path='*' element={<h1>no existe pagina</h1> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
