<template>
  <div class="body__container">
    <Header />
    <Main />
  </div>
</template>

<script setup lang="ts">
import Header from './components/header/Header.vue';
import Main from './components/Main.vue';

</script>

<style scoped lang="scss">
.body__container {
  margin: 0 auto;
  max-width: 1440px;
  min-width: 375px;
  position: relative;
}
</style>