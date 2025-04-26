<template>
  <div class="fixed bottom-4 right-4 z-50">
    <TransitionGroup name="notification">
      <Notification 
        v-for="notification in notifications" 
        :key="notification.id"
        :notification="notification"
        @close="removeNotification(notification.id)"
      />
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useNotificationStore } from '~/stores/notification'
import Notification from '~/components/Notification.vue'

const notificationStore = useNotificationStore()
const notifications = computed(() => notificationStore.notifications)
const removeNotification = (id) => notificationStore.removeNotification(id)
</script>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>