import { ref } from 'vue'
import { defineStore } from 'pinia'; 
import { KeyRound, Target } from 'lucide-vue-next';

export const useJemparinganStore = defineStore('jemparingan', {
  state: () => ({
    redHits: [{ nomorPemanah: 1, nama: 'Pemanah Uji Coba' },], 
    whiteHits: [],

    matchInfo: {
      round: '_',
      target: '_',
    }
  }),
  
  getters: {
    finalRecap: (state) => {
      const summary = {}; 

      // --- A. Proses Data Merah (redHits) ---
      state.redHits.forEach(hit => {
        const { nomorPemanah, nama } = hit;
        
        if (!summary[nomorPemanah]) {
          summary[nomorPemanah] = {
            nomorPemanah,
            nama,
            red: 0,
            white: 0,
            total: 0,
          };
        }
        // Tambahkan 3 poin merah
        summary[nomorPemanah].red += 3;
      });

      // --- B. Proses Data Putih (whiteHits) ---
      state.whiteHits.forEach(hit => {
        const { nomorPemanah, nama } = hit;

        if (!summary[nomorPemanah]) {
          summary[nomorPemanah] = {
            nomorPemanah,
            nama,
            red: 0,
            white: 0,
            total: 0,
          };
        }
        // Tambahkan 1 poin putih
        summary[nomorPemanah].white += 1;
      });
      
      // --- C. Hitung Total dan Konversi ke Array ---
      const finalArray = Object.values(summary).map(player => {
        player.total = player.red + player.white;
        return player;
      });

      // Urutkan berdasarkan total (opsional)
      return finalArray.sort((a, b) => b.total - a.total);
    },
  },

  actions: {
    setRedHits(dataArray) {
      this.redHits = dataArray;
    },
    setWhiteHits(dataArray) {
      this.whiteHits = dataArray;
    },
    resetScores() {
        this.redHits = [];
        this.whiteHits = [];
    },
    setMatchInfo(round, target) {
      this.matchInfo.round = round;
      this.matchInfo.target = target;
    }
  }
});