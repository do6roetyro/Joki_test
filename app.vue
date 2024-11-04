<template>
  <div>
    <Header />
    <SidebarNavigation />
    <Hero />
  </div>
</template>

<!-- app.vue -->
<script setup lang="ts">
import Header from './components/header/Header.vue' 
import SidebarNavigation from './components/navbar/SidebarNavigation.vue';
import Hero from './components/hero/Hero.vue';
</script>