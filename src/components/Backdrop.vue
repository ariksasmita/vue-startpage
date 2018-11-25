<template>
  <div class="backdrop-container" :style="{ backgroundImage: parsedImageUrl }">
    <span>{{ weather }}</span>
    <span>{{ parsedImageUrl }}</span>
  </div>
</template>

<script>
export default {
  name: 'Backdrop',
  props: {
    weather: String,
    imageUrl: String,
  },
  computed: {
    parsedImageUrl: function() {
      return `url('${this.imageUrl}')`
    }
  }
}
</script>

<style>
.backdrop-container {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.backdrop-container::before {
  content: "";
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
} 
</style>
