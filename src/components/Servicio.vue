<script setup>
import SelectServicios from './selects/SelectServicios.vue';
import SelectOpciones from './selects/SelectOpciones.vue';
import InputCantidad from './inputs/InputCantidad.vue';
import ButtonQuitarServicio from './buttons/ButtonQuitarServicio.vue';
import { defineProps } from 'vue';

const props = defineProps(['isInicial', 'idServicio'])
</script>

<template>
    <div class="mb-5 servicio">
        <div class="field has-addons">
            <SelectServicios/>
            <ButtonQuitarServicio v-if="!props.isInicial" :idServicio="props.idServicio"/>
        </div>
        <div class="field has-addons">
            <SelectOpciones/>
            <InputCantidad/>
        </div>
    </div>
</template>

<style scoped>
.content p:not(:last-child){
    margin-bottom: 0em;
}

.field:not(:last-child){
    margin-bottom: 0.45rem;
}
</style>