import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router.js'

createApp(App)
.mount('#app')
.use(router);