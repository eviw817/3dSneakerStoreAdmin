import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
    { path: '/', component: HomePage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


createApp(App)
.use(router)
.mount('#app')
