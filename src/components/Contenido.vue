<script setup>
import Servicio from './Servicio.vue';
import ButtonAgregarServicio from './buttons/ButtonAgregarServicio.vue';
import { useServiciosStore } from '../stores/serviciosStore.js';

const serviciosStore = useServiciosStore()
const servicios = serviciosStore.servicios

const agregarServicio = () => {
    serviciosStore.addServicio(servicios.length, false);
}
</script>

<template>
    <div class="content grupo_servicios">
        <Servicio v-for="(servicio) in servicios" :idServicio="servicio.id" :isInicial="servicio.isInicial"/>
    </div>
    <ButtonAgregarServicio @click="agregarServicio"/>
</template>

<style scoped>
.grupo_servicios{
    max-height: 50vh;
    overflow-y: auto;
    margin-bottom: 0;
}
</style>