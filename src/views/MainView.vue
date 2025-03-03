<script setup>
import Tarjeta from '../components/Tarjeta.vue'
import ModalResultado from '../components/ModalResultado.vue';
import { ref } from 'vue';

const modal_IsActive = ref(false)

const abrirModal = () => {
    modal_IsActive.value = true
}

const cerrarModal = () => {
    modal_IsActive.value = false
}
</script>

<template>
    <Tarjeta titulo_card="Calculadora de Servicios" @abrirModal="abrirModal"/>
    <ModalResultado titulo_modal="Resultado" :modal_IsActive="modal_IsActive" @cerrarModal="cerrarModal"/>
</template>

<style scoped></style>