<template>
  <h1>Diabetes Detect</h1>
  <nav id="buttons">
    <router-link to="/home" id="navButton">Home</router-link>
    <router-link to="/find" id="navButton">Find Patient With ID</router-link>
    <router-link to="/list" id="navButton">Get All Patient</router-link>
    <router-link to="/add" id="navButton">Add Patient</router-link>
    <router-link to="/modify" id="navButton">Update Patient</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  text-align: right;
  #navButton {
    display: inline-block;
    text-decoration: unset;
    text-align: center;
    font-weight: bold;
    color: black;

    height: 20px;
    padding: 10px 0.8em 10px 0.8em;

     &.router-link-exact-active {
      color: rgb(65, 125, 255);
    }
  }

  #navButton:hover {
    color: rgb(150, 150, 150);
  }
}
</style>