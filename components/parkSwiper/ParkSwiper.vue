<template>
  <section class="parks">
    <h2 class="parks__title"><span>Интерьеры</span> парков</h2>
    <SwiperComponent />
  </section>
</template>

<script setup lang="ts">
import SwiperComponent from "./SwiperComponent.vue";
</script>

<style scoped lang="scss">
.parks {
  display: flex;
  max-width: 1440px;
  justify-content: space-between;
  padding-bottom: 47px;
}

.parks__title {
  padding-right: 112px;
  padding-left: 10.42vw;
  font-family: "drukwidecyr";
  font-size: clamp(32px, 4vw, 73px);
  font-weight: 500;
  line-height: clamp(32px, 4vw, 72px);
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  margin: 0;

  span {
    font-family: "DrukCyr";
    font-size: clamp(32px, 4vw, 73px);
    font-weight: 500;
    line-height: clamp(32px, 4vw, 72px);
    display: block;
  }
}
</style>
