<template>
    <div class="fixed inset-0 z-50 bg-white">
      <div class="flex items-center justify-between p-4 border-b">
        <img src="/nbc-logo.svg" alt="NBC News" class="h-5" />
        <button @click="$emit('close')" class="p-2">
          <XIcon class="h-6 w-6" />
        </button>
      </div>
      
      <nav class="p-4">
        <div class="space-y-4">
          <a 
            v-for="item in menuItems" 
            :key="item.name"
            :href="item.href"
            class="flex items-center text-lg py-2"
          >
            <component :is="item.icon" class="h-5 w-5 mr-3" />
            {{ item.name }}
          </a>
        </div>
  
        <div class="mt-8 pt-8 border-t">
          <button class="flex items-center text-blue-600 font-medium">
            <UserIcon class="h-5 w-5 mr-2" />
            Sign In
          </button>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { XIcon, UserIcon } from 'lucide-vue-next'
  
  const menuItems = [
    { name: 'Home', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icon: 'AlertCircleIcon' },
    { name: 'Category', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icon: 'LandmarkIcon' },
    { name: 'Sales', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icon: 'BuildingIcon' },
    { name: 'Contact', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icon: 'TrophyIcon' },
    { name: 'About Us', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icon: 'GlobeIcon' },

  ]
  </script>