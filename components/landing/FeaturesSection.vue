<template>
  <section id="features" class="py-16 px-4 bg-white/50">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-3xl font-bold mb-12 text-center">Key Features</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          title="Ladder Strategies"
          description="Create step-based liquidity positions across multiple price ranges automatically."
          icon="steps"
        />
        <FeatureCard 
          title="Fee Optimization"
          description="Maximize fee earnings by keeping your liquidity in range as prices fluctuate."
          icon="dollar"
        />
        <FeatureCard 
          title="Position Monitoring"
          description="Track performance and manage all your positions from a single dashboard."
          icon="chart"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from '~/components/landing/FeatureCard.vue'
</script>