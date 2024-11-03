let getWeather=document.getElementById("getWeather");
let dateP=document.getElementById("date");
let icon=document.getElementById("icon");
let temperatureP=document.getElementById("temperature");
let feelLike=document.getElementById("feelLike");
let humidity=document.getElementById("humidity");
let source=document.getElementById("src");
let country=document.getElementById("country");
let city=document.getElementById("city");
let ip;
let date = new Date().toLocaleDateString();

const fahrenheitToCelsius=(degre)=>{
    return Math.round((degre-32)*5/9);
}


const initialize=async()=>{
    let dataIP=await fetch("https://api.ipify.org/?format=json");
    let responseIP=await dataIP.json();
    let ip=responseIP.ip;
    let requestLatLong=`http://ip-api.com/json/${ip}`
    let dataLatLong=await fetch(requestLatLong);
    let responseLatLong=await dataLatLong.json();
    let request=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${responseLatLong.lat},${responseLatLong.lon}?key=F35BBHUQQFCZ2EDBV78NKVA5Q`;
    let data=await fetch(request);
    let response= await data.json();
    
    dateP.textContent=date;
    icon.src=`img/${response.currentConditions.icon}.png`;
    temperatureP.textContent=fahrenheitToCelsius(response.currentConditions.temp)+"°C";
    feelLike.textContent="Feel like : "+fahrenheitToCelsius(response.currentConditions.feelslike)+"°C";
    humidity.textContent="Humidity : "+response.currentConditions.humidity+"%";
    source.textContent="Source : "+response.currentConditions.source;
}

const getAll=async()=>{
    
    let request =`https://api.api-ninjas.com/v1/geocoding?city=${city.value}&country=${country.value}&X-Api-Key=WRLI16tJ5l4Y0hkzMlJKKg==iN6EaOCtq7QsI9jQ`;
    country.value="";
    city.value="";
    let response = await fetch(request);
    let data=await response.json();
    if(data.length>0){
        let requestWeather=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data[0].latitude},${data[0].longitude}?key=F35BBHUQQFCZ2EDBV78NKVA5Q`;
        let responseWeather=await(await fetch(requestWeather)).json();
        dateP.textContent=date;
        icon.src=`img/${responseWeather.currentConditions.icon}.png`;
        temperatureP.textContent=fahrenheitToCelsius(responseWeather.currentConditions.temp)+"°C";
        feelLike.textContent="Feel like : "+fahrenheitToCelsius(responseWeather.currentConditions.feelslike)+"°C";
        humidity.textContent="Humidity : "+responseWeather.currentConditions.humidity+"%";
        source.textContent="Source : "+responseWeather.currentConditions.source;
    }else{
        alert("Aucune donnée trouvée pour cette ville.");
    }
   

}

initialize();
getWeather.addEventListener("click",getAll);













