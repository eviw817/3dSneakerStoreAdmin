<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const orders = ref([]);
const route = useRoute()

const fetchOrderById = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/orders/${route.params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        });
        const data = await response.json();
        orders.value = data;
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};

onMounted(() => {
    fetchOrderById();
});

const showPopup = ref(false);

function deleteOrder() {
    showPopup.value = true;
}

function closePopup() {
    showPopup.value = false;
}

function confirmDelete() {
    // Add your delete logic here
    closePopup();
}

</script>

<template>
    <main class="info" v-for="order in orders" :key="order.id">

        <RouterLink to="/home" class="back-btn">
            <span class="material-symbols-rounded">arrow_back_ios</span>
        </RouterLink>

        <h1>{{ order.title }}</h1>
        <div class="info-style">
            <h2>Price:</h2>
            <p>€{{ order.price }}</p>
        </div>
        <div class="info-style">
            <h2>Delivery Status:</h2>
            <p>{{ order.deliveryStatus }}</p>
        </div>
        <div class="info-style">
            <h2>Payment Status:</h2>
            <p>{{ order.paymentStatus }}</p>
        </div>
        <div class="info-style">
            <h2>Time of Order:</h2>
            <p>{{ new Date(order.timeOfOrder).toLocaleDateString() }} {{ new Date(order.timeOfOrder).toLocaleTimeString() }}</p>
        </div>
        <div class="info-style">
            <h2>Size:</h2>
            <p>EU {{ order.size }}</p>
        </div>
        <div class="info-style">
            <h2>Shoe name:</h2>
            <p>{{ order.name }}</p>
        </div>
        <div class="parts">
            <div class="parts-info" v-for="(part, key) in order.parts">
                {{ console.log(key, part) }}
                <h3>{{ key }}</h3>
                <h4 class="materials-colors">{{ part.color }}</h4>
                <h4 class="materials-colors">{{ part.material }}</h4>
            </div>
        </div>
        <div class="buttons">
            <RouterLink :to="`/editInfo/${order._id}`"><button class="grey-btn">Edit</button></RouterLink>
            <button class="red-btn" @click="deleteOrder">Delete</button>
        </div>
        <Transition v-if="showPopup" class="popup">
            <div class="popup-mask">
                <div class="popup-wrapper">
                    <div class="popup-container">
                        <p>Delete the order?</p>
                        <button class="grey-btn" @click="closePopup">No</button>
                        <button class="red-btn" @click="confirmDelete">Yes</button>
                    </div>
                </div>
            </div>
        </Transition>
    </main>
</template>

<style scoped>

.material-symbols-rounded {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

.back-btn{
    position: absolute;
    top: 100px;
    left: 40px;
    color: #69ff47;
}


.info{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-style{
    display: flex;
    justify-content: space-between;
    width: 50%;
}

.info-style p{
    display: flex;
    align-items: center;
    margin: 0px;
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

.parts-info:nth-child(4) h3 {
    width: 108px;   
}

.parts-info h4{
    margin: 0px;
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
    margin: 20px 10px;
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

</style>
