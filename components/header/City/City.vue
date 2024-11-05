<template>
  <div class="header__city" @click="toggleCityMenu">
    <!-- SVG и прочее -->
    <span>{{ selectedCity }}</span>
    <CityMenu
      v-if="isCityMenuOpen"
      @close="toggleCityMenu"
      @select-city="handleCityUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { useCityMenuToggle } from "~/composables/useCityMenuToggle";
import { useCitySelection } from "~/composables/useCitySelection";
import CityMenu from "./CityMenu.vue";

const { selectedCity, updateCity } = useCitySelection();
const { isCityMenuOpen, toggleCityMenu } = useCityMenuToggle();

function handleCityUpdate(city: string) {
  updateCity(city);
  toggleCityMenu();
}
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
