import axios from 'axios'

const WeatherController = {
  //[POST] /api/weather/create
  createUserWeather: (req, res) => {
    const lat = req.query.lat
    const lon = req.query.lon
    let REQUEST = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.API_WEATHER_KEY}`
    axios
      .get(REQUEST)
      .then((resWeather) => res.status(200).json(resWeather.data))
      .catch((err) => res.status(500).json(err))
  },
}

export default WeatherController
