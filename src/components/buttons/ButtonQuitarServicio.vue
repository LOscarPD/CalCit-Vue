<script setup>
import { useServiciosStore } from '../../stores/serviciosStore.js';
import { defineProps } from 'vue';

const props = defineProps(['idServicio'])
const serviciosStore = useServiciosStore()

const quitarServicio = (idServicio) => {
    serviciosStore.deleteServicio(idServicio)    
}
</script>

<template>
    <div class="control">
        <button class="button is-danger quitar_servicio"  @click="quitarServicio(props.idServicio)">
            <span class="icon is-small">
                <i class="fa-solid fa-delete-left"></i>
            </span>
        </button>
    </div>
</template>

<style scoped>
i{
    color: white;
}
</style>