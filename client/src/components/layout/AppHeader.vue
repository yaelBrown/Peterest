<template>
  <div>
    <!-- <h1>Header</h1> -->
    <ul id="headerMenu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  #headerMenu {
    list-style-type: none;
    display: flex;
    text-decoration: none;
    flex-direction: row;
    justify-content: flex-end;
  }

  #headerMenu li {
    margin: 2rem 2rem;
  }
</style>