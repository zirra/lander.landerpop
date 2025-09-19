import { createRouter, createWebHistory } from 'vue-router'
import SharedEntry from '@/views/SharedEntry'
import ProspectEntry from '@/views/ProspectEntry'
import MainMenu from '@/views/MainMenu'

const routes = [
  {
    path: '/shared/:shareId',
    name: 'shared',
    component: SharedEntry
  },
  {
    path: '/:propertyId/:landerId',
    name: 'prospect',
    component: ProspectEntry
  },
  {
    path: '/:propertyId',
    name: 'lead',
    component: ProspectEntry
  },
  {
    path: '/',
    name: 'main',
    component: MainMenu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
