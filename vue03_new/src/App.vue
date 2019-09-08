<template>
  <div id="app">
    <Nav />
  </div>
</template>

<script>
import Nav from './pages/nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
body{
    margin: 0;
    background-color: #252525;
}
</style>
