// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import DnD from './components/DnD.vue'
import Tormenta from './components/Tormenta.vue'
import OrdemParanormal from './components/OrdemParanormal.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/dnd', component: DnD },
  { path: '/tormenta', component: Tormenta },
  { path: '/ordem-paranormal', component: OrdemParanormal }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
