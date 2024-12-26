<template>
  <div class="min-h-screen bg-[#F7F7F7]">
    <Header />
    <MobileMenu v-if="isMobileMenuOpen" @close="closeMobileMenu" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MobileMenu from './components/MobileMenu.vue'

const isMobileMenuOpen = ref(false)

const openMobileMenu = () => {
  isMobileMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

provide('mobileMenu', {
  isOpen: isMobileMenuOpen,
  open: openMobileMenu,
  close: closeMobileMenu
})
</script>