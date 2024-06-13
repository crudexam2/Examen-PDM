-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-06-2024 a las 13:27:09
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `factura`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_borrar` (IN `_id` INT(11))   BEGIN

DELETE FROM productos WHERE id = _id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_buscar` (IN `_id` INT(11))   BEGIN

SELECT Nombre, Cantidad, Precio
FROM productos
WHERE id = _id LIMIT 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crear` (IN `_Nombre` VARCHAR(20), IN `_Cantidad` INT(200), IN `_Precio` INT(200))   BEGIN 
INSERT INTO productos (Nombre, Cantidad, Precio)
VALUES (_Nombre, _Cantidad, _Precio);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_modificar` (IN `_Nombre` VARCHAR(20), IN `_Cantidad` INT(200), IN `_Precio` INT(200), IN `_id` INT(11))   BEGIN

UPDATE productos 
set 
Nombre = _Nombre,
Cantidad = _Cantidad,
Precio = _Precio
WHERE id = _id;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_todos` ()   BEGIN

SELECT p.Nombre, p.Cantidad, p.Precio
FROM productos as p;

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Cantidad` int NOT NULL,
  `Precio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `Nombre`, `Cantidad`, `Precio`) VALUES
(3, 'Kayn Shieda Figura', 1, 150000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
