<template>
  <a href="https://vuejs.org">
    <img src="./assets/area.png" class="image-redimensionnee">
    <hr class="ligne-droite">
  </a>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
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
.ligne-droite {
  border: none;
  border-top: 3px solid #709CA7;
  margin: -10px 0; /* Vous pouvez ajuster la marge selon vos besoins */
}
</style>
