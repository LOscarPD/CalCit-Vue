<script setup>
import Servicio from './Servicio.vue';
import ButtonAgregarServicio from './buttons/ButtonAgregarServicio.vue';

</script>

<template>
    <div class="content grupo_servicios">
        <Servicio :inicial="true"/>
        <Servicio/>
    </div>
    <ButtonAgregarServicio/>
</template>

<style scoped>
.grupo_servicios{
    max-height: 50vh;
    overflow-y: auto;
    margin-bottom: 0;
}
</style>