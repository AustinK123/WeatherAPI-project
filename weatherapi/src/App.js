// import logo from './logo.svg';
import './App.css';
import React from "react";
// import axios from 'axios';

import Navbar from './components/Navbar';
// import Weather from './pages/generateRandom';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Contact from './pages/Home';
import Rand from './pages/generateRandom';

function App() {

  return (

<div>
<Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Contact/>} />
        <Route path='/Rand' element={<Rand/>} />
        
    </Routes>
    </Router>

    </div>

  );

  
}

export default App;
