import { ref } from "vue";

const selectedCity = ref("Москва");

export function useCitySelection() {
  function updateCity(city: string) {
    selectedCity.value = city;
  }

  return {
    selectedCity,
    updateCity,
  };
}