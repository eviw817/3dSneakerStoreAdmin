<script setup>
import InfoPage from './InfoPage.vue';
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

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

    const router = useRouter();
    const logout = () => {
        // Clear the token (assuming it's stored in localStorage)
        localStorage.removeItem('token');
        // Redirect to the login page
        router.push('/');
    };


</script>

<template>
    <main class="orders">
        <RouterLink class="logout-btn" to="/" @click="logout">Logout</RouterLink>
        <div class="page-title">
            <h1 class="usingTitle">Orders</h1>
            <h1> | </h1>
            <RouterLink class="router-link" to="/user"><h1>Users</h1></RouterLink>
        </div>
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
                    <td>{{ new Date(order.timeOfOrder).toLocaleDateString() }}</td>
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

td span{
    color: #69ff47;
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