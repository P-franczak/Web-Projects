const cityName = document.querySelector('.city')
const input = document.querySelector('input')
const btn = document.querySelector('button')
const error = document.querySelector('.error')
const img = document.querySelector('img')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=7db51da722b6b9d50095a1153e5ce5f4'
const API_UNITS = '&units=metric'

const getWeather = () => {
	const city = input.value || 'London'
	const URL = API_LINK + city + API_KEY + API_UNITS

	axios
		.get(URL)
		.then(res => {
			console.log(res.data)
			const temp = res.data.main.temp
			const hum = res.data.main.humidity
			const status = Object.assign({}, ...res.data.weather)

			error.style.display = 'none'
			input.value = ''

			if (status.id >= 200 && status.id < 300) {
				img.setAttribute('src', './img/thunderstorm.png')
			} else if (status.id >= 300 && status.id < 400) {
				img.setAttribute('src', './img/drizzle.png')
			} else if (status.id >= 500 && status.id < 600) {
				img.setAttribute('src', './img/rain.png')
			} else if (status.id >= 600 && status.id < 700) {
				img.setAttribute('src', './img/ice.png')
			} else if (status.id >= 700 && status.id < 800) {
				img.setAttribute('src', './img/fog.png')
			} else if (status.id == 800) {
				img.setAttribute('src', './img/sun.png')
			} else if (status.id >= 800 && status.id < 900) {
				img.setAttribute('src', './img/cloud.png')
			} else {
				img.setAttribute('src', './img/unknown.png')
			}

			cityName.textContent = res.data.name
			temperature.textContent = Math.floor(temp) + '°C'
			humidity.textContent = hum + '%'
			weather.textContent = status.main
		})
		.catch(() => ((error.style.display = 'block'), (input.value = '')))
}

const enterCheck = e => {
	if (e.key == 'Enter') {
		getWeather()
	}
}

getWeather()

btn.addEventListener('click', getWeather)
input.addEventListener('keyup', enterCheck)
