<template>
  <div class="confirm-container">
    <div class="confirm-header">
      <h2 class="confirm-title">White Target - Round {{ store.currentRound }}</h2>
    </div>

    <button class="rescan-btn" @click="onRescan">
      🔁 Rescan
    </button>

    <table class="confirm-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Pocan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in store.tempScannedArrows" :key="row.rank">
          <td>{{ row.rank }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.pocan }}</td>
        </tr>
      </tbody>
    </table>

    <button class="confirm-btn" @click="onConfirm">
      Confirm
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScoreStore } from '../../stores/score'

const store = useScoreStore()

onMounted(() => {
  store.setBandul('white')

  if (store.tempScannedArrows.length === 0) {
    store.updateTempScannedArrows([
      { rank: 1, name: 'Dedi Sutisna', pocan: 'P4' },
      { rank: 2, name: 'Eka Lestari', pocan: 'P3' },
    ])
  }
})

const onConfirm = () => {
  store.confirmCurrentBandulScores()
  alert('Bandul putih dikonfirmasi!')
}

const onRescan = () => {
  alert('Balik ke halaman scan putih (nanti disambungin).')
}
</script>
