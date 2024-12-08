import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login from './pages/LogIn.vue'
import Homepage from './pages/HomePage.vue'
import Info from './pages/InfoPage.vue'
import EditInfo from './pages/EditInfoPage.vue'
import UserPage from './pages/UserPage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Homepage },	
    { path: '/info/:id', component: Info },
    { path: '/editInfo/:id', component: EditInfo },
    { path: '/user', component: UserPage }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.path === '/' && token) {
        next('/home');
    } else {
        next();
    }
});

createApp(App)
.use(router)
.mount('#app')
