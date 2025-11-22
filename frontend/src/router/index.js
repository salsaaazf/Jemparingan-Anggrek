import { createRouter, createWebHistory } from 'vue-router'
import ConfirmRedTarget from '../pages/Admin/ConfirmRedTarget.vue'
import ConfirmWhiteTarget from '../pages/Admin/ConfirmWhiteTarget.vue'

const routes = [
  {
    path: '/admin/confirm/red',
    name: 'RedConfirm',
    component: ConfirmRedTarget,
  },
  {
    path: '/admin/confirm/white',
    name: 'WhiteConfirm',
    component: ConfirmWhiteTarget,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
