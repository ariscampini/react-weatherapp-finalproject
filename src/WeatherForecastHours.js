import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay (props){

    function day (){
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours()
    return `${hours}:00`
  }
    

    return (
       <div className="WeatherForecastH">
            <div className="row">
                <div className="col">
                    <div className="ForecastTime">
                         {day()}h
                    </div>
                    <WeatherIcon code={props.data.weather[0].icon} size={32} />
                    <div className="ForecastRain">
                        ☁ {props.data.weather[0].main}
                    </div>
                </div>

            </div>



        </div>
    );
}