<script setup>

import { ref, computed } from 'vue';

const filterText = ref('');
    const filterType = ref('price');
    const orders = ref([
        { id: 1, price: 100, deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 2, price: 200, deliveryStatus: 'Pending', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 3, price: 300, deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 4, price: 400, deliveryStatus: 'Delivered', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 5, price: 500, deliveryStatus: 'Pending', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        // Add more orders as needed
    ]);

    const filteredOrders = computed(() => {
        return orders.value.filter(order => {
            if (filterType.value === 'price') {
                return order.price.toString().includes(filterText.value);
            } else if (filterType.value === 'delivery status') {
                return order.deliveryStatus.toLowerCase().includes(filterText.value.toLowerCase());
            } else if (filterType.value === 'payment status') {
                return order.paymentStatus.toLowerCase().includes(filterText.value.toLowerCase());
            }
            return true;
        });
    });

    
</script>

<template>
    <div class="orders">
        <h1>Orders</h1>
        <select v-model="filterType">
            <option value="price">Price</option>
            <option value="delivery status">Delivery Status</option>
            <option value="payment status">Payment Status</option>
        </select>
        <input v-model="filterText" placeholder="Filter orders" />

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Delivery Status</th>
                    <th>Payment Status</th>
                    <th>Time Of Order</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in filteredOrders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.name }}</td>
                    <td>{{ order.price }}</td>
                    <td>{{ order.deliveryStatus }}</td>
                    <td>{{ order.paymentStatus }}</td>
                    <td>{{ order.timeOfOrder }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

.orders{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

h1{
    font-size: 4rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 800;
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
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
    text-align: left;
}

</style>