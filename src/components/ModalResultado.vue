<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['titulo_modal', 'modal_IsActive'])
const emit = defineEmits(['cerrarModal'])
</script>

<template>
	<div v-if="props.modal_IsActive" id="resultado_modal" class="modal is-active">
		<div class="modal-background" @click="emit('cerrarModal')"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title has-text-centered">{{ props.titulo_modal }}</p>
				<button class="cerrar_modal delete" aria-label="close" @click="emit('cerrarModal')"></button>
			</header>
			<section class="modal-card-body">
				<div id="resultado_contenido">
					<table class="table is-fullwidth is-narrow is-striped">
						<thead>
							<tr>
								<th>Servicio</th>
								<th>Opcion</th>
								<th>Cantidad</th>
								<th>Precio</th>
								<th>Subtotal</th>
							</tr>
						</thead>
						<tbody id="resultado_tabla">
				<tr>
				<td>Microblading</td>
				<td>Retoque 3</td>
				<td>3</td>
				<td>$1,500</td>
				<td>$12,870</td>
				</tr>
			</tbody>
						<tfoot>
							<tr>
								<th colspan="4" class="has-text-right">Total</th>
								<th id="total">$99,999</th>
							</tr>
						</tfoot>
					</table>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button class="aceptar_modal button is-success is-fullwidth" @click="emit('cerrarModal')">Aceptar</button>
			</footer>
		</div>
	</div>
</template>

<style scoped>
.modal-card{
	width: 91%;
}

@media screen and (min-width: 700px) {
    .modal-card, .modal-content {
        margin: 0 auto;
        max-height: calc(100vh - var(--bulma-modal-content-spacing-tablet));
        width: var(--bulma-modal-content-width);
    }
}

table {
	font-size: 13px;
}

.aceptar_modal{
	color: white;
}

.modal-card-head{
	padding: 2vh;
}

.modal-card-body{
	padding: 1vw;
}

.modal-card-foot{
	padding: 0;
}

.aceptar_modal{
	border-radius: 0 0 10px 10px;
}
</style>
