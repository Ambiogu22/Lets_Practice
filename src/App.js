import React from 'react';
import './assets/style.css'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import NavBar from './components/NavBar';
import Cart from './pages/Cart.js/Cart';
import {Routes, Route} from 'react-router-dom';
import { AppProvider } from './context/Context';
import ItemPage from './components/ItemPage';
// import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <AppProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop/:slug' element={<ItemPage />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      {/* <Footer /> */}
      </AppProvider>
    </div>
  );
}
