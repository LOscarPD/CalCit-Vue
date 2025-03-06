<?php
$archivo = './data/servicios.json';
$contenido_json = file_get_contents($archivo);

$servicios = json_encode($contenido_json, true);

print_r($servicios);