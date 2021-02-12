import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { CloudFilled, PushpinFilled } from '@ant-design/icons';
import { Card, Input, Button } from 'antd';
import {getWeather} from '../httpClient/Weather';



export const WeatherCard = (props) => {
    const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const getData = async () => {
    try{
        const data = await getWeather(city);
        setWeather(data);
    }catch(error) {
      console.log(error.message);
    }
  }
  
  useEffect(() => {
    getData();
  }, []);

    return (
        <div>
            <Card bordered={false}>
      <div>
        <h1><CloudFilled /> Application de Météo <CloudFilled /> </h1>
        <div style={{ display: 'flex'}}>
          <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ville"/>
          <Button type="button" onClick={() => getData()}>Chercher</Button>
        </div>
          {weather !== null ? (
          <div>
            <div>
              <h1>{parseFloat(weather.main.temp - 273.15).toFixed(1)}&deg;C</h1>
            </div>
            <div>
              <h3><PushpinFilled />{weather.name}</h3>
            </div>
            <div>
              <h6>Min: {parseFloat(weather.main.temp_min - 273.15).toFixed(1)}&deg;C 
              || Max: {parseFloat(weather.main.temp_max - 273.15).toFixed(1)}&deg;C </h6>
            </div>
        </div>
        ) : null}  
      </div>
    </Card>
        </div>
    )
}
