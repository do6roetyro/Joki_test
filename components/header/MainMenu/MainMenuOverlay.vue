<template>
  <div class="menu-overlay" @click.self="emit('close')">
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link" href="/about">О нас</a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="/prices">Цены</a>
        </li>
        <li class="menu__item"><a class="menu__link" href="/menu">Меню</a></li>
        <li class="menu__item">
          <a class="menu__link" href="/buy-tickets">Купить билеты</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["close"]);
</script>

<style scoped lang="scss">
.menu-overlay {
  position: fixed;
  top: 68px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  z-index: 1000;
}

.menu {
  background: none;
  padding: 0;
}

.menu__list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: end;
  padding-right: 16px;
}

.menu__link {
  text-decoration: none;
  font-size: 2rem;
  line-height: 2rem;
  color: #000000;
  font-family: "drukwidecyr";
  text-transform: uppercase;
  display: block;
  transition: color 0.3s;
  width: fit-content;
  text-align: end;
  cursor: pointer;

  &:hover {
    color: #f269af;
  }
}
</style>
