<script setup>
import Contenido from './Contenido.vue'
import ButtonSumar from './buttons/ButtonSumar.vue';
import { defineProps } from 'vue';

const props = defineProps(['titulo'])
</script>

<template>
    <div class="card">
        <h1 class="title has-text-centered titulo">{{ props.titulo }}</h1>
        <div class="card-content">
            <Contenido/>
        </div>
        <div class="card-footer">
            <ButtonSumar/>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 90%;
    max-width: 400px;
}

.card-content{
    padding-top: 0;
}

.titulo{
    padding-top: 5%;
}
</style>