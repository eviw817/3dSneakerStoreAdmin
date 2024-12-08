<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const order = ref({});
const user = ref({});
const route = useRoute()

const fetchOrderById = async () => {
    const token = localStorage.getItem('token');
    try {
        const orderResponse = await fetch(`${import.meta.env.VITE_API_URL}/orders/${route.params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        });
        const orderData = await orderResponse.json();
        order.value = orderData;

        const userResponse = await fetch(`${import.meta.env.VITE_API_URL}/users/${orderData.userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        });
        const userData = await userResponse.json();
        user.value = userData;

    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};

const updateOne = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/orders/${route.params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(order.value)
        });
        const data = await response.json();
        order.value = data;
    } catch (error) {
        console.error('Error updating order:', error);
    }
};

onMounted(() => {
    fetchOrderById();
});

async function confirmOrder() {
    await updateOne();
}

</script>

<template>
    <main class="info">
        <h1>{{ order.title }}</h1>
        <div class="info-style">
            <h2>Price:</h2>
            <input class="info-text" type="text" v-model="order.price" />
        </div>
        <div class="info-style">
            <h2>Delivery Status:</h2>
            <select class="info-dropdown" v-model="order.deliveryStatus">
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
            </select>
        </div>
        <div class="info-style">
            <h2>Payment Status:</h2>
            <select class="info-dropdown" v-model="order.paymentStatus">
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
            </select>
        </div>
        <div class="info-style">
            <h2>Time of Order:</h2>
            <input class="info-text" type="text" v-model="order.timeOfOrder" />
        </div>
        <div class="info-style">
            <h2>Size:</h2>
            <input class="info-text" type="text" v-model="order.size" />
        </div>
        <div class="info-style">
            <h2>Shoe name:</h2>
            <input class="info-text" type="text" v-model="order.shoeName" />
        </div>
        <div class="info-style">
            <h2>User:</h2>
            <input class="info-text" type="text" v-model="user.username" />
        </div>
        <div class="parts">
            <div class="parts-info" v-for="(part, key) in order.parts">
                <h3>{{ key }}</h3>
                <select v-model=" part.color " class="materials-colors part-text" >
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Orange">Orange</option>
                    <option value="Purple">Purple</option>
                    <option value="Brown">Brown</option>
                </select>
                <select v-model=" part.material " class="materials-colors part-text">
                    <option value="Leather">Leather</option>
                    <option value="Fabric">Fabric</option>
                    <option value="Rubber">Rubber</option>
                    <option value="Metallic">Metallic</option>
                </select>
            </div>
        </div>
        <RouterLink :to="`/info/${order._id}`"><button class="confirm-btn" @click="confirmOrder">Confirm</button></RouterLink>
    </main>
</template>

<style scoped>

input{
    height: 30px;
}

input:hover{
    background-color: #e1ffda;
}

input:focus {
    outline: none;
}

select{
    height: 30px;
}

.info{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: end;
}

.info-style{
    display: flex;
    justify-content: space-between;
    width: 50%;
}

.info-style p{
    display: flex;
    align-items: center;
}

.info-text{
    text-align: end;
}

.info-dropdown{
    text-align: center;
}

h1{
    font-size: 3rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
}

h2{
    font-size: 1.5rem;
    margin: 0px;
    font-weight: 500;
}

h3{
    font-size: 1.2rem;
    margin: 0px;
    margin-bottom: 10px;
    font-weight: 500;
}

.parts{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 70%;
}

.parts-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 2px solid #69ff47;
}

.parts-info h3{
    margin: 10px 0px;
    width: 100px;
    text-align: center;
}

.parts-info input{
    width: 80px;
    text-align: center;
}

.materials-colors{
    font-size: 1rem;
    font-weight: 300;
}

.buttons {
    position: absolute;
    top: 80px;
    right: 20px;
}

button {
    margin: 0px 10px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
}

.grey-btn{
    border: 2px solid #69ff47;
    background-color: #69ff47;
}

.red-btn{
    border: 2px solid #ff0000;
    background-color: #ff0000;
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

.confirm-btn {
    border: 2px solid #69ff47;
    background-color: #69ff47;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 500;

    position: absolute;
    top: 100px;
    right: 20px;
}

</style>
