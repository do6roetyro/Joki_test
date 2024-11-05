<template>
  <div class="menu" @click="toggleMenu">
    <span :class="['menu-icon__element', { 'is-active': isMenuOpen }]"></span>
    <span :class="['menu-icon__element', { 'is-active': isMenuOpen }]"></span>
    <span :class="['menu-icon__element', { 'is-active': isMenuOpen }]"></span>
    <span class="menu-icon__description">Меню</span>
    <MainMenuOverlay v-if="isMenuOpen" @close="toggleMenu" />
  </div>
</template>

<script setup lang="ts">
import { useMainMenuToggle } from "~/composables/useMainMenuToggle";
import MainMenuOverlay from "./MainMenuOverlay.vue";

const { isMenuOpen, toggleMenu } = useMainMenuToggle();
</script>

<style scoped lang="scss">
.menu {
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;

  font-family: "Montserrat";
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: right;
  color: #0267ff;
  text-transform: uppercase;
}

.menu-icon__element {
  width: 32px;
  height: 4px;
  background-color: #0267ff;
  transition: transform 0.3s ease;

  &:nth-child(1) {
    transform-origin: left;
  }

  &:nth-child(2) {
    width: 22px;
    transform-origin: right;
  }

  &:nth-child(3) {
    transform-origin: left;
  }

  &.is-active:nth-child(1),
  &.is-active:nth-child(3) {
    transform: scaleX(0.5); // Сжатие на 50% влево
  }

  &.is-active:nth-child(2) {
    transform: scaleX(0.7); // Сжатие на 50% вправо
  }
}
</style>
