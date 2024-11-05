<template>
  <div class="body__container">
    <Header />
    <main class="main-container">
      <div class="body__background">
        <Hero />
        <MainContent />
      </div>
      <ParkSwiper />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/header/Header.vue';
import Hero from './components/hero/Hero.vue';
import MainContent from './components/main-content/MainContent.vue';
import ParkSwiper from './components/parkSwiper/ParkSwiper.vue';
import Footer from './components/footer/Footer.vue';
</script>

<style scoped lang="scss">
.body__container {
  display: flex;
  flex-direction: column;
  min-height: 100%; 
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
}

.main-container {
  flex-grow: 1; 
}

.body__background {
  background-image: url('./public/images/main_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
  position: relative;
}
</style>