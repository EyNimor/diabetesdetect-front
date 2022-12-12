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
            <th>ID</th>
            <th>First Name - Last Name</th>
            <th>Birth Date</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Phone</th>
        </tr>
        <tr>
            <td>{{ info.patientId }}</td>
            <td>{{ info.firstName }} {{ info.lastName }}</td>
            <td>{{ info.birthDate }}</td>
            <td>{{ info.sex }}</td>
            <td>{{ info.address }}</td>
            <td>{{ info.phone }}</td>
        </tr>
    </table>
    <div id="errorMessage">{{ message }}</div>
  </body>
</template>

<script lang="js">
    import NavBar from '@/components/NavBar.vue'
    import axios from 'axios'

    export default {
        name: 'FindPatientById',
        components: {
            NavBar
        },
        data () {
            return {
                id: '',
                idCorrect: true,
                info: {},
                message: ''
            }
        },
        methods: {
            search() {
                this.message = '';
                axios
                    .get('http://localhost:8081/patient/findById?id=' + this.id)
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