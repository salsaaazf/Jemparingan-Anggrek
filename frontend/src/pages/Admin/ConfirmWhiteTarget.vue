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

    <!-- MAIN CONTENT -->
    <main class="content">
      <h1 class="page-title">White Target</h1>

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
              <td>
                <span class="status-pill">Berhasil</span>
              </td>
              <td>{{ row.time }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- BUTTONS -->
      <div class="button-row">
        <button class="rescan-btn" @click="goRescan">⟲ Rescan</button>
      </div>

      <div class="confirm-wrapper">
        <button class="confirm-btn" @click="confirmWhite">Confirm</button>
      </div>

    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const rows = computed(() => [
  { id: 'P-072', name: 'Alex Potts', time: '14.38' },
  { id: 'P-074', name: 'Alex Potts', time: '14.38' },
  { id: 'P-075', name: 'Alex Potts', time: '14.39' },
  { id: 'P-077', name: 'Alex Potts', time: '14.39' },
  { id: 'P-0710', name: 'Alex Potts', time: '14.40' }
]);

const goRescan = () => {
  router.push("/admin/scan/white");
};

const confirmWhite = () => {
  alert("Skor White Target dikonfirmasi (dummy)");
};
</script>

<style scoped>
/* SCREEN */
.screen {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: system-ui, sans-serif;
}

/* TOP BAR */
.topbar {
  background-color: #25564a;
  display: flex;
  justify-content: center;
}

.topbar-inner {
  width: 100%;
  max-width: 390px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 28px;
  height: 28px;
  background: #eaeaea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-btn {
  width: 22px;
  height: 16px;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-btn span {
  height: 3px;
  background: white;
  border-radius: 2px;
}

/* CONTENT */
.content {
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  padding: 10px;
}

.page-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
  margin-left: 8px;
}

/* TABLE */
.table-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.score-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.score-table thead {
  background: #25564a;
  color: white;
}

.score-table th,
.score-table td {
  padding: 12px 8px;
  border-bottom: 1px solid #e5e7eb;
}

.score-table th:nth-child(1) { width: 20%; text-align: left; }
.score-table th:nth-child(2) { width: 30%; text-align: left; }
.score-table th:nth-child(3) { text-align: center; }
.score-table th:nth-child(4) { text-align: center; }

/* STATUS */
.status-pill {
  background: #d6f5d6;
  color: #1f7a36;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
}

/* BUTTONS */
.button-row {
  margin-top: 18px;
  display: flex;
  justify-content: flex-start;
  padding-left: 6px;
}

.rescan-btn {
  background: #25564a;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 18px;
  font-size: 14px;
}

/* CONFIRM BUTTON */
.confirm-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.confirm-btn {
  width: 85%;
  background: #25564a;
  color: white;
  border: none;
  padding: 14px 0;
  font-size: 17px;
  font-weight: 600;
  border-radius: 22px;
}
</style>
