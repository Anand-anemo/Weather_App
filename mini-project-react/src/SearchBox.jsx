import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="7dfdb604f728be03acfbcd42c2347b1c";

   let getWeatherInfo= async()=>{

    try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse=await response.json();
    console.log(jsonResponse);

    let result={
        city:city,
        temp: jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
    }
    console.log(result);
    return result;
    }catch(err){
        throw err;

    }

    

   }

    let handleForm=   (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        let NewInfo=await getWeatherInfo();
        updateInfo(NewInfo);
        }catch(err){
            setError(true);

        }

    }

    return (
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit} >
            <TextField id="outlined-basic" label="City Name" 
            variant="outlined"  size="small" value={city} onChange={handleForm} required/>
            &nbsp;
            <Button variant="outlined" size='large' type='submit' >
        Search
      </Button>
      {error && <p style={{ color:"red"}}>NO information for {city}</p>}
            </form>
            
        </div>
    )
}
// <Button variant="outlined" startIcon={<DeleteIcon />}>
