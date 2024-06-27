import React from 'react';
import './assets/style.css'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element="Not Found!" />
      </Routes>
    </div>
  );
}
