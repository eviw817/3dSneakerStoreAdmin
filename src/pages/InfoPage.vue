<script setup>
import { ref, onMounted } from 'vue';

const orders = ref([
        { id: 1, price: 100, deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 2, price: 200, deliveryStatus: 'Pending', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 3, price: 300, deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 4, price: 400, deliveryStatus: 'Delivered', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 5, price: 500, deliveryStatus: 'Pending', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        // Add more orders as needed
]);

</script>

<template>
    <h1 v-for="order in filteredOrders" :key="order.id">{{ order.id }}</h1>
</template>

<style scoped>

</style>
