<template lang="pug">
#app
  Navbar
  Carousel
  main.mt-5.bg-white(role='main')
    router-view
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

  #nav
    padding: 30px
  a
    font-weight: bold
    // &.router-link-exact-active
</style>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
export default {
  components: { Navbar, Carousel }
}
</script>
