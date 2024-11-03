let getWeather=document.getElementById("getWeather");



let getAll=async(city)=>{
    let request="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/city?key=F35BBHUQQFCZ2EDBV78NKVA5Q";
    let data=await fetch(request);
    let response= await data.json();
    
}



getWeather.addEventListener("click",getAll(city));















