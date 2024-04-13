const apikey="5610c44c2e9ea5be2de104411be082f4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



let input=document.querySelector(".search input");
let btn=document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon");



async function checkWeather(city){
    let response=await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
       
        let data = await response.json();

  

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
        
        if(data.weather[0].main=="Clouds"){
            weatherIcon.setAttribute("src","Images/clouds.png")
        } else if(data.weather[0].main=="Clear"){
            weatherIcon.setAttribute("src","Images/clear.png")
        }else if(data.weather[0].main=="Rain"){
            weatherIcon.setAttribute("src","Images/rain.png")
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.setAttribute("src","Images/drizzle.png")
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.setAttribute("src","Images/mist.png")
        }else if(data.weather[0].main=="Snow"){
            weatherIcon.setAttribute("src","Images/snow.png")
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

    
   
}



btn.addEventListener("click", ()=>{
   
    checkWeather(input.value);
    document.querySelector("input").value="";
  
    
    
})
