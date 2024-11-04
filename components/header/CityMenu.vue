<template>
    <div class="city-menu">
        <ul>
            <li @click="selectCity('Москва')">Москва</li>
            <li @click="selectCity('Санкт-Петербург')">Санкт-Петербург</li>
            <li @click="selectCity('Тверь')">Тверь</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

function selectCity(city: string) {
    console.log(`Selected city: ${city}`)
    emit('close')
}
</script>

<style scoped lang="scss">
.city-menu {
    position: absolute;
    top: 110%;
    left: 0;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
    width: 150%;

    ul {
        li {
            padding: 8px;
            cursor: pointer;

            &:hover {
                color: #f269af;
                
            }
        }
    }
}
</style>