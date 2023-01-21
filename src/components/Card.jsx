import React from 'react'
import { BsFillCloudDrizzleFill } from "react-icons/bs";


const Card = ({data}) => {

    if(JSON.stringify(data) !== '{}'){

    console.log(data)
    return (
        <div>
            <p>Jan 20, 05:44pm</p>

            <h2>{data.name}, {data.sys.country}</h2>
            
            <h1> {data.main.temp}°C</h1>
            <h1> <img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`} /> {data.weather[0].main}</h1>

        </div>
    )}else{
        <div>
            <h1>loading</h1>
        </div>
    }
}

export default Card