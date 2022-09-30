import { createRouter, createWebHistory } from 'vue-router'
import PizzometroView from '../views/PizzometroView.vue'
import OrcamentoDeTintasView from '../views/OrcamentoDeTintasView.vue'

const routes = [
  {
    path: '/pizzometro',
    name: 'pizzometro',
    component: PizzometroView
  },
  {
    path: '/orcamentodetintas',
    name: 'orcamentodetintas',
    component: OrcamentoDeTintasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
