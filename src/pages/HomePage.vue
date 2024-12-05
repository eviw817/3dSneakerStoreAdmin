<script setup>
import InfoPage from './InfoPage.vue';
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const sortText = ref('');
    const sortType = ref('time of order');
    const orders = ref([
        { id: 1, price: "€100", deliveryStatus: 'Delivered', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 2, price: "€200", deliveryStatus: 'Pending', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 3, price: "€300", deliveryStatus: 'Cancelled', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 4, price: "€400", deliveryStatus: 'Delivered', paymentStatus: 'Unpaid', timeOfOrder: '2023-10-01T10:00:00Z' },
        { id: 5, price: "€500", deliveryStatus: 'Pending', paymentStatus: 'Paid', timeOfOrder: '2023-10-01T10:00:00Z' },
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

    // json webtoken to make sure refresh doesn't happen
    
</script>

<template>
    <main class="orders">
        <RouterLink class="logout-btn" to="/" @click="logout">Logout</RouterLink>
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
                    <th>More info</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in sortOrders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.price }}</td>
                    <td class="delivery">{{ order.deliveryStatus }}</td>
                    <td class="payment">{{ order.paymentStatus }}</td>
                    <td>{{ order.timeOfOrder }}</td>
                    <td><RouterLink to="/info">
                        <span class="material-symbols-rounded info">info</span>
                    </RouterLink></td>
                </tr>
                
            </tbody>
        </table>
        
    </main>
</template>

<style scoped>

.logout-btn{
    position: absolute;
    top: 100px;
    left: 40px;
    margin-bottom: 20px;
    padding: 10px;
    font-weight: 500;
    border: 2px solid #ff0000;
    border-radius: 12px;
    background-color: #ff0000;
    text-decoration: none;
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

.material-symbols-rounded {
    font-family: 'Material Symbols Rounded';
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
}

</style>