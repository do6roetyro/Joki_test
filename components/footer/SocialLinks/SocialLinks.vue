<template>
  <div class="footer__social-links">
    <VK />
    <Telegram />
    <JokiJoya />
  </div>
</template>

<script lang="ts" setup>
import VK from "./VK.vue";
import Telegram from "./Telegram.vue";
import JokiJoya from "./JokiJoya.vue";
</script>

<style scoped lang="scss">
.footer__social-links {
  display: flex;
  gap: 5vw;

  @media (max-width: 1024px) {
    gap: 3vw;
  }

  @media (max-width: 850px) {
    gap: 5vw;
  }

  @media (max-width: 768px) {
    order: 4;
  }
}

.icon {
  width: 32px;
  height: 32px;
  background-size: cover;
}
</style>
