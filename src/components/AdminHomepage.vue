<script setup>
import InfoPage from '../pages/InfoPage.vue';
import { ref, computed } from 'vue';

const sortText = ref('');
    const sortType = ref('time of order');
    const orders = ref([
        { id: 1, price: 100, deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 2, price: 200, deliveryStatus: 'Pending', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 3, price: 300, deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 4, price: 400, deliveryStatus: 'Delivered', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 5, price: 500, deliveryStatus: 'Pending', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        // Add more orders as needed
    ]);

    const sortOrders = computed(() => {
        return orders.value.slice().sort((a, b) => {
            if (sortType.value === 'delivery status') {
                if (a.deliveryStatus === 'Pending' && b.deliveryStatus !== 'Pending') return -1;
                if (a.deliveryStatus !== 'Pending' && b.deliveryStatus === 'Pending') return 1;
                return 0;
            } else if (sortType.value === 'payment status') {
                if (a.paymentStatus === 'Unpaid' && b.paymentStatus !== 'Unpaid') return -1;
                if (a.paymentStatus !== 'Unpaid' && b.paymentStatus === 'Unpaid') return 1;
                return 0;
            }
            return 0;
        });
    });

    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            isAdmin.value = false;
            isLoggedIn.value = false;
            isInfo.value = true;
        });
    });

    console.log(tableRows);

    // json webtoken to make sure refresh doesn't happen
    
</script>

<template>
    <div class="orders">
        <h1>Orders</h1>
        <div class="sorting">
            <h2>Sort on:</h2>
            <select v-model="sortType">
                <option value="delivery status">Delivery Status</option>
                <option value="payment status">Payment Status</option>
                <option value="time of order">Time of order</option>
            </select>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Price</th>
                    <th>Delivery status</th>
                    <th>Payment status</th>
                    <th>Time of order</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in sortOrders" :key="order.id">
                    <td>{{ order.id }}</td>
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
}

th {
    background-color: #69ff47;
    text-align: left;
}

tr:hover{
    background-color: #e1ffda;
}

</style>