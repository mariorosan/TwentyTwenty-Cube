<template>
  <div>
    <div v-responsive.xs>
      <Cube />
    </div>
    <div v-responsive.sm.md.lg.xl>
      <Desktop />
    </div>
  </div>
</template>

<script>
import Cube from './components/Cube';
import Desktop from './components/Desktop';

export default {
  name: 'App',
  components: {
    Cube,
    Desktop,
  }
} 
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background-color: black;
  }
  h1 {
    font-family: Roboto;
    font-weight: 200;
  }
</style>