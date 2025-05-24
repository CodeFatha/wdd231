const apiKey = '55edca466423246e0c82b80cf2a457fd';
const city = 'Pretoria';
const lat = '-25.7582788';
const lon = '27.8682952';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const threeDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humid = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const feel = document.querySelector('.feel');

getWeatherdata();

async function getWeatherdata() {
    fetch(url,) 
    .then(response => {
        if(!response) {
            throw new Error('Could not access weather data');
        }
        return response.json();
    })
    .then(data => {
        temp.innerHTML = `${Math.round(data.main.temp)}℃`; 
        wind.innerHTML = `${Math.round(data.wind.speed)}km/h`; 
        humid.innerHTML = `${Math.round(data.main.humidity)}g/m³`; 
        feel.innerHTML = `${Math.round(data.main.feels_like)}℃`; 
        pressure.innerHTML = `${Math.round(data.main.pressure)}Pa`; 
    })
}

