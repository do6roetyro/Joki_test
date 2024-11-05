import { ref, type Ref, onMounted, onBeforeUnmount } from 'vue';

export function useToggleMenu(): {
    isCityMenuOpen: Ref<boolean>;
    toggleCityMenu: () => void;
    isMenuOpen: Ref<boolean>;
    toggleMenu: () => void;
    closeMenus: () => void;
} {
    const isCityMenuOpen = ref<boolean>(false);
    const isMenuOpen = ref<boolean>(false);

    function toggleCityMenu(): void {
        isCityMenuOpen.value = !isCityMenuOpen.value;
    }

    function toggleMenu(): void {
        isMenuOpen.value = !isMenuOpen.value;
    }

    function closeMenus(): void {
        isCityMenuOpen.value = false;
        isMenuOpen.value = false;
    }

    function handleClickOutside(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (!target.closest('.header__city') && !target.closest('.menu')) {
            closeMenus();
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
        isMenuOpen,
        toggleMenu,
        closeMenus
    };
}