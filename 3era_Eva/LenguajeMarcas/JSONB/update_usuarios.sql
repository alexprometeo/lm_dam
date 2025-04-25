--Actualizar todos los registros para que todos tengan el valor '"es"' en la clave 'idioma'
UPDATE usuarios SET 
caracteristicas = jsonb_set(caracteristicas, '{idioma}', '"es"')
;

--Actualizar todos los registros para que todos tengan el valor 'true' en la clave 'notificaciones_activas'
UPDATE usuarios SET 
caracteristicas = jsonb_set(caracteristicas, '{notificaciones_activas}', 'true')
;