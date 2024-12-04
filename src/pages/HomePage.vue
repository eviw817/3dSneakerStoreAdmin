<script lang="js" setup>
import { ref } from 'vue'
import DefaultNav from '../components/DefaultNav.vue'
import Login from '../components/LogIn.vue'
import AdminHomepage from '../components/AdminHomepage.vue'

const isLoggedIn = ref(false)

function handleLogin() {
    isLoggedIn.value = true
}
</script>

<template>
    <DefaultNav />
    <Login v-if="!isLoggedIn" @login="handleLogin" />
    <AdminHomepage v-if="isLoggedIn" />
</template>

<style module>
body {
    font-family: 'Satoshi', sans-serif;
}
</style>