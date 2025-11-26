<template>
  <div class="screen">
    <!-- TOP BAR -->
    <header class="topbar">
      <div class="topbar-inner">
        <div class="topbar-left">
          <div class="avatar">
            <span class="avatar-icon">👤</span>
          </div>
          <span class="topbar-name">Admin</span>
        </div>

        <button class="menu-btn" type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- MAIN -->
    <main class="content">
      <h1 class="page-title">Red Target</h1>

      <!-- TABLE -->
      <section class="table-card">
        <table class="score-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Waktu Scan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.id">
              <td>{{ row.id }}</td>
              <td>{{ row.name }}</td>
              <td class="status-cell">
                <span class="status-pill">Berhasil</span>
              </td>
              <td>{{ row.time }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- BUTTON WRAPPER -->
      <div class="button-container">
        <button class="rescan-btn" type="button" @click="goToScan"> ⟲ Rescan </button>
        <button class="confirm-btn" type="button" @click="confirmScores"> Confirm </button>
      </div>

    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const rows = computed(() => [
  { id: 'P-071', name: 'Alex Potts', time: '14.35' },
  { id: 'P-073', name: 'Alex Potts', time: '14.35' },
  { id: 'P-076', name: 'Alex Potts', time: '14.36' },
  { id: 'P-078', name: 'Alex Potts', time: '14.36' },
  { id: 'P-079', name: 'Alex Potts', time: '14.36' }
])

const goToScan = () => router.push('/admin/scan/red')
const confirmScores = () => {
  alert('Skor Red Target dikonfirmasi (dummy).')

  // setelah user klik OK pada alert, redirect ke scan white target
  router.push('/admin/scan/white')
}
</script>

<style scoped>
/* ===== LAYOUT ===== */
.screen {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
}

/* ===== TOPBAR ===== */
.topbar {
  width: 100%;
  background-color: #25564a;
  display: flex;
  justify-content: center;
}

.topbar-inner {
  width: 100%;
  max-width: 390px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 16px;
  background: none;
  border: none;
}

.menu-btn span {
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 2px;
}

/* ===== CONTENT ===== */
.content {
  width: 100%;
  max-width: 390px;
  padding: 5px;
  margin: 0 auto;
}

.page-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
  color: #1f2933;
  margin-left: 10px;
}

/* ===== TABLE ===== */
.table-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 10px;
}

.score-table thead {
  background: #25564a;
  color: white;
}

.score-table th,
.score-table td {
  padding: 7px;
  border-bottom: 1px solid #e5e7eb;
  padding: 6px 8px;
  padding-top: 14px; /* Ubah nilai ini */
  padding-bottom: 14px; /* Ubah nilai ini */
  font-size: 13px;
}

.score-table th:nth-child(1),
.score-table td:nth-child(1) {
  width: 22%;
  text-align: left;
}

.score-table th:nth-child(2),
.score-table td:nth-child(2) {
  width: 30%;
  text-align: left;
}

.score-table th:nth-child(3),
.score-table td:nth-child(3),
.score-table th:nth-child(4),
.score-table td:nth-child(4) {
  text-align: center;
}

/* STATUS PILL */
.status-pill {
  background: #d6f5d6;
  color: #1f7a36;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
}

/* ===== BUTTON GROUP ===== */
.button-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  padding: 0 6px;
}

/* RESCAN */
.rescan-btn {
  background: #25564a;
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 18px;
  font-size: 14px;
}

/* CONFIRM */
.confirm-btn {
  background: #25564a;
  color: white;
  border: none;
  padding: 10px 26px;
  border-radius: 18px;
  font-size: 14px;
}
</style>
