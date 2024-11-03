<template>
  <div>
    <!-- Подключение компонента Header -->
    <Header />

    <!-- Слот для отображения основного контента страниц -->
    <NuxtPage />
  </div>
</template>

<!-- app.vue -->
<script setup lang="ts">
import Header from './components/header/Header.vue' // Новый путь к Header.vue
</script>