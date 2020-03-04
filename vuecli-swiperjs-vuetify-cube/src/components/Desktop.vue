<template>
  <div class="desktop">    
    <h1>Mobile Swiper looks cool only on mobile!</h1>
  </div>
</template>

<script>
export default {
  name: 'Desktop'
}
</script>

<style scoped>
  .desktop {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, #f44881, #ec454f);
    text-align: center;
    font-size: 2em;
    line-height: 2em;
    padding-top: 30vh;
  }
  .desktop h1 {
    color: white;
  }
</style>
