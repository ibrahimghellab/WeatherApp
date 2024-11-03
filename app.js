let getWeather=document.getElementById("getWeather");
let dateP=document.getElementById("date");
let emojiP=document.getElementById("emoji");
let temperatureP=document.getElementById("temperature");
let feelLike=document.getElementById("feelLike");
let humidity=document.getElementById("humidity");
let source=document.getElementById("src");



const fahrenheitToCelsius=(degre)=>{
    return Math.round((degre-32)*5/9);
}

const getAll=async(city)=>{
    let request="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/48.867,2.33?key=F35BBHUQQFCZ2EDBV78NKVA5Q";
    let data=await fetch(request);
    let response= await data.json();
    console.log(response);
    let date = new Date().toLocaleDateString();
    dateP.textContent=date;
    emojiP.textContent="❄️";
    temperatureP.textContent=fahrenheitToCelsius(response.currentConditions.temp)+"°C";
    feelLike.textContent=fahrenheitToCelsius(response.currentConditions.feelslike)+"°C";
    humidity.textContent=response.currentConditions.humidity+"%";
    source.textContent="Source : "+response.currentConditions.source;
}


getWeather.addEventListener("click",getAll("Paris,FR"));













