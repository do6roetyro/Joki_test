import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useMainMenuToggle() {
  const isMenuOpen = ref(false);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu')) {
      isMenuOpen.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    isMenuOpen,
    toggleMenu,
  };
}