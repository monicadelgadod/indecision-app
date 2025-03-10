
import {computed, ref, defineComponent} from 'vue';

export default defineComponent({
    props: {
        valorem: {type: Number, requiered: true }
    },

    setup(props) {

        const numerus = ref(props.valorem);
        const quadrateNumerus = computed(() => numerus.value * numerus.value);

        return{
            numerus,
            quadrateNumerus,
        }
    }
});
