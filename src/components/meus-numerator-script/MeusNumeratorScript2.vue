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

<script lang="ts" src="./MeusNumeratorScript2.ts"></script>