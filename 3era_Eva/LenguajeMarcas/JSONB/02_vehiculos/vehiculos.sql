/*
    Crear una tabla Vehiculos (id, modelo, especificaciones(color, puertas, tipo, potecia))
*/

-- Creación de una nueva tabla con un tipo de campo jsonb
CREATE TABLE IF NOT EXISTS Vehiculos (
	id SERIAL PRIMARY KEY,
	modelo VARCHAR(150) NOT NULL,
	especificaciones JSONB NULL
);

-- Inserción de los registros
INSERT INTO Vehiculos (modelo, especificaciones)
VALUES (
    'Golf MK7-R'
    , '{
        "color": "Azul medianoche",
        "puertas": "2",
        "tipo": "gasofa",
        "potencia": "300"
    }'
);

INSERT INTO Vehiculos (modelo, especificaciones)
VALUES (
    'SEAT Leon'
    , '{
        "color": "Rojo",
        "puertas": "4",
        "tipo": "gasofa",
        "potencia": "150"
    }'
);

INSERT INTO Vehiculos (modelo, especificaciones)
VALUES (
    'Honda Civic'
    , '{
        "color": "Rosa chicle",
        "puertas": "4",
        "tipo": "diesel",
        "potencia": "200"
    }'
);


-- Mostrar color y tipo como campo normal usando el operador ->>
SELECT id
, modelo
, especificaciones ->> 'color' as color
,  especificaciones ->> 'tipo' as tipo
FROM public.vehiculos;

-- Mostrar registros filtrados por los que tengan el color Rojo usando el operador @> (solo se puede utilizar en el where)
SELECT id, modelo, especificaciones ->> 'color' as color,  especificaciones ->> 'tipo' as tipo
FROM public.vehiculos
WHERE especificaciones @> '{"color": "Rojo"}'

-- Actualizar el valor de una clave existente
UPDATE vehiculos
	SET especificaciones = jsonb_set(especificaciones, '{"tipo"}', '"gasolina"')
WHERE especificaciones @> '{"color": "Rojo"}'
;

-- Añadir una clave que no exista en el campo jsonb
UPDATE vehiculos
SET especificaciones = jsonb_set(especificaciones, '{"aleron"}', 'false')
;