<template>
  <div class="form">
    Form
    <p>{{ msg }}</p>
    <input v-model="city" type="text" name="city" placeholder="Type city name..." id="city" />
    <button @click="passing">Testing</button>
    <button @click="fetch">Eh yeh</button>
  </div>
</template>

<script>
import weather from '../api/weather'

export default {
  name: 'Form',
  props: {
    msg: String,
  },
  data() {
    return {
      city: '',
    }
  },
  methods: {
    passing () {
      this.$emit('clicked', this.city)
    },
    fetch: function() {
      this.city ? weather(this.city) : () => true
    }
  }
}
</script>
