<template>
    <div class="bg-white rounded-lg p-4">
      <h3 class="font-semibold mb-2">Search</h3>
      <p class="text-sm text-gray-600 mb-3">Write the name of the clothes</p>
      <form @submit.prevent="handleSubmit">
        <input 
          v-model="location"
          type="text"
          placeholder="For example: T-Shirt"
          class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg mb-3 focus:outline-none focus:border-red-600"
        >
        <button 
          type="submit"
          class="w-full bg-[#CC0000] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const location = ref('')
  
  const handleSubmit = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
  </script>