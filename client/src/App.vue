<template>
  <div id="app">
    <AppHeader/>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AppFooter/>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";
  import AppHeader from "@/components/layout/AppHeader.vue";
  import AppFooter from "@/components/layout/AppFooter.vue";

  export default {
    name: "app",
    components: {
      HelloWorld,
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
