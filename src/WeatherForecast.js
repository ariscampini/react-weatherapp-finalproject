import React, {useState}  from "react"
import WeatherForecastDay from "./WeatherForecastDay.js"
import axios from "axios"
import "./WeatherForecast.css"


export default function WeatherForecastH (props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState (null);

    function handleResponse (response){
        console.log (response.data);
        setForecast (response.data.daily)
        setLoaded(true);
    }

    

    if (loaded)
    {   
    console.log (forecast)
    return (
        <div>
            < WeatherForecastDay data={forecast[1]} />
            
        </div>
        
    );
}else{

    const apiKey="f21a32773c5be9756a640ddc720ea283";
    let longitude= props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
  return null;
} 
    
}