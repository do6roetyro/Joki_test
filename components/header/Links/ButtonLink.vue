<template>
  <a :href="href" :class="['header__button', buttonClass]">
    {{ text }}
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  href: string;
  text: string;
  buttonClass?: string;
}>();
</script>

<style scoped lang="scss">
.header__button {
  padding: 8px 32px;
  border-radius: 30px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  background-color: #f269af;
  font-family: "DrukCyr";
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
  letter-spacing: 0.03em;
  min-width: 165px;
  transition: transform 0.2s ease;
  font-family: "DrukCyr";
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.03em;

  &--pink {
    background-color: #f269af;
    color: #ffffff;
    min-width: 165px;
  }

  &--green {
    background-color: #abec20;
    color: #262626;

    @media (max-width: 940px) {
      display: none;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
