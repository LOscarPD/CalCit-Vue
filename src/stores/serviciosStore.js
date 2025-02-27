import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useServiciosStore = defineStore('servicios', () => {
    
	const servicios = ref([{
        id: 0,
        isInicial: true
    }])

	const addServicio = (id, isInicial) => {
        servicios.value.push({
            id: id,
            isInicial: isInicial
        })
	}

    const deleteServicio = (id) => {
        const index = servicios.value.findIndex(servicio => servicio.id === id)
        servicios.value.splice(index, 1)
    }

	return {
		servicios,
		addServicio,
        deleteServicio
	}
})
