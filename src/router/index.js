import { createRouter, createWebHistory } from 'vue-router'
import SharedEntry from '@/views/SharedEntry'
import PropertyEntry from '@/views/PropertyEntry'
import ProspectEntry from '@/views/ProspectEntry'
import MainMenu from '@/views/MainMenu'
import ErrorView from '@/views/ErrorView'

const routes = [
  {
    path: '/shared/:shareId',
    name: 'shared',
    component: SharedEntry
  },
  {
    path: '/shared',
    name: 'sharefail',
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
    component: PropertyEntry
  },
  {
    path: '/',
    name: 'main',
    component: MainMenu
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
