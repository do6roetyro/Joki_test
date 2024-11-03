import { ref, Ref } from 'vue';

export function useToggleMenu(): {
    isCityMenuOpen: Ref<boolean>;
    toggleCityMenu: () => void;
    isMenuOpen: Ref<boolean>;
    toggleMenu: () => void;
} {
    const isCityMenuOpen = ref<boolean>(false);
    const isMenuOpen = ref<boolean>(false);

    function toggleCityMenu(): void {
        isCityMenuOpen.value = !isCityMenuOpen.value;
    }

    function toggleMenu(): void {
        isMenuOpen.value = !isMenuOpen.value;
    }

    return {
        isCityMenuOpen,
        toggleCityMenu,
        isMenuOpen,
        toggleMenu
    };
}