<template>
    <header>
      <NavBar/>
    </header>
    <body>
        <input v-model="id" @keypress.enter="nextInput" id="patientInfoInput" type="text" placeholder="Note ID">
        <input v-model="note" @keypress.enter="updateHistory" id="patientInfoInput" type="text" placeholder="Note">
        <button @click="updateHistory">Update</button>
        <div id="errorMessage">{{ message }}</div>
    </body>
</template>

<script lang="js">
    import NavBar from '@/components/NavBar.vue'
    import axios from 'axios'
    import qs from 'qs'
    
    export default {
        name: 'ModifyHistory',
        components: {
            NavBar
        },
        data () {
            return {
                id: '',
                note: '',
                message: ''
            }
        },
        methods: {
            updateHistory() {
                this.message = ''
                let params = qs.stringify({
                    'id': this.id, 
                    'e': this.note
                })
                axios
                .put('http://localhost:8081/history/updateNote', params)
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