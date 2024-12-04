<script setup>

</script>

<template>
    <div class="login">
        <h1>Log In</h1>
        <div class="email">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            <hr>
        </div>
        <div class="password">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
            <hr>
        </div>
        <a href="#"><div class="login-btn">
            <p>Log In</p>
        </div></a>
    </div>
</template>

<style scoped>

.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
}

h1{
    font-size: 4rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
}

.email, .password{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    color: #757575;
}

hr:hover{
    color: #000000;
    
}

input:focus + hr {
    border-color: #384ad3;
}

input{
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1em;
    padding: 8px 0px;
}

.login-btn{
    margin-top: 40px;
    font-size: em;
    font-weight: 500;

    padding: 12px 130px;
    background-color: #cccccc;
    color: #ffffff;
}

</style>