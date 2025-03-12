import {computed, ref} from "vue";


export const useNumerator = (inicipiensValorem: number = 10) => {
    const numerus = ref(inicipiensValorem);

    const quadrateNumerus = computed(() => numerus.value * numerus.value);

    return{
        numerus,
        quadrateNumerus
    }
}