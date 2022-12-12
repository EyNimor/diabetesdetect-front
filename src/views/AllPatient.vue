<template>
    <header>
      <NavBar/>
    </header>
    <body>
      <table>
          <tr>
              <th>ID</th>
              <th>First Name - Last Name</th>
              <th>Birth Date</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Phone</th>
          </tr>
          <tr v-for="item in data">
              <td>{{ item.patientId }}</td>
              <td>{{ item.firstName }} {{ item.lastName }}</td>
              <td>{{ item.birthDate }}</td>
              <td>{{ item.sex }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.phone }}</td>
          </tr>
      </table>
    </body>
</template>

<script lang="js">
    import NavBar from '@/components/NavBar.vue'
    import axios from 'axios'

    export default {
        name: 'AllPatient',
        components: {
            NavBar
        },
        data () {
            return {
                data: [{
                    patientId: '',
                    lastName: '',
                    firstName: '',
                    birthDate: '',
                    sex: '',
                    address: '',
                    phone: ''
                }],
                message: ''
            }
        },
        mounted () {
            axios
                .get('http://localhost:8081/patient/findAll')
                .then(response => (this.data = response.data))
        }
    }
</script>

<style scoped lang="scss">
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
</style>