import React from 'react';
import './style.css';
import { Routes, Route} from 'react-router-dom'
import Home from './Home';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
