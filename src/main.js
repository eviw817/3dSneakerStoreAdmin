import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login from './pages/LogIn.vue'
import Homepage from './pages/HomePage.vue'
import Info from './pages/InfoPage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Homepage },	
    { path: '/info', component: Info }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


createApp(App)
.use(router)
.mount('#app')
