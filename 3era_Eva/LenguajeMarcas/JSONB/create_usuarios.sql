-- Creación de una nueva tabla con un tipo de campo jsonb
CREATE TABLE usuarios(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	caracteristicas JSONB NULL
);