<template>
  <header class="header">
    <div class="header__container">
      <HeaderLogo />
      <div class="header__main">
        <div class="header__main-left">
          <City />
          <PhoneLink />
        </div>
        <div class="header__main-right">
          <ButtonLink
            href="/buy-tickets"
            text="Купить билеты"
            buttonClass="header__button--pink"
          />
          <ButtonLink
            href="/order-party"
            text="Заказать праздник"
            buttonClass="header__button--green"
          />
        </div>
      </div>
      <MainMenuButton />
    </div>
    <SidebarNavigation />
  </header>
</template>

<script setup lang="ts">
import SidebarNavigation from "./SidebarNavigation.vue";
import PhoneLink from "./Links/PhoneLink.vue";
import ButtonLink from "./Links/ButtonLink.vue";
import City from "./City/City.vue";
import HeaderLogo from "./HeaderLogo.vue";
import MainMenuButton from "./MainMenu/MainMenuButton.vue";
</script>

<style scoped lang="scss">
.header__container {
  display: flex;
  justify-content: space-between;
  gap: 3.88vw;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    227.56deg,
    #fdf398 -0.59%,
    #f7be87 22.84%,
    #e5637d 45.63%,
    #e84bba 65.89%,
    #9310d8 99.13%
  );
  border-image-slice: 1;
  z-index: 100;
  min-width: 375px;
  max-width: 1440px;
}

.header__main {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-grow: 0;
  }
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
</style>
