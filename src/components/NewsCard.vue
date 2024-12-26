<template>
  <article class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <a :href="article.href" class="block">
      <div class="relative">
        <img 
          :src="article.image" 
          :alt="article.title" 
          class="w-full aspect-[4/3] object-cover"
        />
        <span 
          v-if="article.tag"
          class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
        >
          {{ article.tag }}
        </span>
      </div>
      <div class="p-4">
        <h2 class="text-lg font-bold mb-2 line-clamp-3">{{ article.title }}</h2>
        <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ article.excerpt }}</p>
        <div class="flex items-center justify-between">
          <div class="flex items-center text-xs text-gray-500">
            <span>{{ article.time }}</span>
            <span class="mx-2">•</span>
            <span>By {{ article.author }}</span>
            <span class="mx-2">•</span>
            <span>{{ article.readTime }}</span>
          </div>
          <div class="flex items-center space-x-3">
            <button class="hover:text-red-600 transition-colors">
              <HeartIcon class="h-4 w-4" />
            </button>
            <button class="hover:text-blue-600 transition-colors">
              <ShareIcon class="h-4 w-4" />
            </button>
            <button class="hover:text-yellow-600 transition-colors">
              <BookmarkIcon class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup>
import { HeartIcon, ShareIcon, BookmarkIcon } from 'lucide-vue-next'

defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>