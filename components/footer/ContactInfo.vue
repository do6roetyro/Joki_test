<template>
  <div class="footer__contact-info">
    <p class="contact-info__desicription">
      <a class="contact-info__phone" href="tel:+74951818277"
        >+7 (495) 181 82 77</a
      >
      (Москва, Тверь)
    </p>
    <p class="contact-info__desicription">
      <a class="contact-info__phone" href="tel:+78133658277"
        >+7 (813) 365 82 77</a
      >
      (Санкт-Петербург)
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer__contact-info {
  @media (max-width: 850px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    order: 3;
  }
}

.contact-info__desicription {
  font-family: "drukwidecyr";
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  margin: 0;

  @media (max-width: 850px) {
    display: inline-block;

    &:first-child {
      padding-right: 16px;
    }
  }
}

.contact-info__phone {
  color: #abec20;
  display: block;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
}
</style>
