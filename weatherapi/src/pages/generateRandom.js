//import React from 'react';
import React, { useEffect, useState } from "react";
import axios from 'axios';
  


const Rand = () => {

  const [Data,setData]=useState({
    Timzone: '',
})

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d1de1a4f49c966be98abb8f9c5dda1f2')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('Weather data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        setData({Timzone:res.data.timezone})
    
        console.log('time zone', res.data.timezone) 
        console.log(Data)
      })
      .catch(err => {
        console.log(err);
      })

      
      
  }, [])

  return (
    <div>
      <h1> {Data.Timzone}</h1>
    </div>
  );
};
  
export default Rand;