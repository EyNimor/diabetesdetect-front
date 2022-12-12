<template>
    <header>
      <NavBar/>
    </header>
    <body>
        <input v-model="firstName" @keypress.enter="nextInput" id="patientInfoInput" type="text" placeholder="First Name">
        <input v-model="lastName" @keypress.enter="nextInput" id="patientInfoInput" type="text" placeholder="Last Name">
        <input v-model="birthDate" @keypress.enter="nextInput" id="patientInfoInput" type="text" placeholder="Birth Date (YYYY-MM-DD)">
        <input v-model="sex" @keypress.enter="nextInput" id="patientInfoInput" type="text" placeholder="Sex">
        <input v-model="address" @keypress.enter="nextInput" id="patientInfoInput" type="text" placeholder="Address">
        <input v-model="phone" @keypress.enter="createNewPatientProfile" id="patientInfoInput" type="text" placeholder="Phone">
        <button @click="createNewPatientProfile">Add</button>
        <div id="errorMessage">{{ message }}</div>
    </body>
</template>

<script lang="js">
    import NavBar from '@/components/NavBar.vue'
    import axios from 'axios'
    import qs from 'qs'
    
    export default {
        name: 'AllPatient',
        components: {
            NavBar
        },
        data () {
            return {
                lastName: '',
                firstName: '',
                birthDate: '',
                sex: '',
                address: '',
                phone: '',
                message: ''
            }
        },
        methods: {
            createNewPatientProfile() {
                this.message = ''
                let params = qs.stringify({
                    'given': this.firstName, 
                    'family': this.lastName, 
                    'dob': this.birthDate, 
                    'sex': this.sex, 
                    'address': this.address, 
                    'phone': this.phone
                })
                axios
                .post('http://localhost:8081/patient/add', params)
                .catch(error => {
                    console.log(error);
                    this.message = 'Erreur :('
                })
            },
            nextInput(e) {
                const next = e.currentTarget.nextElementSibling;
                if (next) {
                    next.focus();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #errorMessage {
        font-weight: bold;
        color: rgb(190, 0, 0);
    }
</style>