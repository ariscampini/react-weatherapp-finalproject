import React from "react";
import "./Weather.css";

export default function Weather (){
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
            <p>
                Last submited search: Monday, March 29, 2021 | 13:29 h
            </p>
            <div className="row">
                <div className="col-6">
                    <h1>Madrid</h1>
                       <div className="clearfix">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                            alt="Sunny"
                            className="float-left"/>
                            <div className="float-left">
                                <span className="temp">18</span>
                                <span className= "unit">°C</span>
                            </div>
                        </div> 
                </div>

                <div className="col-6">
                   <ul>
                       <li>Temperature: ⬆18°C | ⬇17°C </li>
                       <hr></hr>
                       <li>Wind Speed: 2,57%</li>
                       <hr></hr>
                       <li>Feels like: 14°C</li>
                       <hr></hr>
                       <li>Humidity: 32%</li>
                   </ul>
                </div>
            </div>












    </div>
    )
}
