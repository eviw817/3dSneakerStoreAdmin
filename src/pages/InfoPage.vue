<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const orders = ref([
        { id: 1, price: "€100", deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 2, price: "€200", deliveryStatus: 'Pending', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 3, price: "€300", deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 4, price: "€400", deliveryStatus: 'Delivered', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 5, price: "€500", deliveryStatus: 'Pending', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        // Add more orders as needed
]);

function editOrder() {
    // Add your edit logic here
}

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
    <main class="info">
        <h1>Order 1</h1>
        <div class="info-style">
            <h2>Price:</h2>
            <p>€100</p>
        </div>
        <div class="info-style">
            <h2>Delivery Status:</h2>
            <p>Delivered</p>
        </div>
        <div class="info-style">
            <h2>Payment Status:</h2>
            <p>Paid</p>
        </div>
        <div class="info-style">
            <h2>Time of Order:</h2>
            <p>2023-10-01T10:00:00Z</p>
        </div>
        <div class="info-style">
            <h2>Size:</h2>
            <p>EU37</p>
        </div>
        <div class="info-style">
            <h2>Shoe name:</h2>
            <p>Evi</p>
        </div>
        <div class="parts">
            <div class="parts-info" v-for="(part, index) in ['Outside_1', 'Outside_2', 'Outside_3', 'Sole_bottom', 'Sole_top', 'Inside', 'Laces']" :key="index">
                <h3>{{ part }}</h3>
                <h3 class="materials-colors">{{ ['Black', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown'][index % 9] }}</h3>
                <h3 class="materials-colors">{{ ['Leather', 'Fabric', 'Rubber', 'Metallic'][index % 4] }}</h3>
            </div>
        </div>
        <div class="buttons">
            <button class="grey-btn" @click="editOrder">Edit</button>
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
}

h1{
    font-size: 3rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
}

h2{
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
}

.parts{
    display: flex;
    justify-content: space-between;
    width: 50%;
}

.parts-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 2px solid #69ff47;
    border-radius: 10px;
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
    border-radius: 10px;
}

.red-btn{
    border: 2px solid #ff0000;
    background-color: #ff0000;
    border-radius: 10px;
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
    border-radius: 12px;
    transition: all 0.3s ease;
    text-align: center;
}

.popup-container p{
    margin-top: 30px;
    margin-bottom: 20px;
}

</style>
