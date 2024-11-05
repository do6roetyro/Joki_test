<template>
  <button @click="scrollToTop" class="footer__scroll-to-top-button">
    <span>Наверх</span>
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.62427 14.8694L15.3634 1.13037"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M2.12817 1.37646H15.3757V14.624"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  </button>
</template>

<script lang="ts" setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped lang="scss">
.footer__scroll-to-top-button {
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 62px;
  padding: 20px 52px;
  padding: clamp(8px, 2vw, 20px) clamp(26px, 3vw, 52px);
  font-family: "DrukCyr";
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 20px 52px;
    order: 1;
  }

  svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: rotate(-45deg);
  }
}
</style>
