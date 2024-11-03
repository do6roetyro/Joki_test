<template>
  <div>
    <Header />
    <SidebarNavigation />
    <NuxtPage />
  </div>
</template>

<!-- app.vue -->
<script setup lang="ts">
import Header from './components/header/Header.vue' 
import SidebarNavigation from './components/navbar/SidebarNavigation.vue';
</script>