// stores/notification.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([])
  
  function add(notification) {
    const id = Date.now().toString()
    notifications.value.push({
      id,
      type: notification.type || 'info',
      title: notification.title || '',
      message: notification.message || '',
      timeout: notification.timeout || 5000
    })
    
    // Auto-remove after timeout
    setTimeout(() => {
      removeNotification(id)
    }, notification.timeout || 5000)
  }
  
  function removeNotification(id) {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }
  
  return {
    notifications,
    add,
    removeNotification
  }
})