<template>
  <!-- Bungkus simple untuk layout 390px biar konsisten mobile -->
  <div class="app-root">
    <router-view />
  </div>
</template>

<script setup></script>

<style scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  font-family: 'Poppins', sans-serif;
}
</style>
