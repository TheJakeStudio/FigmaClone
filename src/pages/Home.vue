<template>
  <main class="max-w-[1240px] mx-auto px-4">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
      <div class="relative bg-[#EBF7F9] rounded-lg overflow-hidden">
        <img 
          src="/images/winter.jpg" 
          alt="Winter Jacket" 
          class="w-full"
        />
       
        <div class="absolute top-0 right-0 w-32 h-32">
          <div class="absolute top-0 right-0 w-px h-40 bg-red-500 origin-top-right rotate-45"></div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="flex items-center justify-between mb-2">
          <span class="text-red-600 text-sm font-semibold">Trending</span>
          <div class="flex items-center space-x-2">
            <button class="p-1 hover:text-red-600 transition-colors">
              <HeartIcon class="h-4 w-4" />
            </button>
            <button class="p-1 hover:text-blue-600 transition-colors">
              <ShareIcon class="h-4 w-4" />
            </button>
            <button class="p-1 hover:text-yellow-600 transition-colors">
              <BookmarkIcon class="h-4 w-4" />
            </button>
          </div>
        </div>
        <h1 class="text-2xl lg:text-[28px] leading-tight font-bold mb-3">
          Seasonal: Winter Jacket
        </h1>
        <p class="text-sm text-gray-600 mb-3">
          Stylish and warm winter jacket designed for ultimate comfort and protection. Features durable materials, insulation for cold weather, and a modern fit. Perfect for outdoor adventures or casual wear.
        </p>
        <div class="flex items-center text-xs text-gray-500">
        </div>
      </div>
    </div>

    
    <div class="bg-[#CC0000] mb-6">
      <div class="flex items-center px-4 py-2.5">
        <span class="bg-white text-xs font-medium px-3 py-1 rounded-full mr-4">BIG Sales</span>
        <p class="text-white text-sm">We have seasonal BIG sales. Don't miss it. </p>
      </div>
    </div>

   
    <div class="flex items-center justify-between mb-6">
      <div class="flex space-x-6 overflow-x-auto pb-2 -mx-4 px-4 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
        <a 
          v-for="category in categories"
          :key="category.name"
          :href="category.href"
          :class="[
            'text-sm whitespace-nowrap',
            category.active ? 'font-semibold text-gray-900' : 'text-gray-500'
          ]"
        >
          {{ category.name }}
        </a>
      </div>
      <div class="hidden lg:flex items-center">
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <LayoutGridIcon class="h-4 w-4 text-gray-400" />
        </button>
        <div class="w-px h-4 bg-gray-200 mx-2"></div>
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <CircleIcon class="h-4 w-4 text-red-600" />
        </button>
      </div>
    </div>

   
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
      
      <div class="lg:col-span-9">
        <div class="grid md:grid-cols-2 gap-6">
          <NewsCard 
            v-for="article in articles" 
            :key="article.id"
            :article="article"
          />
        </div>
      </div>

    
      <aside class="lg:col-span-3 space-y-6">
        <LocationNews />
      </aside>
    </div>

    
    <div class="text-center mb-12">
      <a 
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        class="inline-block text-red-600 text-sm font-medium hover:text-red-700 transition-colors"
      >
        VIEW MORE
      </a>
    </div>

   
    <section class="mb-12">
      <h2 class="text-lg font-semibold flex items-center mb-6">
        Also Try
        <StarIcon class="h-4 w-4 ml-2" />
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EditorsPick 
          v-for="article in editorsPicks"
          :key="article.id"
          :article="article"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { 
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  LayoutGridIcon,
  CircleIcon,
  StarIcon
} from 'lucide-vue-next'
import NewsCard from '../components/NewsCard.vue'
import LocationNews from '../components/LocationNews.vue'
import LiveNews from '../components/LiveNews.vue'
import EditorsPick from '../components/EditorsPick.vue'

const categories = [
  { name: 'Hot', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', active: true },
  { name: 'Seasonal', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { name: 'Sales', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
]

const articles = ref([
  {
    id: 1,
    title: "Classic White T-Shirt",
    image: "/images/white tshirt.jpg",
    excerpt: "Classic white T-shirt made from soft, breathable cotton. Perfect for everyday wear, layering, or casual outfits. Timeless design with a comfortable fit.",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    image: "/images/slim fit jeans.png",
    excerpt: "Slim-fit jeans crafted from high-quality stretch denim for a sleek, modern look. Designed to hug the body while providing all-day comfort. Perfect for casual or smart-casual outfits.",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Leather Jacket",
    image: "/images/leather jacket.jpg",
    excerpt: "Stylish leather jacket made from premium-quality material, featuring a timeless design and a tailored fit. Perfect for adding a bold, edgy touch to any outfit. Durable, comfortable, and effortlessly cool.",
    tag: "SALE 5%",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Running Shoes",
    image: "/images/running shoes.jpg",
    excerpt: "Lightweight running shoes with breathable materials, cushioned soles, and excellent grip for any surface.",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
])

const editorsPicks = ref([
  {
    id: 1,
    title: "Wool Sweater",
    image: "/images/wool sweater.jpg",
    excerpt: "Cozy wool sweater with a soft texture and timeless design. Warm, breathable, and perfect for chilly days.",
    tag: "Sale 10%",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Summer Dress",
    image: "/images/summer dress.jpg",
    excerpt: "Flowy summer dress with a lightweight fabric and a flattering silhouette. Perfect for warm, sunny days.",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
])
</script>