<template>
    <div class="bg-white rounded-lg p-4">
      <div class="flex items-center mb-4">
        <span class="text-sm font-semibold mr-2">Live</span>
        <span class="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
      </div>
      <img 
        :src="image"
        :alt="title"
        class="w-full rounded-lg"
      />
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })
  </script>