let getWeather=document.getElementById("getWeather");
let dateP=document.getElementById("date");
let icon=document.getElementById("icon");
let temperatureP=document.getElementById("temperature");
let feelLike=document.getElementById("feelLike");
let humidity=document.getElementById("humidity");
let source=document.getElementById("src");

let ip;


const fahrenheitToCelsius=(degre)=>{
    return Math.round((degre-32)*5/9);
}

const getAll=async(city)=>{
    let dataIP=await fetch("https://api.ipify.org/?format=json");
    let responseIP=await dataIP.json();
    let ip=responseIP.ip;
    console.log(responseIP);
    let requestLatLong=`http://ip-api.com/json/${ip}`
    let dataLatLong=await fetch(requestLatLong);
    let responseLatLong=await dataLatLong.json();
    console.log(responseLatLong);
    let request=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${responseLatLong.lat},${responseLatLong.lon}?key=F35BBHUQQFCZ2EDBV78NKVA5Q`;
    let data=await fetch(request);
    let response= await data.json();
    console.log(response);
    let date = new Date().toLocaleDateString();
    dateP.textContent=date;
    icon.src=`img/${response.currentConditions.icon}.png`;
    temperatureP.textContent=fahrenheitToCelsius(response.currentConditions.temp)+"°C";
    feelLike.textContent="Feel like : "+fahrenheitToCelsius(response.currentConditions.feelslike)+"°C";
    humidity.textContent="Humidity : "+response.currentConditions.humidity+"%";
    source.textContent="Source : "+response.currentConditions.source;
}


getWeather.addEventListener("click",getAll("Paris,FR"));













