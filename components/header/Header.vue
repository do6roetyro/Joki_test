<template>
    <header class="header">
        <div class="header__logo">
            <a href="/" class="header__home-link">
                <img src="../../public/icons/header_logo.svg" alt="Joki Joya" width="40" height="40" />
            </a>
        </div>
        <div class="header__main">
            <div class="header__main-left">
                <div class="header__city" @click="toggleCityMenu">
                    <span>Москва</span>
                    <CityMenu v-if="isCityMenuOpen" @close="toggleCityMenu" />
                </div>
                <a href="tel:+78126352277" class="header__phone">+7 (812) 635 22 77</a>
            </div>
            <div class="header__main-right">
                <a href="/buy-tickets" class="header__button header__button--pink">Купить билеты</a>
                <a href="/order-party" class="header__button header__button--green">Заказать праздник</a>
            </div>
        </div>
        <div class="header__menu-icon" @click="toggleMenu">
            <img src="../../public/icons/header_menu_burger.svg" alt="Меню" width="40" height="40" />
            <span class="visually-hidden">Меню</span>
            <Menu v-if="isMenuOpen" @close="toggleMenu" />
        </div>
    </header>
</template>

<script setup lang="ts">
import { useToggleMenu } from '~/composables/useToggleMenu';
import CityMenu from "./CityMenu.vue";
import Menu from "./Menu.vue";

const { isCityMenuOpen, toggleCityMenu, isMenuOpen, toggleMenu } = useToggleMenu();
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    gap: 3.88vw;
    align-items: center;
    position: fixed;
    width: 100vw;
    top: 0;
    background-color: rgba(255, 255, 255, 0.75);
    padding: 10px 20px;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(227.56deg,
            #fdf398 -0.59%,
            #f7be87 22.84%,
            #e5637d 45.63%,
            #e84bba 65.89%,
            #9310d8 99.13%);
    border-image-slice: 1;
    z-index: 1000;
    min-width: 375px;
}

.header__main {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}

.header__main-left {
    display: flex;
    gap: 16px;
}

.header__main-right {
    display: flex;
    justify-content: center;
    gap: 16px;
}


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

    &::before {
        content: "";
        display: block;
        background-image: url("../../public/icons/header_city.svg");
        background-repeat: no-repeat;
        width: 12px;
        height: 18px;
    }
}

.header__logo {
    flex-shrink: 0;
}

.header__phone {
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #5834a4;
    font-family: "drukwidecyr";
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-align: center;
    border: 2px solid #5834a4;
    border-radius: 30px;
    min-width: 227px;

    &::before {
        content: "";
        display: block;
        background-image: url("../../public/icons/header_phone.svg");
        background-repeat: no-repeat;
        width: 16px;
        height: 17px;
    }
}

.header__button {
    padding: 8px 32px;
    border-radius: 30px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;

    &--pink {
        background-color: #f269af;
        font-family: "DrukCyr";
        font-size: 22px;
        font-weight: 500;
        line-height: 24px;
        color: #ffffff;
        letter-spacing: 0.03em;
        min-width: 165px;
    }

    &--green {
        background-color: #ABEC20;
        color: #262626;
        font-family: "DrukCyr";
        font-size: 22px;
        font-weight: 500;
        line-height: 24px;
    }
}

.header__menu-icon {
   flex-shrink: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 940px) {
   
    .header__button--green {
        display: none;
    }
}

@media (max-width: 768px) {
    .header__city,
    .header__phone
     {
        display: none;
    }

    .header__main {
        flex-grow: 0;
    }
}
</style>
