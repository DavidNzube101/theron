<template>
  <section class="py-20 px-4">
    <div class="container mx-auto max-w-5xl">
      <div class="flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Ladder-Step LP Strategies for Raydium
          </h1>
          <p class="text-lg mb-8 text-slate-700">
            Optimize your liquidity provision with automated laddered strategies. 
            Deploy capital efficiently across multiple price ranges on Raydium CLMM pools.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/dashboard" class="bg-green hover:bg-green/90 text-slate-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Start Building
            </NuxtLink>
            <a href="#" class="border border-slate-300 py-3 px-8 rounded-lg text-lg text-center hover:bg-slate-100 transition-colors">
              Learn More
            </a>
          </div>
        </div>
        <div class="flex-1">
          <img src="/placeholder.svg?height=400&width=400" alt="Nibbles Ladder Strategy" class="w-full max-w-md mx-auto" />
        </div>
      </div>
    </div>
  </section>
</template>