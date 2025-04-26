// stores/transaction.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = ref([])
  
  function addTransaction(transaction) {
    transactions.value.unshift({
      ...transaction,
      status: transaction.status || 'confirmed'
    })
  }
  
  return {
    transactions,
    addTransaction
  }
})