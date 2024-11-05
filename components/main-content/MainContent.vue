<template>
  <section class="main-content wrapper">
    <h2 class="visually-hidden">Основная информация</h2>
    <div class="main-content__container">
      <div class="vertical-line">линия</div>
      <section class="about">О нас</section>
      <section class="advantages">Особенности</section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-content__container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "vert about"
    "vert advantages";
}

.vertical-line {
  grid-area: vert;
}

.about {
  grid-area: about;
}

.advantages {
  grid-area: advantages;
}
</style>
