/*
    Filtrar usando el operador ->> 
        Primero indicamos el campo de tipo jsonb, después, 
        usamos el operador ->>, y, por último, 
        seleccionamos la clave y el valor en concreto de ese campo por los que queramos filtrar
*/

-- Filtrar usuarios por el valor false de la clave 'notificaciones_activas' dentro del campo json caracteristicas
SELECT nombre, caracteristicas
FROM public.usuarios
--WHERE caracteristicas ->> 'notificaciones_activas' = 'false'
;

-- Filtrar usuarios por el valor 'es' de la clave 'idioma' dentro del campo json caracteristicas
SELECT nombre, caracteristicas
FROM public.usuarios
WHERE caracteristicas ->> 'idioma' = 'es'
;


-- Filtrar usuarios por el valor 'claro' de la clave 'tema' dentro del campo json caracteristicas utilizando el operador '@>' 
-- y una estructura json
SELECT nombre, caracteristicas
FROM public.usuarios
WHERE caracteristicas @> '{"tema": "claro"}'
;


-- Seleccionar la clave 'idioma' del campo caracteristicas y mostrarlo junto al nombre
SELECT 
	nombre
	, caracteristicas ->> 'idioma' as idioma
FROM usuarios
;