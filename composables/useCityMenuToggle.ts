import { ref, onMounted, onBeforeUnmount } from 'vue';

const isCityMenuOpen = ref(false);

export function useCityMenuToggle() {
  function toggleCityMenu() {
    isCityMenuOpen.value = !isCityMenuOpen.value;
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.header__city')) {
      isCityMenuOpen.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    isCityMenuOpen,
    toggleCityMenu,
  };
}