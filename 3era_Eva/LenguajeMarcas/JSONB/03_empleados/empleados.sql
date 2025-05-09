CREATE TABLE IF NOT EXISTS Empleados (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(150) NOT NULL,
	detalles JSONB NULL
);

INSERT INTO Empleados (nombre, detalles)
VALUES (
	'Ana',
	'{
		"departamento": "IT",
		"remoto": false,
		"horario": "flexible"
	}'
);

INSERT INTO Empleados (nombre, detalles)
VALUES (
	'Marta',
	'{
		"departamento": "RRHH",
		"remoto": false,
		"horario": "fijo"
	}'
);

INSERT INTO Empleados (nombre, detalles)
VALUES (
	'Miguel',
	'{
		"departamento": "IT",
		"remoto": true,
		"horario": "reducido"
	}'
);

SELECT nombre, detalles ->> 'departamento' as DPTO
FROM empleados;


SELECT nombre, detalles ->> 'departamento' as DPTO
FROM empleados
WHERE detalles ->> 'remoto' = 'true';

update empleados
set detalles = jsonb_set(detalles, '{"horario"}', '"flexible"')
WHERE detalles ->> 'remoto' = 'true';


update empleados
set detalles = jsonb_set(detalles, '{"proyecto"}', '"Desconocido"')
;


