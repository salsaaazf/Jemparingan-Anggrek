import { createRouter, createWebHistory } from 'vue-router'

// ADMIN
import ScanRedTarget from '@/pages/Admin/ScanRedTarget.vue'
import ConfirmRedTarget from '@/pages/Admin/ConfirmRedTarget.vue'
import ScanWhiteTarget from '@/pages/Admin/ScanWhiteTarget.vue'
import ConfirmWhiteTarget from '@/pages/Admin/ConfirmWhiteTarget.vue'

const routes = [
  // Default root -> redirect to admin scan (adjust as needed)
  { path: '/', redirect: '/admin/scan/red' },
  // Red Target
  { path: '/admin/scan/red', name: 'ScanRedTarget', component: ScanRedTarget },
  { path: '/admin/confirm/red', name: 'ConfirmRedTarget', component: ConfirmRedTarget },

  // White Target
  { path: '/admin/scan/white', name: 'ScanWhiteTarget', component: ScanWhiteTarget },
  { path: '/admin/confirm/white', name: 'ConfirmWhiteTarget', component: ConfirmWhiteTarget },
  // Catch-all unknown paths -> redirect to root
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
