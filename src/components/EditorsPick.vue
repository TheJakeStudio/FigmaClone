<template>
    <article class="flex gap-4">
      <div class="relative flex-shrink-0">
        <img 
          :src="article.image"
          :alt="article.title"
          class="w-48 h-32 object-cover rounded-lg"
        />
        <span 
          v-if="article.tag"
          class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
        >
          {{ article.tag }}
        </span>
      </div>
      <div>
        <h3 class="font-bold text-base mb-2 line-clamp-2">{{ article.title }}</h3>
        <p class="text-sm text-gray-600 line-clamp-3">{{ article.excerpt }}</p>
      </div>
    </article>
  </template>
  
  <script setup>
  defineProps({
    article: {
      type: Object,
      required: true
    }
  })
  </script>