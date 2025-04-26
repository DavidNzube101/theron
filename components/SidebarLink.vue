<template>
  <li>
    <a 
      href="#" 
      @click.prevent="$emit('click')"
      :class="[
        'flex items-center gap-2 p-2 rounded-lg font-medium',
        active 
          ? 'bg-green/10 text-slate-800' 
          : 'text-slate-600 hover:bg-slate-100'
      ]"
    >
      <DashboardIcon :name="icon" />
      {{ text }}
    </a>
  </li>
</template>

<script setup>
import DashboardIcon from '~/components/icons/DashboardIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>