<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Backdrop :weather="weather" :imageUrl="imageUrl"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Backdrop from './components/Backdrop'

import getUnsplashImage from './api/unsplash'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Backdrop,
  },
  data() {
    return {
      weather: 'rain outdoor',
      imageUrl: '',
    }
  },
  methods: {
    getImageUrlFromApi: async function () {
      this.imageUrl = await getUnsplashImage(this.weather)
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
