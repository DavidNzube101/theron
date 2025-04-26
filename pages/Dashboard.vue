<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <DashboardSidebar 
      :active-tab="dashboardTab" 
      @set-tab="setDashboardTab"
      @toggle-menu="toggleMobileMenu"
      :mobile-menu-open="mobileMenuOpen"
    />

    <!-- Main content -->
    <main class="flex-1 p-6 overflow-auto">
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold">{{ dashboardTabTitle }}</h1>
        <button 
          class="md:hidden bg-green hover:bg-green/90 text-slate-800 font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
          @click="toggleMobileMenu"
        >
          <span>Menu</span>
        </button>
      </div>

      <!-- Mobile menu -->
      <MobileMenu 
        v-if="mobileMenuOpen" 
        :active-tab="dashboardTab"
        @set-tab="(tab) => { setDashboardTab(tab); toggleMobileMenu(); }"
      />

      <!-- Dashboard Tab Content -->
      <div v-if="dashboardTab === 'dashboard'">
        <PoolFinder />
        <StrategyBuilder />
      </div>

      <!-- Strategies Tab Content -->
      <div v-if="dashboardTab === 'strategies'">
        <PositionMonitor />
      </div>

      <!-- Activity Tab Content -->
      <div v-if="dashboardTab === 'activity'">
        <ActivityLog />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DashboardSidebar from '~/components/dashboard/DashboardSidebar.vue'
import MobileMenu from '~/components/dashboard/MobileMenu.vue'
import PoolFinder from '~/components/dashboard/PoolFinder.vue'
import StrategyBuilder from '~/components/dashboard/StrategyBuilder.vue'
import PositionMonitor from '~/components/dashboard/PositionMonitor.vue'
import ActivityLog from '~/components/dashboard/ActivityLog.vue'

const dashboardTab = ref('dashboard')
const mobileMenuOpen = ref(false)

// Computed property for dashboard tab title
const dashboardTabTitle = computed(() => {
  switch (dashboardTab.value) {
    case 'dashboard':
      return 'Dashboard'
    case 'strategies':
      return 'Strategies'
    case 'activity':
      return 'Activity'
    default:
      return 'Dashboard'
  }
})

function setDashboardTab(tab) {
  dashboardTab.value = tab
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>