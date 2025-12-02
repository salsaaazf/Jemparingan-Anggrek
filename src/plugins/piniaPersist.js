export function piniaPersist({ store }) {
  // Hanya fokus pada store 'jemparingan'
  if (store.$id !== 'jemparingan') return; 

  const storageKey = `pinia_${store.$id}`; 

  // --- 1. MEMUAT DATA (LOAD) ---
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    try {
      store.$patch(JSON.parse(storedData));
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
      localStorage.removeItem(storageKey);
    }
  }

  // --- 2. MENYIMPAN DATA (SAVE) ---
  store.$subscribe((mutation, state) => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, { detached: true });
}