<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">      
        <div class="swiper-slide slide1">
          <Home />
        </div>
        <div class="swiper-slide slide2">
          <Services />
        </div>
        <div class="swiper-slide slide3">
          <About />
        </div>
        <div class="swiper-slide slide4">
          <Contact />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- navigation
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
      -->
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import Home from './Home'
  import Services from './Services'
  import About from './About'
  import Contact from './Contact'

  export default {
    name: 'Cube',
    components: {
      Home,
      Services,
      About,
      Contact
    },
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        loop: true,
        grabCursor: true,
        cubeEffect: {
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        /* navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },*/
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
      return swiper
    }
  }
</script>

<style scoped>
  html, body {
    position: relative;
    height: 100%;
  }

  .body {
    margin: 0;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    margin-left: -50%;
  }

  .swiper-slide {
    background-size: cover !important;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  .slide1 {
    background: linear-gradient(180deg, #f44881, #ec454f);
  }

  .slide2 {
    background: linear-gradient(180deg, #6edcc4, #1aab8b);
  }

  .slide3 {
    background: linear-gradient(0deg, #f19a1a, #ffc73c);
  }

  .slide4 {
    background: linear-gradient(0deg, #8b60ed, #b372bd);
  }
  /* NAVIGATION
  .swiper-button-next, .swiper-button-prev {
    top: 85%;
    outline: none;
  }

  .swiper-button-next {
    right: 3em;
  }

  .swiper-button-prev {
    left: 3em;
  }*/
</style>