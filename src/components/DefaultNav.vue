<script setup>

</script>

<template>
    <nav class="bg-main-light">
        <div class="logo">
            <img src="/images/SWEAR_Logo.png" alt="logo">
        </div>
        <div class="menu">
            <p>Shop</p>
            <p>About</p>
            <p>Vault</p>
            <p>Journal</p>
            <p>Sustainability</p>
        </div>
        <div class="settings">
            <span class="material-symbols-rounded search">search</span>
            <span class="material-symbols-rounded account">account_circle</span>
            <span class="material-symbols-rounded cart">shopping_cart</span>
        </div>
    </nav>
</template>

<style scoped>

nav{
    background-color: #0d0d0d;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-symbols-rounded {
    font-family: 'Material Symbols Rounded';
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
}

.logo{
    display: flex;
    justify-content: center;
}

img {
    width: 80%;
    height: auto;
    padding: 20px;
}

.menu{
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    font-size: 16px;
    color: #fdfdfd;

    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}

.settings{
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: space-around;
    font-size: 40px;
    color: #fdfdfd;
}
</style>