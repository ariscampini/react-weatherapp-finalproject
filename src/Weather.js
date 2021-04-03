import React, {useState} from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather (props){

    const [cityName, setCityName] = useState(props.defaultCityName);
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
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
        });
    }

function search() {
    const apiKey="f21a32773c5be9756a640ddc720ea283"
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);}

function handleSubmit (event) {
    event.preventDefault ();
    search();
}

function handleCityChange (event){
    setCityName(event.target.value)
}


    if (weatherData.ready) {
return(
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            
            <div className="row">
                       
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Type a city" 
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
                    />
                    
                </div>
                <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search"
                    className="searchButton"/>
                </div>
            
            
            </div> 
        </form>
        <WeatherInfo data={weatherData}/>
            
    </div>
    );

    } else {

    search ();
    return (<p className="Weather">Loading...</p>)
    }

    

    
}
