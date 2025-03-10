<template>

    <section>
        <h3>Counter: {{ numerus }}</h3>
        <h3>Square: {{ quadrateNumerus }}</h3>

        <div>
            <button @click="numerus++">+1</button>
            <button @click="numerus--">-1</button>
        </div>
    </section>

</template>

<script lang="ts" >

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




</script>