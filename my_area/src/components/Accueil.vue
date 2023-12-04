<template>
  <div class="hello">
    <div class="rectangle">
      <div class="th">
        <router-link to="/login" class="text">Get Started</router-link>
      </div>
    <div class="lo">
      <router-link to="/login" class="text">Log in</router-link>
    </div>
    <div class="dev">
      <router-link to="/login" class="text">Developers</router-link>
    </div>
    <img src="../assets/back.png" class="image-redimensionnee">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    msg: String
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rectangle {
  width: 100px; /* Largeur du rectangle */
  height: 40px; /* Hauteur du rectangle */
  border-radius: 30px;
  background-color: #709CA7; /* Couleur de fond du rectangle */
  margin-left: 1450px;
  margin-top: -60px;
}
.th {
  padding-top: 12px;
}
.text {
  color: #000000;
  text-decoration: none;
}
.lo {
  margin-top: -20px;
  margin-left: -180px;
}
.dev {
  margin-top: -20px;
  margin-left: -350px;
}
.image-redimensionnee {
  width: 1250px; /* Largeur souhaitée */
  height: 550px; /* Hauteur ajustée proportionnellement */
  margin-top: 33px;
  margin-left: -1390px;
}
</style>
