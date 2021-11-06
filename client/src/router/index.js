import { createRouter, createWebHistory } from 'vue-router'
import Discovery from '../views/Discovery.vue'

const routes = [
  {
    path: '/discovery',
    name: 'Discovery',
    component: Discovery
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
