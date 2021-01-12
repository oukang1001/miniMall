<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from "components/content/main_tabbar/MainTabbar"


export default {
  name: 'App',
  components: {
   mainTabbar
  }

}
</script>

<style>
  @import "assets/css/normalize.css"
</style>
