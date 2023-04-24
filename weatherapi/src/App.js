import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d1de1a4f49c966be98abb8f9c5dda1f2')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('fire Nation Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let fireData = res.data[index];
        
        console.log('random fire: ', fireData)
        
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  
}

export default App;
