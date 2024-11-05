<template>
  <div class="header__city" @click="toggleCityMenu">
    <svg
      width="12"
      height="17"
      viewBox="0 0 12 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0C2.68456 0 0 2.78261 0 6.21913V6.24696C0 8.61576 2.6215 13.0042 4.39112 15.6967C5.14431 16.8427 6.77999 16.8286 7.52044 15.6744C9.30613 12.8907 12 8.33993 12 6.21913C12 2.78261 9.31544 0 6 0ZM6 9.16174C4.46309 9.16174 3.21477 7.86783 3.21477 6.27478C3.21477 4.68174 4.46309 3.38783 6 3.38783C7.53691 3.38783 8.78524 4.68174 8.78524 6.27478C8.78524 7.86783 7.53691 9.16174 6 9.16174Z"
        fill="#5834A4"
      />
    </svg>
    <span>Москва</span>
    <CityMenu v-if="isCityMenuOpen" @close="toggleCityMenu" />
  </div>
</template>

<script setup lang="ts">
import { useToggleMenu } from "~/composables/useToggleMenu";
import CityMenu from "./CityMenu.vue";

const { isCityMenuOpen, toggleCityMenu } = useToggleMenu();
</script>

<style scoped lang="scss">
.header__city {
  padding: 6.5px 16px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: 8px;
  font-family: "DrukCyr";
  font-weight: 500;
  color: #5834a4;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border: 2px solid #5834a4;
  border-radius: 30px;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: none;
  }
}
</style>
