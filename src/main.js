import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import { router}  from './route.js'
import 'element-plus/lib/theme-chalk/index.css';
import './index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')



