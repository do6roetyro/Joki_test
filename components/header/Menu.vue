<template>
    <div class="menu-overlay">
      <nav class="menu">
        <ul>
          <li><a href="/about">О нас</a></li>
          <li><a href="/prices">Цены</a></li>
          <li><a href="/menu">Меню</a></li>
          <li><a href="/buy-tickets">Купить билеты</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineEmits } from 'vue'
  
  const emit = defineEmits(['close'])
  </script>
  
  <style scoped lang="scss">
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .menu {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
  
      li {
        margin: 10px 0;
  
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
  </style>