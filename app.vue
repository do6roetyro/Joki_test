<template>
  <div>
    <Header />
<<<<<<< HEAD
    <SidebarNavigation />
    <Hero />
=======
    <!-- Слот для отображения основного контента страниц -->
    <NuxtPage />
>>>>>>> 1afe5550657bc40962550d2e525daa8d6beda468
  </div>
</template>

<!-- app.vue -->
<script setup lang="ts">
import Header from './components/header/Header.vue' 
import SidebarNavigation from './components/navbar/SidebarNavigation.vue';
import Hero from './components/hero/Hero.vue';
</script>