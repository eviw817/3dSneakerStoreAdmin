<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
    if (username.value === 'admin@admin.com' && password.value === 'Admin') {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username.value, password: password.value })
        });

        const data = await response.json();
        console.log(data);

        if (data.data.token) {
            localStorage.setItem('token', data.data.token);
            router.push('/home');
        } else {
            console.error('Login failed: No token received');
        }
    } else {
        console.error('Invalid credentials');
    }
};

</script>

<template>
    <main class="login"> 
        <h1>Log In</h1>
        <div class="username">
            <label for="username">Username</label>
            <input v-model="username" type="username" id="username" name="username">
            <hr>
        </div>
        <div class="password">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" name="password">
            <hr>
        </div>
        <button class="login-btn" @click="handleLogin">Log In</button>
    </main>
</template>

<style scoped>

.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

h1{
    font-size: 4rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
}

.username, .password{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    color: #757575;
}

hr{
    width: 100%;
    border: 1px solid #757575;
}

hr:hover{
    color: #0d0d0d;
    
}

input:focus + hr {
    border-color: #69ff47;
}

input{
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1em;
    padding: 8px 0px;
}

.login-btn{
    border: none;
    margin-top: 40px;
    font-size: 1.1rem;
    font-weight: 600;

    padding: 12px 60px;
    background-color: #cccccc;
    color: #ffffff;
}

.login-btn:hover{
    background-color: #69ff47;
    color: #0d0d0d;
}

</style>