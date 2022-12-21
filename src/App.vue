<script >
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'
import appFooter from './components/appFooter.vue'



export default {
  components: {
    appHeader, appMain, appFooter
  }
}
</script>

<template>
  <header>
    <appHeader />
  </header>

  <main>
    <appMain />
  </main>

  <footer>
    <appFooter />
  </footer>

</template>

<style lang="scss">
@use "./components/style/general.scss"
</style>
