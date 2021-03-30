import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate"
import "./Weather.css";

export default function Weather (props){

    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState ({ready:false});

    function handleResponse (response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: new Date (response.data.dt*1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            cityName: response.data.name,
            feelsLike: response.data.main.feels_like,
            tempMax: response.data.main.temp_max,
            tempMin: response.data.main.temp_min,
            humidity: response.data.main.humidity,
            icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].description,



        });
        setReady(true);
    }

    if (weatherData.ready) {
return(
    <div className="Weather">
        <form>
            <div className="row">
                       
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Type a city" 
                    className="form-control"
                    autoFocus="on"/>
                </div>
                <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search"
                    className="searchButton"/>
                </div>
            
            
            </div> 
        </form>
            <FormattedDate date={weatherData.date}/>
            <div className="row">
                <div className="col-6">
                    <h1>{weatherData.cityName}</h1>
                       <div className="clearfix">
                            <img src={weatherData.icon}
                            alt={weatherData.description}
                            className="float-left"/>
                            
                            <div className="float-left">
                                <span className="temp">
                                    {Math.round(weatherData.temperature)}
                                </span>
                                <span className= "unit">°C</span>
                            </div>
                       </div> 
                       <p className="text-capitalize">{weatherData.description}</p>

                </div>

                <div className="col-6">
                   <ul>
                       <li>Temperature: ⬆ {Math.round(weatherData.tempMax)}°C | ⬇ {Math.round(weatherData.tempMin)}°C </li>
                       <hr></hr>
                       <li>Wind Speed: {weatherData.wind}%</li>
                       <hr></hr>
                       <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
                       <hr></hr>
                       <li>Humidity: {weatherData.humidity}%</li>
                   </ul>
                </div>
            </div>

    </div>
    )

    } else {
    const apiKey="f21a32773c5be9756a640ddc720ea283"
    let cityName = "New York"
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    axios.get (apiUrl). then (handleResponse);
    }

    

    const apiKey="f21a32773c5be9756a640ddc720ea283"
   
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCityName}&appid=${apiKey}&units=metric`
    axios.get (apiUrl). then (handleResponse);
    return "Loading..."
}
