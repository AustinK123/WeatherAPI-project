import React, { useEffect, useState } from "react";
import axios from 'axios';

const Rand = () => {

  const [Data, setData] = useState({
    Timzone: '',
    Visibility: '',
    Lon: '',
    Lat: '',
    Wind: {
      Speed: '',
      Deg: '',
      Gust: ''
    },
    Description: ''
  })

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d1de1a4f49c966be98abb8f9c5dda1f2')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('Weather data: ', res.data)

        setData(prevState => ({
          ...prevState,
          Timzone: res.data.timezone,
          Visibility: res.data.visibility,
          Lon: res.data.coord.lon,
          Lat: res.data.coord.lat,
          Wind: {
            Speed: res.data.wind.speed,
            Deg: res.data.wind.deg,
            Gust: res.data.wind.gust
          },
          Description: res.data.weather[0].description
        }))

        console.log('time zone', res.data.timezone)
        console.log(Data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '50px' }}>
      <h1 style={{ color: '#444', marginBottom: '20px' }}>Weather Information</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginRight: '50px' }}>
          <h2 style={{ color: '#666' }}>Timezone</h2>
          <p style={{ fontSize: '18px' }}>{Data.Timzone}</p>
        </div>
        <div style={{ marginRight: '50px' }}>
          <h2 style={{ color: '#666' }}>Visibility</h2>
          <p style={{ fontSize: '18px' }}>{Data.Visibility}</p>
        </div>
        <div>
          <h2 style={{ color: '#666' }}>Coordinates</h2>
          <p style={{ fontSize: '18px' }}>{Data.Lat}, {Data.Lon}</p>
        </div>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ color: '#666' }}>Wind Statistics</h2>
        <p style={{ fontSize: '18px' }}>Speed: {Data.Wind.Speed}, Deg: {Data.Wind.Deg}, Gust: {Data.Wind.Gust}</p>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ color: '#666' }}>Weather Description</h2>
        <p style={{ fontSize: '18px' }}>{Data.Description}</p>
      </div>
    </div>
  )
}

export default Rand;
