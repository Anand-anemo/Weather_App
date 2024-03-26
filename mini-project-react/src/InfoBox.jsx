import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GrainIcon from '@mui/icons-material/Grain'; //rain
import AcUnitIcon from '@mui/icons-material/AcUnit'; //winter
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //sun

import "./InfoBox.css"

export default function InfoBox({info}){

    let InitImg="https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D"
    
    const HotImg="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwd2VhdGhlciUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const ColdImg="https://images.unsplash.com/photo-1672845818327-b94e27c25bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdpbnRlciUyMHdlYXRoZXIlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D";
    const RainImg="https://images.unsplash.com/photo-1428592953211-077101b2021b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJhaW4lMjB3ZWF0aGVyJTIwbmF0dXJlfGVufDB8fDB8fHww";
    return (
    <div className="InfoBox">
        <h3>Weather info</h3>
        <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>70 ? RainImg : info.temp>15 ? HotImg : ColdImg}
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>70 ? <GrainIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <p>       Temperature = {info.temp}&deg;C    </p>
          <p> Min Temp = {info.tempMin}&deg;C </p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
      <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C  </p>
          
        </Typography>
      </CardContent>
          </Card>
          </div>

    </div>)
}