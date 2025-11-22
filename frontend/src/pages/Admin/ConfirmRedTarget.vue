<template>
  <div class="confirm-page">
    <!-- TOP APP BAR -->
    <header class="app-header">
      <div class="app-header-left">
        <div class="app-header-icon">
          <!-- bisa ganti pakai svg/icon nanti -->
          👤
        </div>
        <span class="app-header-title">Admin</span>
      </div>

      <button class="app-header-menu" type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>

    <!-- MAIN CONTENT -->
    <main class="confirm-container">
      <!-- Title -->
      <h1 class="page-title">Red Target</h1>

      <!-- TABLE CARD -->
      <div class="table-card">
        <table class="score-table">
          <thead>
            <tr>
              <th class="col-rank">Rank</th>
              <th class="col-name">Name</th>
              <th class="col-arrow">Panah</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in store.tempScannedArrows"
              :key="row.id"
            >
              <td class="col-rank">#{{ row.rank }}</td>
              <td class="col-name">{{ row.name }}</td>
              <td class="col-arrow">{{ row.arrow }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- RESCAN BUTTON -->
      <button class="rescan-btn" type="button" @click="onRescan">
        <span class="rescan-icon">↻</span>
        <span>Rescan</span>
      </button>

      <!-- CONFIRM BUTTON -->
      <button class="confirm-btn" type="button" @click="onConfirm">
        Confirm
      </button>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScoreStore } from '../../stores/score'

const store = useScoreStore()

onMounted(() => {
  store.setBandul('red')

  // dummy data tabel, nanti bisa diganti data asli dari scan
  if (store.tempScannedArrows.length === 0) {
    store.updateTempScannedArrows([
      { id: 1, rank: 1, name: 'Alex Potts', arrow: 'P01' },
      { id: 2, rank: 2, name: 'Alex Potts', arrow: 'P04' },
      { id: 3, rank: 3, name: 'John Doe', arrow: 'P02' },
      { id: 4, rank: 4, name: 'Alvaro Oliver', arrow: 'P05' },
      { id: 5, rank: 5, name: 'Louis Barton', arrow: 'P06' },
      { id: 6, rank: 6, name: 'Romeo Ashley', arrow: 'P03' },
      { id: 7, rank: 7, name: 'Bodie Hoover', arrow: 'P01' },
      { id: 8, rank: 8, name: 'Vincent Hurst', arrow: 'P03' },
      { id: 9, rank: 9, name: 'Thiago Wade', arrow: 'P02' },
      { id: 10, rank: 10, name: 'John Lamb', arrow: 'P04' },
    ])
  }
})

const onConfirm = () => {
  store.confirmCurrentBandulScores()
  alert('Bandul merah dikonfirmasi!')
}

const onRescan = () => {
  alert('Balik ke halaman scan bandul merah (nanti dihubungkan).')
}
</script>
