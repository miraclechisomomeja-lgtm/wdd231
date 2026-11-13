const currentTemp = document.querySelector("#current-temp");
const weatherDescription = document.querySelector("#weather-description");
const weatherIcon = document.querySelector("#weather-icon");
const weatherForecast = document.querySelector("#weather-forecast");

const apiKey = 'fbe880467cd53ca80a3117d4f824344b';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=5.7958&lon=7.0335&units=metric&appid=${apiKey}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=5.7958&lon=7.0335&units=metric&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const currentResponse = await fetch(currentWeatherUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (currentResponse.ok && forecastResponse.ok) {
            const currentData = await currentResponse.json();
            const forecastData = await forecastResponse.json();

            displayCurrentWeather(currentData);
            displayForecast(forecastData);
        } else {
            throw new Error('Weather data could not be retrieved.');
        }
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();




function displayCurrentWeather(data) {
    currentTemp.textContent = `${data.main.temp}°C`;

    weatherDescription.textContent = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}



function displayForecast(data) {
    const dailyForecast = data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
    ).slice(0, 3);

    dailyForecast.forEach(day => {
        const date = new Date(day.dt_txt);
        const temperature = day.main.temp;
        const description = day.weather[0].description;

        const forecastCard = document.createElement('div');

        forecastCard.innerHTML = `
            <h4>${date.toLocaleDateString('en-US', {
            weekday: 'long'
        })}</h4>
            <p>${temperature}°C</p>
            <p>${description}</p>
        `;

        weatherForecast.appendChild(forecastCard);
    });
}