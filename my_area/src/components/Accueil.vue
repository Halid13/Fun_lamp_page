<template>
  <div class="hello">
    <div class="rectangle">
      <div class="th">
        <router-link to="/join" class="text">Get Started</router-link>
      </div>
    </div>
    <div class="lo">
      <router-link to="/login" class="text">Log in</router-link>
    </div>
    <div class="dev">
      <router-link to="/login" class="text">Developers</router-link>
    </div>
    <div class="image-pos">
      <img src="../assets/back.png" class="image-redimensionnee">
    </div>
    <div class="prinp-pos">
      <p class="text-prinp">WELCOME TO</p>
    </div>
    <div class="prinp-pos2">
      <p class="text-prinp">AREA</p>
    </div>
    <div class="sous-pos">
      <p class="sous-text">Get a multitude of services</p>
    </div>
    <div class="rectangle1">
      <div class="the">
        <router-link to="/join" class="fina-text">Start</router-link>
      </div>
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
  margin-top: -25px;
  margin-left: 1230px;
}
.dev {
  margin-top: -20px;
  margin-left: 1050px;
}
.image-redimensionnee {
  width: 1250px; /* Largeur souhaitée */
  height: 600px; /* Hauteur ajustée proportionnellement */
}
.image-pos {
  margin-top: 100px;
  margin-left: 750px;
}
.text-prinp {
  color: #000000;
  font-weight: bolder;
  font-size: 70px;
}
.prinp-pos {
  margin-top: -500px;
}
.prinp-pos2 {
  margin-top: -80px;
}
.sous-text {
  color: #000000;
  font-weight:lighter;
  font-size: 30px;
}
.sous-pos {
  margin-top: -50px;
}
.rectangle1 {
  width: 100px; /* Largeur du rectangle */
  height: 40px; /* Hauteur du rectangle */
  border-radius: 30px;
  background-color: #709CA7; /* Couleur de fond du rectangle */
  margin-left: 730px;
  margin-top: -10px;
}
.the {
  padding-top: 7px;
}
.fina-text {
  color: #000000;
  font-weight:lighter;
  font-size: 30px;
  text-decoration: none;
}
</style>
