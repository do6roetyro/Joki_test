<template>
  <client-only>
    <div class="swiper-container">
      <span class="swiper__num"
        >{{ currentSlide + 1 }} &nbsp; \\\ &nbsp; slide</span
      >
      <swiper
        class="swiper"
        :modules="[Navigation, Pagination]"
        navigation
        pagination
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="swiper__slide"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img :src="slide.image" width="1024" height="784" alt="Обзор парка" />
        </swiper-slide>
      </swiper>
    </div>
  </client-only>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const slides = [
  { image: "/images/park_slider.jpg" },
  { image: "/images/park_slider.jpg" },
  { image: "/images/park_slider.jpg" },
];

const currentSlide = ref(0);

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.activeIndex;
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  max-width: 1024px;
}

.swiper-container {
  display: flex;
  gap: 32px;
  overflow-x: hidden;
}

.swiper__num {
  font-size: 24px;
  padding-bottom: 160px;
  font-weight: bold;
  writing-mode: vertical-lr;
  text-align: end;
  transform: rotate(180deg);
  font-family: "drukwidecyr";
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: right;
}
</style>
