import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FindPatientById from '../views/FindPatientById.vue'
import AllPatient from '../views/AllPatient.vue'
import NewPatient from '../views/NewPatient.vue'
import UpdatePatient from '../views/UpdatePatient.vue'
import GetHistory from '../views/GetHistory.vue'
import AddToHistory from '../views/AddToHistory.vue'
import ModifyHistory from '../views/ModifyHistory.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/findPatient',
    name: 'FindPatientById',
    component: FindPatientById
  },
  {
    path: '/patientList',
    name: 'AllPatient',
    component: AllPatient
  },
  {
    path: '/addPatient',
    name: 'NewPatient',
    component: NewPatient
  },
  {
    path: '/modifyPatient',
    name: 'UpdatePatient',
    component: UpdatePatient
  },
  {
    path: '/fullHistory',
    name: 'GetHistory',
    component: GetHistory
  },
  {
    path: '/addToHistory',
    name: 'AddToHistory',
    component: AddToHistory
  },
  {
    path: '/modifyHistory',
    name: 'ModifyHistory',
    component: ModifyHistory
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
