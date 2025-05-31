const apiKey = '55edca466423246e0c82b80cf2a457fd';
const forecastKey = 'a2cebfdf11aa56360c03816b18c3ae75';
const city = 'Pretoria';
const lat = '-25.7459277';
const lon = '28.1879101';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humid = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const feel = document.querySelector('.feel');
const daily = document.querySelector('.daily');

getWeatherdata();
getForecast();

async function getWeatherdata() {
    fetch(url) 
    .then(response => {
        if(!response) {
            throw new Error('Could not access weather data');
        }
        return response.json();
    })
    .then(data => {
        temp.innerHTML = `${Math.round(data.main.temp)} ℃`; 
        wind.innerHTML = `${Math.round(data.wind.speed)} km/h`; 
        humid.innerHTML = `${Math.round(data.main.humidity)} g/m³`; 
        feel.innerHTML = `${Math.round(data.main.feels_like)} ℃`; 
        pressure.innerHTML = `${Math.round(data.main.pressure)} Pa`; 
    })
}

function getForecast() {
    fetch(forecast)
    .then(response => {
        if(!response) {
            throw new Error('Could not retrieve data');
        }
        return response.json();
    })
    .then(data => {
        for (let index = 0; index < 3; index++) {                        
            const dayData = data.list[index].main;
            const weather = data.list[index].weather[0];
            const h4 = document.createElement('h4');
            h4.classList.add('forecast-heading');
            const p = document.createElement('p');
            if (index == 0) {
                h4.innerHTML = 'Tomorrow';
            } else {
                h4.innerHTML = `Day ${index + 1}`;
            }
            p.classList.add('forecast-data')

            p.innerHTML = `Min: ${Math.floor(dayData.temp_min)} ℃ - Max: ${Math.floor(dayData.temp_max)} ℃ (${weather.main})`
            daily.appendChild(h4);
            daily.appendChild(p);
        }
    })
}

