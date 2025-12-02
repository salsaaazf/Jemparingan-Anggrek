<script setup>
    import { onMounted } from 'vue';
    import { useArrowsStore } from '@/stores/arrows';
    import { useRouter } from 'vue-router'
    import Swal from 'sweetalert2' 

  
    const router = useRouter()
    const store = useArrowsStore();
    const goToScan = () => {
        store.target === 'red'?
            // Go to white target scan
            router.push('/admin/scan'):
            
            // Go to dashboard if all confirmed
            router.push('/admin/dashboard')  
    };
    
    onMounted(() => { store.init()})

  const handleConfirm= () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // store.confirm()
        Swal.fire({
            icon: 'success',
            title: 'Confirmed!',
            text: `Your ${store.target} target has been confirmed.`,
            timer: 2000,
            showConfirmButton: false
        }),
            goToScan()
            store.switchTarget()
      }
    })
  }
    
</script>

<template>
    <div class="screen">

        <div class="page-title"> {{ store.target.toUpperCase() }} Target Confirmation</div>
        
        <header class="app-header">
            <div class="user-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Admin</span>
            </div>
        </header>
        
        <main class="main-content">
            <h2>{{store.target.toUpperCase()}} Target</h2>
            
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
                <ul class="list">
                    <li v-for="arrow in store.arrows[store.target]" :key="arrow.id" class="items">
                        <td>{{ arrow.id }}</td>
                        <td>{{ arrow.player }}</td>
                        <td>
                            <button @click="store.remove(arrow.id)">delete</button>
                        </td>
                    </li>
                </ul>
            </div>
            
            <div style="padding: 2px 0;">
                <h4>Total arrows: {{ store.count }}</h4>
            </div>
            <button class="rescan-button" @click="goToScan">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <path d="M20.49 15.01a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
                <span>Rescan</span>
            </button>
        </main>
        
        <footer class="app-footer" >
            <button class="confirm-button" @click="handleConfirm()">Confirm</button>
        </footer>
    </div>
    </template>

<style scoped>* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.screen {
    width: 390px;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
}

body {
    font-family: 'Roboto', 'Arial', sans-serif;
    background-color: #333; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
}

.mobile-container {
    width: 100%;
    max-width: 390px; 
    height: 844px; 
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.page-title {
    background: #f0f0f0;
    text-align: center;
    padding: 15px 10px 10px 10px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    border-bottom: 1px solid #ddd;
}

.app-header {
    background-color: #4A6A60; 
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-info {
    display: flex;
    align-items: center;
    font-weight: 500;
}

.user-info svg {
    margin-right: 10px;
}

.list {
    max-height: calc(100vh - 480px);
    overflow-y: scroll; 
}

.items {
  display: grid;
  grid-template-columns: 2fr 4fr 3fr;
}

.menu-icon svg {
    width: 28px;
    height: 28px;
}

.main-content {
    flex-grow: 1; 
    padding: 24px 24px 32px;
    background: #F9F9F9;
}

.main-content h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 20px;
}

.table-container {
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.table-header {
  display: grid;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

thead th:first-child {
    border-top-left-radius: 8px;
}

thead th:last-child {
    border-top-right-radius: 8px;
}

th, td {
    padding: 14px;
    text-align: center;
    border-bottom: 1px solid #E0E0E0;
    font-size: 0.9rem;
}

thead {
    background-color: #4A6A60; 
    color: white;
    font-weight: 500;
}

thead th {
    border-bottom: none;
}

tbody tr {
    background: #fff;
}

tbody tr:last-child td {
    border-bottom: none; 
}

tbody td:first-child {
    font-weight: 500;
    color: #333;
}

.rescan-button {
    background-color: #4A6A60;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.3s ease;
}

.rescan-button:hover {
    background-color: #3D5B50; 
}

.rescan-button svg {
    width: 16px;
    height: 16px;
}

.app-footer {
    /* position: fixed; */
    bottom: 0;
    left: 50%;
    /* transform: translateX(-50%); */
    width: 100%;
    background: #ffffff;
    padding: 20px;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
    z-index: 50;
}

.confirm-button {
    width: 100%;
    padding: 16px;
    background-color: #3a5a40; 
    color: white;
    border: none;
    border-radius: 30px; 
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.confirm-button:hover {
    background-color: #2c4431;
}
</style>
