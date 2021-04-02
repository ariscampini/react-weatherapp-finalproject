import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js"
import WeatherUnit from "./WeatherUnit.js"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
    <FormattedDate date={props.data.date}/>
            <div className="row">
                <div className="col-6">
                    <h1>{props.data.cityName}</h1>
                       <div className="clearfix">
                           <div className="float-left">
                           <WeatherIcon code= {props.data.icon} />
                           </div>
                           
                            
                            <div className="float-left">
                                <WeatherUnit celsius={props.data.temperature}/>
                            </div>
                       </div> 
                       <p className="text-capitalize">{props.data.description}</p>

                </div>

                <div className="col-6">
                   <ul>
                       <li>Temperature: ⬆ {Math.round(props.data.tempMax)}°C | ⬇ {Math.round(props.data.tempMin)}°C </li>
                       <hr></hr>
                       <li>Wind Speed: {props.data.wind}%</li>
                       <hr></hr>
                       <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
                       <hr></hr>
                       <li>Humidity: {props.data.humidity}%</li>
                   </ul>
                </div>
            </div>
     </div>       
)
}