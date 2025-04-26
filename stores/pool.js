// stores/pool.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePoolStore = defineStore('pool', () => {
  const pools = ref([])
  const selectedPoolId = ref('')
  
  // Computed properties
  const selectedPool = computed(() => {
    return pools.value.find(pool => pool.id === selectedPoolId.value) || null
  })
  
  // Methods
  function initializePools() {
    // In a real implementation, this would fetch pools from Raydium SDK
    pools.value = [
      { 
        id: 'sol-usdc', 
        name: 'SOL-USDC', 
        tokenA: 'USDC',
        tokenB: 'SOL',
        price: 22.45, 
        feeTier: 0.3, 
        volume: 1200000 
      },
      { 
        id: 'ray-usdc', 
        name: 'RAY-USDC', 
        tokenA: 'USDC',
        tokenB: 'RAY',
        price: 0.45, 
        feeTier: 0.3, 
        volume: 500000 
      },
      { 
        id: 'sol-bonk', 
        name: 'SOL-BONK', 
        tokenA: 'SOL',
        tokenB: 'BONK',
        price: 0.000012, 
        feeTier: 0.1, 
        volume: 300000 
      }
    ]
  }
  
  function selectPool(poolId) {
    selectedPoolId.value = poolId
  }
  
  function getPoolById(poolId) {
    return pools.value.find(pool => pool.id === poolId) || null
  }
  
  return {
    pools,
    selectedPoolId,
    selectedPool,
    initializePools,
    selectPool,
    getPoolById
  }
})