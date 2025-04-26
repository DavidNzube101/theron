<template>
  <aside class="w-64 bg-white shadow-md hidden md:block">
    <div class="p-4 border-b border-slate-200">
      <div class="flex items-center gap-2">
        <img src="/placeholder.svg?height=32&width=32" alt="Nibbles" class="h-8 w-8" />
        <h2 class="font-bold text-lg">Theron</h2>
      </div>
    </div>
    <nav class="p-4">
      <ul class="space-y-1">
        <SidebarLink 
          icon="dashboard" 
          text="Dashboard" 
          :active="activeTab === 'dashboard'"
          @click="$emit('setTab', 'dashboard')"
        />
        <SidebarLink 
          icon="strategy" 
          text="Strategies" 
          :active="activeTab === 'strategies'"
          @click="$emit('setTab', 'strategies')"
        />
        <SidebarLink 
          icon="activity" 
          text="Activity" 
          :active="activeTab === 'activity'"
          @click="$emit('setTab', 'activity')"
        />
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import SidebarLink from '~/components/dashboard/SidebarLink.vue'

defineProps({
  activeTab: {
    type: String,
    required: true
  },
  mobileMenuOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['setTab', 'toggleMenu'])
</script>