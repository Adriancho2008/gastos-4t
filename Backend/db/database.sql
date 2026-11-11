CREATE DATABASE IF NOT EXISTS administracion_gastos;
USE administracion_gastos;

-- 1. Tabla de Categorías 
CREATE TABLE IF NOT EXISTS categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL UNIQUE
);

-- 2. Tabla de Movimientos 
CREATE TABLE IF NOT EXISTS movimientos (
    id_movimiento INT AUTO_INCREMENT PRIMARY KEY,
    monto DECIMAL(12, 2) NOT NULL,
    fecha DATE NOT NULL,
    id_categoria INT NOT NULL,
    CONSTRAINT fk_movimiento_categoria 
        FOREIGN KEY (id_categoria) 
        REFERENCES categorias(id_categoria)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

-- ==========================================
--  AL MENOS 5 REGISTROS POR TABLA
-- ==========================================

-- 5 registros 'categorias'
INSERT INTO categorias (nombre_categoria) VALUES 
('Salario'),
('Comida'),
('Transporte'),
('Entretenimiento'),
('Servicios Públicos');

-- 5 registros 'Movimientos'
INSERT INTO movimientos (monto, fecha, id_categoria) VALUES 
(250000.00, '2026-10-01', 1), -- Salario
(60000.00, '2026-10-02', 2),  -- Comida
(35000.00, '2026-10-03', 3),  -- Transporte
(120000.00, '2026-10-04', 4), -- Entretenimiento
(150000.00, '2026-10-05', 5); -- Servicios Públicos