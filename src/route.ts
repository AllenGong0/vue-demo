import Father from './components/father.vue'
import Hello from './components/HelloWorld.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    { path: '/father', component: Father },
    { path: '/hello', component: Hello },
  ]
export  const router = createRouter({
  history: createWebHistory(),
  routes
})