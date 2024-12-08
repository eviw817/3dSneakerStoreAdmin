<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleLogin = async () => {
    try {
        error.value = '';
        const call = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username.value, password: password.value })
        });
        const userData = await call.json();
        
        if (userData.data.user.isAdmin) {
            localStorage.setItem('token', userData.data.token);
            console.log(userData.data.token);
            router.push('/home');
        } else {
            error.value = 'Access denied: User is not an admin';
        }

    } catch (e) {
        error.value = 'Something went wrong. Please try again';
        console.error(e);
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
        <span v-if="error !== '' ">{{ error }}</span>
        <button class="login-btn" @click="handleLogin">Log In</button>
    </main>
</template>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

h1 {
    font-size: 4rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
}

.username,
.password {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    color: #757575;
}

hr {
    width: 100%;
    border: 1px solid #757575;
}

hr:hover {
    color: #0d0d0d;

}

input:focus+hr {
    border-color: #69ff47;
}

input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1em;
    padding: 8px 0px;
}

.login-btn {
    border: none;
    margin-top: 40px;
    font-size: 1.1rem;
    font-weight: 600;

    padding: 12px 60px;
    background-color: #cccccc;
    color: #ffffff;
}

.login-btn:hover {
    background-color: #69ff47;
    color: #0d0d0d;
}
</style>