<template>
  <div class="hello">
    <!-- <div class="rectangle">
      <div class="th">
        <router-link to="/login" class="text">Get Started</router-link>
      </div>
    </div> -->
    <div class="lo">
      <router-link to="/login" class="text">Log in</router-link>
    </div>
    <div class="dev">
      <router-link to="/login" class="text">Developers</router-link>
    </div>
    <div class="sous-pos">
      <p class="sous-text">Get strated</p>
    </div>
    <div class="rectangle1">
      <p class="text-facebook">Sign up with Facebook</p>
    </div>
    <div class="facebook-pos">
      <img src="../assets/facebook.png" class="image-facebook">
    </div>
    <div class="rectangle2">
      <p class="text-facebook">Sign up with Gmail</p>
    </div>
    <div class="facebook-pos">
      <img src="../assets/gmail.png" class="image-facebook">
    </div>
    <div class="text-pos-lo">
      <p>Or use your email to 
        <router-link to="/signup" class="text-lo">sign up</router-link> or 
        <router-link to="/login" class="text-lo">log in</router-link>
      </p>
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
  margin-top: -45px;
  margin-left: 1480px;
}
.dev {
  margin-top: -20px;
  margin-left: 1290px;
}
.sous-text {
  color: #000000;
  font-size: 50px;
}
.sous-pos {
  margin-top: 100px;
}
.rectangle1 {
  width: 400px; /* Largeur du rectangle */
  height: 50px; /* Hauteur du rectangle */
  border: 2px solid #709CA7;
  border-radius: 30px;
  background-color: #ffffff; /* Couleur de fond du rectangle */
  margin-left: 610px;
  margin-top: 10px;
}
.image-facebook {
  width: 60px; /* Largeur souhaitée */
  height: 60px; /* Hauteur ajustée proportionnellement */
}
.facebook-pos {
  margin-top: -55px;
  margin-left: -450px;
}
.text-facebook {
  color: #000000;
  font-size: 30px;
  margin-top: 10px;
}
.rectangle2 {
  width: 400px; /* Largeur du rectangle */
  height: 50px; /* Hauteur du rectangle */
  border: 2px solid #709CA7;
  border-radius: 30px;
  background-color: #ffffff; /* Couleur de fond du rectangle */
  margin-left: 610px;
  margin-top: 10px;
}
.text-lo {
  color: #000000;
}
.pos-lo {
  margin-top: 100px;
  margin-left: 100px;
}
.text-pos-lo {
  color: #000000;
  font-size: 30px;
  margin-top: 50px;
  margin-left: 10px;
}
</style>
  