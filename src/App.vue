<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Form msg="Hello!" @clicked="logthem" />
    <Backdrop :weather="weather" :imageUrl="imageUrl"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Backdrop from './components/Backdrop'
import Form from './components/Form'

import getUnsplashImage from './api/unsplash'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Backdrop,
    Form,
  },
  data() {
    return {
      weather: 'rain outdoor',
      imageUrl: '',
      city: '',
    }
  },
  methods: {
    getImageUrlFromApi: async function () {
      this.imageUrl = await getUnsplashImage(this.weather)
    },
    logthem: function (value) {
      console.log(value)
      this.city = value
    },
  },
  mounted () {
    this.getImageUrlFromApi()
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
