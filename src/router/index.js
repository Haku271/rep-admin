import { createWebHistory, createRouter } from 'vue-router'



const routes = [
  { path: '/login', name: 'login', component: () => import('../views/login/index.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router