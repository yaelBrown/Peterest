<template>
  <div id="app">
    <AppHeader/>
    <router-view></router-view>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from "@/components/layout/AppHeader.vue";
  import AppFooter from "@/components/layout/AppFooter.vue";

  export default {
    name: "app",
    components: {
      AppHeader,
      AppFooter
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
