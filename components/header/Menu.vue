<template>
  <div class="menu-overlay" @click.self="emit('close')">
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
  top: 62px; 
  left: 0;
  width: 100%;
  height: calc(100% - 100px); 
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
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 20px 0;
      
      a {
        text-decoration: none;
        font-size: 2rem; 
        color: #000000;
        font-family: "drukwidecyr";
        text-transform: uppercase;
        display: block;
        text-align: end;
        padding-left: 20px;
        transition: color 0.3s;
        
        &:hover {
          color: #f269af; /* Add hover effect color */
        }
      }
    }
  }
}
</style>