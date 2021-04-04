import React, { useState } from "react";
import WeatherForecastHours from "./WeatherForecastHours.js";
import "./WeatherForecastH.css";
import axios from "axios";

export default function WeatherForecastH (props){

    let [done, setDone] = useState(false);
    let [forecastH, setForecastH] = useState (null);

    function handleResponse (response){
        setForecastH (response.data.hourly)
        setDone(true);
    }
    

    if (done){
return (
   
    <div className="WeatherForecastH">
        <div className="row">
        {forecastH.map(function(hourlyForecast, index){
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
    