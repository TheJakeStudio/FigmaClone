<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-40">
    <div class="max-w-[1240px] mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <img src="/nbc-logo.svg" alt="NBC News" class="h-5" />
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-5">
          <a 
            v-for="item in navigationItems" 
            :key="item.name"
            :href="item.href"
            :class="[
              'text-sm transition-colors',
              item.highlight ? 'text-red-600 font-semibold flex items-center' : 'text-gray-900 hover:text-gray-600'
            ]"
          >
            <span v-if="item.highlight" class="w-1.5 h-1.5 rounded-full bg-red-600 mr-1"></span>
            {{ item.name }}
          </a>
          <button class="text-sm text-gray-900">
            <MoreHorizontalIcon class="h-4 w-4" />
          </button>
        </nav>

        <!-- Right Icons -->
        <div class="flex items-center space-x-5">
          <button class="hidden lg:block">
            <UserIcon class="h-5 w-5 text-gray-700" />
          </button>
          <button>
            <SearchIcon class="h-5 w-5 text-gray-700" />
          </button>
          <button class="lg:hidden" @click="openMobileMenu">
            <MenuIcon class="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject } from 'vue'
import { 
  UserIcon, 
  SearchIcon, 
  MenuIcon, 
  MoreHorizontalIcon 
} from 'lucide-vue-next'

const { open: openMobileMenu } = inject('mobileMenu')

const navigationItems = [
  { name: 'Home', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', highlight: true },
  { name: 'Categoty', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { name: 'Sales', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { name: 'Contact', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { name: 'About Us', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
]
</script>