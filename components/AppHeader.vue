<template>
  <header class="border-b border-green/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img src="/placeholder.svg?height=40&width=40" alt="Nibbles" class="h-10 w-10" />
        <h1 class="text-2xl font-bold text-slate-800">Theron</h1>
      </div>
      
      <!-- Wallet connect button (only shown on dashboard) -->
      <div v-if="route.path === '/dashboard'" class="wallet-connect">
        <WalletComponent />
      </div>
      
      <!-- Navigation links (only shown on landing) -->
      <div v-else class="flex items-center gap-4">
        <a href="#features" class="text-slate-700 hover:text-slate-900">Features</a>
        <a href="#about" class="text-slate-700 hover:text-slate-900">About</a>
        <NuxtLink to="/dashboard" class="bg-green hover:bg-green/90 text-slate-800 font-medium py-2 px-4 rounded-lg transition-colors">
          Start
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import WalletComponent from '~/components/WalletComponent.vue'

const route = useRoute()
</script>