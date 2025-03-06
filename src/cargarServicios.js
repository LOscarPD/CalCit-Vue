export function obtenerInfoServicios(callback) {
    fetch('/api/src/cargarServicios.php')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error al obtener los servicios:', error));
}