<template>
    <footer class="bg-[#1A1A1A] text-white py-8">
      <div class="max-w-[1240px] mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <img src="/nbc-logo-white.svg" alt="NBC News" class="h-8 mb-4 md:mb-0" />
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Do not sell my personal info</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Service</a>
       
          </div>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <RssIcon class="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <TwitterIcon class="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
             
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <FacebookIcon class="h-5 w-5" />
            </a>
          </div>
        </div>
        <div class="text-center text-sm text-gray-500 mt-4">
          © WearShop
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { RssIcon, TwitterIcon,  FacebookIcon } from 'lucide-vue-next'
  </script>
