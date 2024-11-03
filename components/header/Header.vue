<template>
    <header class="header">
        <div class="header__left">
            <!-- Иконка фирмы -->
            <a href="/" class="header__logo">
                <img src="../../public/icons/header_logo.svg" alt="Joki Joya" width="40" height="40" />
            </a>

            <!-- Название города -->
            <div class="header__city" @click="toggleCityMenu">
                <span>Москва</span>
                <CityMenu v-if="isCityMenuOpen" @close="toggleCityMenu" />
            </div>

            <!-- Номер телефона -->
            <a href="tel:+78126352277" class="header__phone">+7 (812) 635 22 77</a>
        </div>

        <div class="header__right">
            <!-- Купить билеты -->
            <a href="/buy-tickets" class="header__button header__button--pink">Купить билеты</a>

            <!-- Заказать праздник -->
            <a href="/order-party" class="header__button header__button--green">Заказать праздник</a>

            <!-- Иконка меню -->
            <div class="header__menu-icon" @click="toggleMenu">
                <img src="../../public/icons/header_menu_burger.svg" alt="Меню" width="40" height="40" />
                <span>Меню</span>
                <Menu v-if="isMenuOpen" @close="toggleMenu" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CityMenu from './CityMenu.vue'
import Menu from './Menu.vue'

const isCityMenuOpen = ref(false)
const isMenuOpen = ref(false)

function toggleCityMenu() {
    isCityMenuOpen.value = !isCityMenuOpen.value
}

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    padding: 10px 20px;
    border-bottom: 2px solid #ccc;
    /* цвет border укажите в зависимости от макета */

    &__left,
    &__right {
        display: flex;
        align-items: center;
    }

    &__logo img {
        width: 40px;
        height: 40px;
    }

    &__city {
        margin-left: 20px;
        cursor: pointer;
        position: relative;
    }

    &__phone {
        margin-left: 20px;
        text-decoration: none;
        color: inherit;
    }

    &__button {
        margin-left: 20px;
        padding: 10px 15px;
        border-radius: 5px;
        text-decoration: none;
        color: white;

        &--pink {
            background-color: #ff5a8f;
        }

        &--green {
            background-color: #8bc34a;
        }
    }

    &__menu-icon {
        margin-left: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
        }

        span {
            margin-left: 5px;
        }
    }

    @media (max-width: 768px) {

        .header__city,
        .header__phone,
        .header__button--green {
            display: none;
        }
    }
}
</style>