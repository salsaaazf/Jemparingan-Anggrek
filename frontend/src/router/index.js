import { createRouter, createWebHistory } from 'vue-router'

// ADMIN
import ConfirmTarget from '@/pages/Admin/ConfirmTarget.vue';
import ScanTarget from '@/pages/Admin/ScanTarget.vue'

const routes = [
  // Default root -> redirect to admin scan (adjust as needed)
  { path: '/', redirect: '/admin/scan' },
  // Scan page
  { path: '/admin/scan', name: 'ScanTarget', component: ScanTarget },

  // Confirm page
  { path: '/admin/confirm', name: 'ConfirmTarget', component: ConfirmTarget },

  // Catch-all unknown paths -> redirect to root
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
