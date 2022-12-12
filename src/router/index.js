import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FindPatientById from '../views/FindPatientById.vue'
import AllPatient from '../views/AllPatient.vue'
import NewPatient from '../views/NewPatient.vue'
import UpdatePatient from '../views/UpdatePatient.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'FindPatientById',
    component: FindPatientById
  },
  {
    path: '/list',
    name: 'AllPatient',
    component: AllPatient
  },
  {
    path: '/add',
    name: 'NewPatient',
    component: NewPatient
  },
  {
    path: '/modify',
    name: 'UpdatePatient',
    component: UpdatePatient
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
