import React from 'react';
import './assets/style.css'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import NavBar from './components/NavBar';
import Cart from './pages/Cart/Cart';
import {Routes, Route} from 'react-router-dom';
import { AppProvider } from './context/Context';
import ItemPage from './components/ItemPage';
import NotFound from './components/NotFound';
import Success from './pages/Checkout/Success';
import Canceled from './pages/Checkout/Canceled';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <AppProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop/:slug' element={<ItemPage />}/>
        <Route path='/cart/:slug' element={<ItemPage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/success' element={<Success />} />
        <Route path='/canceled' element={<Canceled />} />
      </Routes>
      <Footer />
      </AppProvider>
    </div>
  );
}
