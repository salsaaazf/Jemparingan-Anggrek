<script setup>
import { useJemparinganStore } from '../stores/jemparinganStore.js';
import { useAuthStore } from '@/stores/authStore.js';
import { ArrowLeft } from 'lucide-vue-next';

const jemparinganStore = useJemparinganStore();
const authStore = useAuthStore();

const goBack = () => {
  authStore.role = 'committee';
};
</script>

<template>
<div class="container">
    <div class="header-nav">
      <div class="header-title-group">
        <h2 class="page-title">Display Data</h2>
        <p class="text"> {{ authStore.user?.name || 'Committee' }} in duties</p>
      </div>
      
      <button @click="goBack" class="btn-back">
        <ArrowLeft size="18" /> Back to Input Page
      </button>
    </div>

    <h1>Score Total</h1>
    <div>
      <p>Displaying data for <strong> Round: {{ jemparinganStore.matchInfo.round }} - Target: {{ jemparinganStore.matchInfo.target }}</strong></p>

      <table class="table-rekap">
        <thead>
           <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Red</th>
            <th>White</th>
            <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in jemparinganStore.finalRecap" :key="player.nomorPemanah">
            <td>{{ index + 1 }}</td> 
            <td>{{ player.nama }}</td>
            <td>{{ player.red }}</td>
            <td>{{ player.white }}</td>
            <td>{{ player.total }}</td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');  
* { font-family: 'Popins', sans-serif;}

.container {
  padding: 20px;
  max-width: 480px; 
  margin: 0 auto;
  background-color: #F5F5F5;
  min-height: 100vh;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  margin-bottom: 20px;
}

.header-title-group{
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0;
  line-height: 1.2;
}

.btn-back {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #3B5D50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  transition: background 0.3s;
}

.btn-back:hover {
  background-color: #2E4B43;
}

h1 {
  color: #000000;
  text-align: left;
  font-size: 20pt;
  margin-top: 20px;
  font-family: poppins;
}

p {
  font-size: 12pt;
  font-family: poppins;
  text-align: bottom;
}

table.table-rekap {
  width: 100%;
  border-radius: 15px;
  border-collapse: separate;
  border-spacing: 0;
  font-family: poppins;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
}


thead th {
  background-color: #355F56;
  padding: 10px;
  text-align: left;
  color: #f5f5f5;
  text-align: center;
}

table td, table th {
  padding: 10px;
  border: 1px solid #ddd;
}

thead th {
  border: 1px solid #D9D9D9;
}

tbody tr:last-child td {
  border-bottom: 1px solid #D9D9D9;
}

thead th:first-child {
  border-top-left-radius: 15px;
}

thead th:last-child {
  border-top-right-radius: 15px;
}

tbody tr:last-child td:first-child {
  border-bottom-left-radius: 15px;
}

tbody tr:last-child td:last-child {
  border-bottom-right-radius: 15px;
}
</style>