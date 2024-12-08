<script setup>
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import { onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        users.value = data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});

const router = useRouter();
const logout = () => {
    // Clear the token (assuming it's stored in localStorage)
    localStorage.removeItem('token');
    // Redirect to the login page
    router.push('/');
};

const showPopup = ref(false);
const newPassword = ref('');

const changeToNewPassword = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${selectedUserId.value}/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: newPassword.value }),
            
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error changing password:', errorData.message);
            return;
        }
        console.log('Password changed successfully');
        showPopup.value = false;
    } catch (error) {
        console.error('Error changing password:', error);
    }
};



const selectedUserId = ref(null);

const popupButton = (userId) => {
    selectedUserId.value = userId;
    showPopup.value = true;
};

const closePopup = () => {
    showPopup.value = false;
};

</script>

<template>
    <main class="orders">
        <RouterLink class="logout-btn" to="/" @click="logout">Logout</RouterLink>
        <div class="page-title">
            <RouterLink class="router-link" to="/home"><h1>Orders</h1></RouterLink>
            <h1> | </h1>
            <h1 class="usingTitle">Users</h1>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Change Password</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user._id }}</td>
                    <td>{{ user.username }}</td>
                    <td><button @click="popupButton(user._id)"><span class="material-symbols-rounded edit">edit</span></button></td>
                </tr>
            </tbody>
        </table>
        <Transition v-if="showPopup" class="popup">
            <div class="popup-mask">
                <div class="popup-wrapper">
                    <div class="popup-container">
                        <span @click="closePopup" class="close">&times;</span>
                        <p>Change password</p>
                        <div class="change-password">
                            <input type="password" v-model="newPassword" placeholder="Enter new password" />
                            <button @click="changeToNewPassword">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </main>
</template>

<style scoped>

.material-symbols-rounded {
    font-family: 'Material Symbols Rounded';
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
}

.logout-btn{
    position: absolute;
    top: 100px;
    left: 40px;
    margin-bottom: 20px;
    padding: 10px;
    font-weight: 500;
    border: 2px solid #ff0000;
    background-color: #ff0000;
    color: #0d0d0d;
    text-decoration: none;
}

.page-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.page-title h1:nth-child(2){ 
    font-size: 3rem;
    margin: 0px 20px;
    font-weight: 500;
}

.router-link{
    text-decoration: none;
    color: #0d0d0d;
    font-size: 3rem;
    font-weight: 500;
}

.usingTitle{
    color: #69ff47;
}

.orders{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    font-size: 4rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
}

.sorting{
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 152px;
}

select{
    border: none;
    outline: none;   
}

option:hover {
    background-color: #69ff47;
}

table {
    margin: 20px;
    border-collapse: collapse;
    width: 80%;
}

th, td {
    border: 1px solid #69ff47;
    padding: 8px;
    text-align: center;
}

th {
    background-color: #69ff47;
}

tr:hover{
    background-color: #e1ffda;
}

td button{
    background: none;
    border: none;
    cursor: pointer;
}

td span{
    color: #69ff47;
}

.close{
    position: absolute;
    top: 210px;
    left: 550px;
    cursor: pointer;
}

.change-password{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.change-password input {
    margin: 4px;
}

.change-password button{
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    font-weight: 500;
    border: 2px solid #0d0d0d;
    background-color: #0d0d0d;
    color: #fdfdfd;
    text-decoration: none;
}



.popup-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.popup-wrapper{
    display: table-cell;
    vertical-align: middle;
}

.popup-container{
    height: 200px;
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fdfdfd;
    transition: all 0.3s ease;
    text-align: center;
}

.popup-container p{
    margin-top: 30px;
    margin-bottom: 20px;
}

</style>