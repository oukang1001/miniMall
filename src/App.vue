<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
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
  @import "assets/css/base.css";
  @import "assets/font/iconfont.css";
</style>
