<template>
  <a href="https://vuejs.org">
    <img src="./assets/area.png" class="image-redimensionnee">
  </a>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.image-redimensionnee {
  width: 80px; /* Largeur souhaitée */
  height: 80px; /* Hauteur ajustée proportionnellement */
  margin-top: -60px;
  margin-left: -780px;
}
</style>
