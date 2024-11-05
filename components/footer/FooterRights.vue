<template>
  <div class="footer__rights">
    <span>Joki Joya © <span>2023</span> joki-joya.ru</span>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer__rights {
  font-family: "NunitoSans";
  font-size: 12px;
  font-weight: 900;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: right;
  color: #ffffff;
  min-width: 65px;

  span {
    display: block;

    @media (max-width: 850px) {
      display: inline;
    }
  }

  @media (max-width: 768px) {
    order: 5;
  }
}
</style>
