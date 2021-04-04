import React, { useState } from "react";
import WeatherForecastHours from "./WeatherForecastHours.js";
import "./WeatherForecastH.css";
import axios from "axios";

export default function WeatherForecastH (props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState (null);

    function handleResponse (response){
        console.log (response.data);
        setForecast (response.data.hourly)
        setLoaded(true);
    }
    

    if (loaded){
return (
   
    <div className="WeatherForecastH">
        <div className="row">
        {forecast.map(function(hourlyForecast, index){
        if (index < 6) {
            return(
            <div className="col" key="index">
                 <WeatherForecastHours data={hourlyForecast}/>
            </div>
          );
        }
          

      })}  
            
        </div>
       
    </div>
  
    );
    } else {
    const apiKey="f21a32773c5be9756a640ddc720ea283";
    let longitude= props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (null);
    }



}
    