import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router.js'
import { createPinia } from 'pinia'; // 피니아 가져오기 ㅎㅎ

createApp(App)
.use(router)
.use(createPinia()) // 피니아 등록 ㅎㅎ
.mount('#app');