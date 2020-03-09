<template>
  <div class="home">
    <v-row>
      <v-col cols="1">
        <h1 class="headline">Mobile Swiper || Services</h1>
      </v-col>
      <v-col cols="11">
        <div class="logo">
          <h1>SwiperJS</h1>
          <img src="../assets/logo.png" alt="">
        </div>        
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style>
  .headline {
    writing-mode: vertical-rl;
    font-size: 50px;
    color: #ffffff;
    margin-top: 30px;
  }
    .logo {
   margin-left: 60%;
   margin-top: 100%;
  }
  .logo h1 {
    font-size: 30px;
    color: #ffffff;
  }
  img {
    width: 120px;
  }
</style>
