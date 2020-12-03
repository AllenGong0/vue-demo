import Father from './components/father.vue'
import Hello from './components/HelloWorld.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Father },
    { path: '/hello', component: Hello },
  ]
export  const router = createRouter({
  history: createWebHashHistory(),
  routes
})