<template>
  <footer class="footer">
    <div class="wrapper">
      <FooterLogo />
      <ContactInfo />
      <SocialLinks />
      <FooterRights />
      <ScrollToTopButton />
    </div>
  </footer>
</template>

<script lang="ts" setup>
import ContactInfo from "./ContactInfo.vue";
import SocialLinks from "./SocialLinks/SocialLinks.vue";
import ScrollToTopButton from "./ScrollToTopButton.vue";
import FooterLogo from "./FooterLogo.vue";
import FooterRights from "./FooterRights.vue";
</script>

<style scoped lang="scss">
.footer {
  background-color: #f269af;
  z-index: 10;
  position: relative;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 48px;
  padding-bottom: 48px;
  gap: 10px;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
