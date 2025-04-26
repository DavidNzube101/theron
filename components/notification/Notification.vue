<template>
  <div 
    :class="[
      'mb-2 p-4 rounded-lg shadow-lg max-w-md transition-all duration-300 flex items-start gap-3',
      notification.type === 'success' ? 'bg-green/90 text-slate-800' : 
      notification.type === 'error' ? 'bg-red-500 text-white' : 
      'bg-slate-700 text-white'
    ]"
  >
    <NotificationIcon :type="notification.type" class="mt-1" />
    <div class="flex-1">
      <div class="font-medium">{{ notification.title }}</div>
      <div class="text-sm opacity-90">{{ notification.message }}</div>
    </div>
    <button 
      @click="$emit('close')"
      class="text-current opacity-70 hover:opacity-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script setup>
import NotificationIcon from '~/components/icons/NotificationIcon.vue'

defineProps({
  notification: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])
</script>