import React from 'react';
import './assets/style.css'
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}
