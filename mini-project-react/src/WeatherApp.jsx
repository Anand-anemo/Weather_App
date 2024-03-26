import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    let [WeatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.44,
        temp:30,
        tempMin:28,
        tempMax:31,
        humidity:47,
        weather:"haze"
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }


    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}