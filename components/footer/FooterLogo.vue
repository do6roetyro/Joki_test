<template>
  <div class="footer__logo">
    <a href="/" class="footer__home-link">
      <img
        src="../../public/icons/footer_logo.svg"
        alt="Joki Joya"
        width="102"
        height="64"
      />
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer__logo {
  @media (max-width: 768px) {
    order: 2;
  }
}
</style>
