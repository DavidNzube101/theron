<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useNotificationStore } from '~/stores/notification'
import { usePoolStore } from '~/stores/pool'


const notificationStore = useNotificationStore()
const poolStore = usePoolStore()


onMounted(() => {
  
  poolStore.initializePools()
  
  
  notificationStore.add({
    type: 'info',
    title: 'Welcome to Theron',
    message: 'Connect your wallet to get started with ladder strategies.'
  })
})
</script>