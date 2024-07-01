import React from 'react';
import './assets/style.css'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='relative'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
