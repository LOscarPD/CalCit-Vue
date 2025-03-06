<script setup>
import { ref, onMounted } from 'vue';
import { obtenerInfoServicios } from '../../cargarServicios.js';

const tipoServicios = ref({});

function mayusculaPrimeraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

onMounted(() => {
    obtenerInfoServicios(data => {
        const SERVICIOS_JSON = JSON.parse(data);
        const agrupadosPorTipo = {};

        Object.entries(SERVICIOS_JSON).forEach(([key, servicio]) => {
            if (!agrupadosPorTipo[servicio.tipo]) {
                agrupadosPorTipo[servicio.tipo] = [];
            }
            agrupadosPorTipo[servicio.tipo].push(servicio);
        });

        tipoServicios.value = agrupadosPorTipo;
    });
});
</script>

<template>
    <div class="control is-expanded">
        <span class="select is-fullwidth span-servicios">
            <select class="servicios_select">
                <option value="" hidden>Selecciona un servicio</option>
                <optgroup v-for="(servicios, tipo) in tipoServicios" :key="tipo" :label="mayusculaPrimeraLetra(tipo)">
                    <option v-for="servicio in servicios" :key="servicio.servicio" :value="mayusculaPrimeraLetra(servicio.servicio)">
                        {{ mayusculaPrimeraLetra(servicio.servicio) }}
                    </option>
                </optgroup>
            </select>
        </span>
    </div>
</template>

<style scoped></style>
