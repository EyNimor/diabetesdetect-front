<template>
    <header>
      <NavBar/>
    </header>
    <body>
      <div id="researchBar">
          <input v-model="id" @keypress.enter="search()" id="idInput" type="text" placeholder="Patient ID">
          <button @click="search()">Search</button>
      </div>
      <table>
          <tr>
              <th>Note ID</th>
              <th>Patient ID</th>
              <th>Note(s)</th>
          </tr>
          <tr v-for="item in info">
              <td>{{ item.id }}</td>
              <td>{{ item.patientId }}</td>
              <td>{{ item.notes }}</td>
          </tr>
      </table>
      <div id="errorMessage">{{ message }}</div>
    </body>
  </template>
  
  <script lang="js">
      import NavBar from '@/components/NavBar.vue'
      import axios from 'axios'
  
      export default {
          name: 'GetHistory',
          components: {
              NavBar
          },
          data () {
              return {
                  id: '',
                  info: [{}],
                  message: ''
              }
          },
          methods: {
              search() {
                  this.message = '';
                  axios
                      .get('http://localhost:8081/history/findByPatientId?patId=' + this.id)
                      .then(response => (this.info = response.data))
                      .catch(error => {
                          console.log(error);
                          this.message = 'Erreur :(';
                      })
              }
          }
      }
  </script>
  
  <style lang="scss" scoped>
  table {
      height: 20vh;
      width: 60%;
      overflow: scroll;
      width: 100%;
      td, th {
        text-align: center;
        vertical-align: center;
        border: 2px black solid;
        padding: 5px;
      }
      tr {
        height: 10vh;
      }
  }
  
  #errorMessage {
      font-weight: bold;
      color: rgb(190, 0, 0);
  }
  </style>