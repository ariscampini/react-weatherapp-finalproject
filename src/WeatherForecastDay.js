import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay (props){

    function day (){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days= [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];

        return days[day];
    }

    return (
        <div className="WeatherForecast">
            <table className="Table">
                <tbody>
                    <tr>
                        <th className="Day"> 
                            {day()}
                        </th>
                        <td className="DayIcon"> 
                            <WeatherIcon code={props.data.weather[0].icon} size={32} />

                        </td>
                        <td className="Description">
                          ☁ {props.data.weather[0].main}
                        </td>
                        
                        
                        <td className="MaxMin">
                            <span className="Up">⬆</span>
                            {Math.round(props.data.temp.max)} °C {""}| 
                            <span className="Down">⬇</span> {Math.round(props.data.temp.min)}°C

                        </td>
                    </tr>
                </tbody>

            </table>



        </div>
    );
}