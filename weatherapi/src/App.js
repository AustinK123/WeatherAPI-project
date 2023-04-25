import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

import Navbar from './components/Navbar';
import Weather from './pages/weather';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Contact from './pages/newPage';


function App() {

  return (

<div>
<Router>
    <Navbar />
    <Routes>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/weather' element={<Weather/>} />
    </Routes>
    </Router>

    </div>

  );

  
}

export default App;
