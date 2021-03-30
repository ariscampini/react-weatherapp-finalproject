import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
    <FormattedDate date={props.data.date}/>
            <div className="row">
                <div className="col-6">
                    <h1>{props.data.cityName}</h1>
                       <div className="clearfix">
                            <img src={props.data.icon}
                            alt={props.data.description}
                            className="float-left"/>
                            
                            <div className="float-left">
                                <span className="temp">
                                    {Math.round(props.data.temperature)}
                                </span>
                                <span className= "unit">°C</span>
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