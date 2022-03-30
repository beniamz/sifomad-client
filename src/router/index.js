import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/transaction',
      name: 'transaction.index',      
      component: () => import('../views/transaction/Index.vue')
    },
    {
      path: '/create',
      name: 'transaction.create',      
      component: () => import('../views/transaction/Create.vue')
    },
    {
      path: '/edit/:id',
      name: 'transaction.edit',      
      component: () => import('../views/transaction/Edit.vue')
    }


  ]
})

export default router
