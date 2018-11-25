import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather?APPID=cdc06fab41045afce5f38fa0f21e9dee'

export default (query) => axios.get(`${url}&q=${query}`)
  .then(data => {
    console.log(data.data)
  })
