<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const orders = ref([
        { id: 1, price: "€100", deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z', size: 'EU 37', shoeName: 'Evi' },
        { id: 2, price: "€200", deliveryStatus: 'Pending', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 3, price: "€300", deliveryStatus: 'Cancelled', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
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
            <input class="info-text" type="text" v-model="orders[0].price" />
        </div>
        <div class="info-style">
            <h2>Delivery Status:</h2>
            <select class="info-dropdown" v-model="orders[0].deliveryStatus">
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
            </select>
        </div>
        <div class="info-style">
            <h2>Payment Status:</h2>
            <select class="info-dropdown" v-model="orders[0].paymentStatus">
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
            </select>
        </div>
        <div class="info-style">
            <h2>Time of Order:</h2>
            <input class="info-text" type="text" v-model="orders[0].timeOfOrder" />
        </div>
        <div class="info-style">
            <h2>Size:</h2>
            <input class="info-text" type="text" v-model="orders[0].size" />
        </div>
        <div class="info-style">
            <h2>Shoe name:</h2>
            <input class="info-text" type="text" v-model="orders[0].shoeName" />
        </div>
        <div class="parts">
            <div class="parts-info" v-for="(part, index) in ['Outside_1', 'Outside_2', 'Outside_3', 'Sole_bottom', 'Sole_top', 'Inside', 'Laces']" :key="index">
                <h3>{{ part }}</h3>
                <input type="text" v-model="['Black', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown'][index % 9]" class="materials-colors part-text" />
                <input type="text" v-model="['Leather', 'Fabric', 'Rubber', 'Metallic'][index % 4]" class="materials-colors part-text" />
            </div>
        </div>
        <RouterLink to="/info"><button class="confirm-btn" @click="deleteOrder">Confirm</button></RouterLink>
    </main>
</template>

<style scoped>

input:hover{
    background-color: #e1ffda;
}

input:focus {
    outline: none;
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
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
}

.parts{
    margin-top: 20px;
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

.confirm-btn {
    border: 2px solid #69ff47;
    background-color: #69ff47;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 500;

    position: absolute;
    top: 100px;
    right: 20px;
}

</style>
