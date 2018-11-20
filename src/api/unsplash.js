import axios from 'axios'

const url = 'https://api.unsplash.com/photos/random/?orientation=landscape&client_id=128b5475e7f83331acc248efa13a89ef5bfb89b4b3d2663232cf23aa3f1475ac'

export default (query) => axios.get(`${url}&query=${query}`)
  .then(data => {
    if (data) {
      return data.data.urls.regular
    }
    return null
  })
