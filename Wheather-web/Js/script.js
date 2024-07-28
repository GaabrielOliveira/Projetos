const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
    const APIKey = '0481506a82b8320f8aa543dff775f5b5';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

            if(json.cod == '404') {
                cityHide.textContent = city
                container.style.height = '400px'
                weatherBox.classList.remove('active')
                weatherDetails.classList.remove('active')
                error404.classList.add('active')
                return
            }
            
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
        
            if (cityHide.textContent == city) {
                return
            }
            else {
                cityHide.textContent = city;
                
                container.style.height = '555px'
                container.classList.add('active')
                weatherBox.classList.add('active')
                weatherDetails.classList.add('active')
                error404.classList.remove('active')
                
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/clear.png'
                    break;
                
                case 'Rain':
                    image.src = 'img/rain.png'
                    break;
                    
                case 'Snow':
                    image.src = 'img/snow.png'
                    break;

                case 'Clouds':
                    image.src = 'img/cloud.png'
                    break;

                case 'Mist':
                    image.src = 'img/mist.png'
                    break;

                case 'Haze':
                    image.src = 'img/mist.png'
                    break;
                    
                default:
                    image.src = 'img/cloud.png'
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`
            description.innerHTML = `${json.weather[0].description}`
            humidity.innerHTML = `${json.main.humidity}%`
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

            const inforWeather = document.querySelector('.info-weahter')
            const inforHumidity = document.querySelector('.info-humidity')
            const inforWind = document.querySelector('.info-wind')

            const elCloneInfoWeather = inforWeather.cloneNode(true);
            const elCloneInfoHumidity = inforHumidity.cloneNode(true);
            const elCloneInfoWind = inforWind.cloneNode(true);

            elCloneInfoWeather.id = 'clone-info-weather';
            elCloneInfoWeather.classList.add('active-clone')

            elCloneInfoHumidity.id = 'clone-info-humidity';
            elCloneInfoHumidity.classList.add('active-clone')

            elCloneInfoWind.id = 'clone-info-wind';
            elCloneInfoWind.classList.add('active-clone')

            setTimeout(() => {
                inforWeather.insertAdjacentElement("afterend", elCloneInfoWeather)
                inforHumidity.insertAdjacentElement("afterend", elCloneInfoHumidity)
                inforWind.insertAdjacentElement("afterend", elCloneInfoWind)
            }, 2200)

            const cloneInfoWeather = document.querySelectorAll('.info-weather.active-clone')
            const totalCloneInfoWeather = cloneInfoWeather.length
            const cloneInfoWeatherFirst = cloneInfoWeather[0]

            const cloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone')
            const totalCloneInfoHumidity = cloneInfoHumidity.length
            const cloneInfoHumidityFirst = cloneInfoHumidity[0]

            const cloneInfoWind = document.querySelectorAll('.info-wind.active-clone')
            const totalCloneInfoWind = cloneInfoWind.length
            const cloneInfoWindFirst = cloneInfoWind[0]

            if (totalCloneInfoWeather > 0) {
                cloneInfoWeatherFirst.classList.remove('active-clone')
                cloneInfoHumidityFirst.classList.remove('active-clone')
                cloneInfoWindFirst.classList.remove('active-clone')

                setInterval(() => {
                    cloneInfoWeatherFirst.remove()
                    cloneInfoHumidityFirst.remove()
                    cloneInfoWindFirst.remove()
                }, 2200);
            }
            }

        })
})
