<template>
  <nav class="sidebar-navigation">
    <ul class="sidebar-navigation__list">
      <li class="sidebar-navigation__item" @click="toggleSubmenu('parks')">
        <a class="sidebar-navigation__link" href="#parks">
          Парки
          <span
            class="arrow"
            :class="{ rotated: activeSubmenu === 'parks' }"
          ></span>
        </a>
        <ul v-if="activeSubmenu === 'parks'" class="submenu__list">
          <li class="submenu__item">
            <a class="submenu__link" href="#about-restaurants">О ресторанах</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#family">Семейные</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#family-villa">Family Villa JJ</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#meal-superheroes">JJ Meal и Обед</a>
          </li>
        </ul>
      </li>
      <li
        class="sidebar-navigation__item"
        @click="toggleSubmenu('celebrations')"
      >
        <a class="sidebar-navigation__link" href="#celebrations">
          Праздники
          <span
            class="arrow"
            :class="{ rotated: activeSubmenu === 'celebrations' }"
          ></span>
        </a>
        <ul v-if="activeSubmenu === 'celebrations'" class="submenu__list">
          <li class="submenu__item">
            <a class="submenu__link" href="#about-restaurants">О ресторанах</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#family">Семейные</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#family-villa">Family Villa JJ</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#meal-superheroes">JJ Meal и Обед</a>
          </li>
        </ul>
      </li>
      <li
        class="sidebar-navigation__item"
        @click="toggleSubmenu('restaurants')"
      >
        <a class="sidebar-navigation__link" href="#restaurants">
          Рестораны
          <span
            class="arrow"
            :class="{ rotated: activeSubmenu === 'restaurants' }"
          ></span>
        </a>
        <ul v-if="activeSubmenu === 'restaurants'" class="submenu__list">
          <li class="submenu__item">
            <a class="submenu__link" href="#about-restaurants">О ресторанах</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#family">Семейные</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#family-villa">Family Villa JJ</a>
          </li>
          <li class="submenu__item">
            <a class="submenu__link" href="#meal-superheroes">JJ Meal и Обед</a>
          </li>
        </ul>
      </li>
      <li class="sidebar-navigation__item" @click="toggleSubmenu('afisha')">
        <a class="sidebar-navigation__link" href="#afisha">Афиша</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const activeSubmenu = ref<string | null>(null);

function toggleSubmenu(menu: string | null) {
  activeSubmenu.value = activeSubmenu.value === menu ? null : menu;
}

function closeSubmenu() {
  activeSubmenu.value = null;
}

function handleClickOutside(event: MouseEvent) {
  if (!(event.target as HTMLElement).closest(".sidebar-navigation")) {
    closeSubmenu();
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
.sidebar-navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 100%;
  background-color: #9a6aff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 0;
  z-index: 99;
}

.sidebar-navigation__list {
  padding-top: 96px;
  writing-mode: vertical-lr;
  display: flex;
  width: 64px;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
}

.sidebar-navigation__item {
  position: relative;
}

.sidebar-navigation__link {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 13px;
  font-family: "DrukCyr";
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #fff;
  text-transform: uppercase;
  transform: rotate(180deg);
  transition: background-color 0.3s;

  .arrow {
    background-image: url("../../public/icons/sidebar_menu_element.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 20px;
    display: block;
    transition: transform 0.3s;
    /* Плавный переход для поворота */
    transform: rotate(180deg);
    /* Исходное положение */
  }

  .rotated {
    transform: rotate(90deg);
    /* Поворот на 90 градусов влево */
  }

  &:hover {
    opacity: 0.8
  }
}

.submenu__list {
  position: absolute;
  writing-mode: horizontal-tb;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  left: 130%;
  top: 0;
  width: 256px;
  background-color: #f269af;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  font-family: "drukwidecyr";
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
}

.submenu__link {
  padding: 5px 20px;
  font-size: 0.875rem;
  color: #fff;
  text-align: left;
  transition: color 0.3s;

  &:hover {
    color: #ffeb3b;
  }
}

@media (max-width: 768px) {
  .sidebar-navigation {
    display: none;
  }
}
</style>
