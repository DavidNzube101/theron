// stores/strategy.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { usePoolStore } from './pool'

export const useStrategyStore = defineStore('strategy', () => {
  const baseAsset = ref('USDC')
  const stepPercentage = ref(5)
  const stepCount = ref(5)
  const totalCapital = ref(1000)
  const liquidityShape = ref('balanced')
  const steps = ref([])
  const positions = ref([])
  
  // Computed properties
  const capitalPerStep = computed(() => {
    return totalCapital.value / stepCount.value
  })
  
  // Methods
  function setBaseAsset(asset) {
    baseAsset.value = asset
    calculateSteps()
  }
  
  function setStepPercentage(percentage) {
    stepPercentage.value = percentage
    calculateSteps()
  }
  
  function setStepCount(count) {
    stepCount.value = count
    calculateSteps()
  }
  
  function setTotalCapital(amount) {
    totalCapital.value = amount
    calculateSteps()
  }
  
  function setLiquidityShape(shape) {
    liquidityShape.value = shape
    calculateSteps()
  }
  
  function calculateSteps() {
    const poolStore = usePoolStore()
    steps.value = []
    
    const basePrice = poolStore.selectedPool?.price || 22.45
    
    for (let i = 1; i <= stepCount.value; i++) {
      const upperPrice = basePrice * (1 - ((i-1) * stepPercentage.value/100))
      const lowerPrice = basePrice * (1 - (i * stepPercentage.value/100))
      
      steps.value.push({
        step: i,
        lowerPrice,
        upperPrice,
        capital: capitalPerStep.value
      })
    }
  }
  
  function addPosition(position) {
    positions.value.push(position)
  }
  
  function updatePosition(positionId, updates) {
    const index = positions.value.findIndex(p => p.id === positionId)
    if (index !== -1) {
      positions.value[index] = { ...positions.value[index], ...updates }
    }
  }
  
  function removePosition(positionId) {
    positions.value = positions.value.filter(p => p.id !== positionId)
  }
  
  function getPositionById(positionId) {
    return positions.value.find(p => p.id === positionId) || null
  }
  
  // Initialize steps
  calculateSteps()
  
  return {
    baseAsset,
    stepPercentage,
    stepCount,
    totalCapital,
    liquidityShape,
    steps,
    positions,
    setBaseAsset,
    setStepPercentage,
    setStepCount,
    setTotalCapital,
    setLiquidityShape,
    calculateSteps,
    addPosition,
    updatePosition,
    removePosition,
    getPositionById
  }
})