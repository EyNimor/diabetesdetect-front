<template>
    <header>
      <NavBar/>
    </header>
    <body>
        <input v-model="patientId" @keypress.enter="nextInput" id="newNoteInput" type="text" placeholder="Patient ID">
        <input v-model="note" @keypress.enter="createNewNote" id="newNoteInput" type="text" placeholder="Note">
        <button @click="createNewNote">Add</button>
        <div id="errorMessage">{{ message }}</div>
    </body>
</template>

<script lang="js">
    import NavBar from '@/components/NavBar.vue'
    import axios from 'axios'
    import qs from 'qs'
    
    export default {
        name: 'AddToHistory',
        components: {
            NavBar
        },
        data () {
            return {
                patientId: '',
                note: '',
                message: ''
            }
        },
        methods: {
            createNewNote() {
                this.message = ''
                let params = qs.stringify({
                    'patId': this.patientId, 
                    'e': this.note
                })
                axios
                .post('http://localhost:8081/history/addNote', params)
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