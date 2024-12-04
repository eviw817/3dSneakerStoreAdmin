<script lang="js" setup>
import DefaultNav from '../components/DefaultNav.vue'
import Login from './LogIn.vue'
import AdminHomepage from '../components/AdminHomepage.vue'
import InfoPage from './InfoPage.vue'

import { ref, onMounted } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: DefaultNav },
    { path: '/login', component: Login },
    { path: '/admin', component: AdminHomepage },
    { path: '/info', component: InfoPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

onMounted(() => {
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            router.push('/admin');
        });
    }
});

</script>

<template>
    <Login v-if="isLoggedIn" />
    <AdminHomepage v-if="isAdmin" />
    <InfoPage v-if="isInfo"/>
</template>

<style module>
body {
    font-family: 'Satoshi', sans-serif;
}

</style>