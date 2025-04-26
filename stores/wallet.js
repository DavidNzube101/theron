// stores/wallet.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useWalletStore = defineStore('wallet', () => {
  const connected = ref(false)
  const publicKey = ref('')
  const balance = ref(0)
  
  // Computed properties
  const truncatedAddress = computed(() => {
    if (!publicKey.value) return ''
    const start = publicKey.value.substring(0, 4)
    const end = publicKey.value.substring(publicKey.value.length - 4)
    return `${start}...${end}`
  })
  
  const formattedBalance = computed(() => {
    return balance.value.toFixed(4)
  })
  
  // Methods
  function connect() {
    // In a real implementation, this would use solana-wallets-vue
    // Example:
    // const { select } = useWallet()
    // select('phantom')
    
    // Simulated connection
    connected.value = true
    publicKey.value = '8xrt45jkLWnYSzUMj9YEzN3gEGn9ynz7MWPX9ynz'
    balance.value = 2.45
    
    console.log('Wallet connected:', publicKey.value)
  }
  
  function disconnect() {
    // In a real implementation:
    // const { disconnect } = useWallet()
    // disconnect()
    
    connected.value = false
    publicKey.value = ''
    balance.value = 0
    
    console.log('Wallet disconnected')
  }
  
  return {
    connected,
    publicKey,
    balance,
    truncatedAddress,
    formattedBalance,
    connect,
    disconnect
  }
})