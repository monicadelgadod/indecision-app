<template>

    <div class="p-4 flex-1 overflow-y-auto">
        <div class="flex flex-col space-y-2">

            <ChatBullula :meus-est="true" nuntius="¿Salimos luego a dar una vuelta?"/>

            <ChatBullula 
            :meus-est="false" 
            nuntius="no" 
            imago="https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif"/>

        </div>
    </div>
</template>

<script lang="ts" setup>
import ChatBullula from './ChatBullula.vue';


</script>


