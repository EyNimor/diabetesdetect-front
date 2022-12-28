<template>
  <h1>Diabetes Detect</h1>
  <nav id="buttons">
      <router-link to="/home" id="navButton">Home</router-link>
      <router-link to="/findPatient" id="navButton">Find Patient With ID</router-link>
      <router-link to="/patientList" id="navButton">Get All Patient</router-link>
      <router-link to="/addPatient" id="navButton">Add Patient</router-link>
      <router-link to="/modifyPatient" id="navButton">Update Patient</router-link>
      <router-link to="/fullHistory" id="navButton">Get Patient History</router-link>
      <router-link to="/addToHistory" id="navButton">Add Note to Patient History</router-link>
      <router-link to="/modifyHistory" id="navButton">Update Patient History</router-link>
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