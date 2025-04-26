<template>
  <div class="bg-white p-6 rounded-xl shadow-sm">
    <div class="w-12 h-12 bg-green/20 rounded-lg flex items-center justify-center mb-4">
      <FeatureIcon :name="icon" />
    </div>
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-slate-600">{{ description }}</p>
  </div>
</template>

<script setup>
import FeatureIcon from '~/components/icons/FeatureIcon.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>