DROP DATABASE IF EXISTS gestion_almacen_tech;

CREATE DATABASE gestion_almacen_tech;

USE gestion_almacen_tech;
 
CREATE TABLE lotes_ingreso (
    id_lote INT AUTO_INCREMENT PRIMARY KEY,
    descripcion_lote VARCHAR(60),
    unidades_recibidas INT,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);
 
CREATE TABLE salidas_stock (
    id_salida INT AUTO_INCREMENT PRIMARY KEY,
    costo_salida INT,
    fecha_salida DATETIME DEFAULT CURRENT_TIMESTAMP,
    categoria_gasto VARCHAR(60),
    id_lote INT,
    FOREIGN KEY (id_lote) REFERENCES lotes_ingreso(id_lote)
);
 

USE gestion_almacen_tech;
 

INSERT INTO lotes_ingreso (descripcion_lote, unidades_recibidas) VALUES 
('Importación de pantallas OLED', 120),
('Lote de componentes electrónicos', 450),
('Reposición de cables HDMI', 300),
('Stock inicial de memorias RAM', 150),
('Lote de fuentes de poder ATX', 80),
('Adquisición de discos SSD NVMe', 200),
('Lote de chasis para PC Gamer', 60),
('Reposición de tarjetas gráficas', 40),
('Importación de teclados mecánicos', 90),
('Lote de ventiladores RGB', 250);
 
 
INSERT INTO salidas_stock (costo_salida, categoria_gasto, id_lote) VALUES 
(450000, 'Logística de importación', 1),
(120000, 'Alquiler de bodega temporal', 1),
(85000, 'Tasas aduaneras e impuestos', 1),
(35000, 'Empaque y embalaje de componentes', 2),
(25000, 'Mantenimiento de estanterías', 2),
(280000, 'Envío express a sucursales', 6),
(45000, 'Publicidad digital local', 6),
(95000, 'Herramientas de diagnóstico', 5),
(60000, 'Reparación de equipos de prueba', 5),
(75000, 'Suministros de oficina', 10);