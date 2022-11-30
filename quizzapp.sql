-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-11-2022 a las 23:27:55
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `quizzapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `algebra`
--

DROP TABLE IF EXISTS `algebra`;
CREATE TABLE IF NOT EXISTS `algebra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tema` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `algebra`
--

INSERT INTO `algebra` (`id`, `Tema`, `Descripcion`, `respuestas`, `respuesta_correcta`, `Puntaje`) VALUES
(1, 'Algebra,', 'halle la matriz inversa,', 'a),\r\nb),\r\nc),\r\nd),', 'a)', 0),
(2, 'Algebra,', 'halle la matriz inversa,', 'a),\r\nb),\r\nc),\r\nd),', 'a)', 0),
(3, 'CONJUNTOS', 'Sean los conjuntos:  A:{2, 5, 6, 3, 0} B:{1, 9,7, 4}  ¿Cuál es resultado de la operación  A ∩ B  ?', 'sd', 'f', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calculo`
--

DROP TABLE IF EXISTS `calculo`;
CREATE TABLE IF NOT EXISTS `calculo` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `Tema` text COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` text COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `calculo`
--

INSERT INTO `calculo` (`id`, `Tema`, `Descripcion`, `respuestas`, `respuesta_correcta`, `Puntaje`) VALUES
(1, 'derivadas', 'resuelva la siguiente derivada \r\ncon base a t\r\n\r\n\r\n', 'a)\r\nb)\r\nc)\r\nd)', 'a', 0),
(2, 'derivadas', 'resuelva la siguiente derivada \r\ncon base a t\r\n\r\n\r\n', 'a)\r\nb)\r\nc)\r\nd)', 'a', 0),
(3, 'Funciones', '\"Seleccione el concepto adecuado: Una función______ es aquella cuyas variables no contienen exponentes fraccionales ni se encuentran bajo signo de radical y se expresa como el cociente de 2 funciones polinomiales\"', 'a)Polinomial, b)Racional, c)Irracional, d)Entera ', 'b)Racional', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `computacion`
--

DROP TABLE IF EXISTS `computacion`;
CREATE TABLE IF NOT EXISTS `computacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tema` text COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(1000) COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos`
--

DROP TABLE IF EXISTS `datos`;
CREATE TABLE IF NOT EXISTS `datos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tema` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `datos`
--

INSERT INTO `datos` (`id`, `Tema`, `Descripcion`, `respuestas`, `respuesta_correcta`, `Puntaje`) VALUES
(43, 'Fracciones', 'la tercera parte de un numero menos 1, es igual a la sexta parte del mismo numero', 'a)6,b)7,c)8,d)4', 'a)6', 1),
(41, 'Fracciones', '¿Cuánto es la cuarta parte de la tercera parte?', 'a)1/7,b)1/12,c)1/3,d)1/4', 'b)1/12', 2),
(42, 'CONJUNTOS2', 'Sean los conjuntos:  A:{2, 5, 6, 3, 0} B:{1, 9,7, 4}  ¿Cuál es resultado de la operación  A ∩ B  ?', 'a)12,b)24,c)34,d)41', 'a)12', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estructuras`
--

DROP TABLE IF EXISTS `estructuras`;
CREATE TABLE IF NOT EXISTS `estructuras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tema` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` text COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` text COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fisica`
--

DROP TABLE IF EXISTS `fisica`;
CREATE TABLE IF NOT EXISTS `fisica` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tema` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `fisica`
--

INSERT INTO `fisica` (`id`, `Tema`, `Descripcion`, `respuestas`, `respuesta_correcta`, `Puntaje`) VALUES
(1, 'fisica', 'calcule la distancia de aqui al sol', 'a),\r\nb),\r\nc),\r\nd),', 'a)', 0),
(2, 'fisica', 'calcule la distancia de aqui al sol', 'a),\r\nb),\r\nc),\r\nd),', 'a)', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingles`
--

DROP TABLE IF EXISTS `ingles`;
CREATE TABLE IF NOT EXISTS `ingles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tema` text COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` text COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` text COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programacion`
--

DROP TABLE IF EXISTS `programacion`;
CREATE TABLE IF NOT EXISTS `programacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Tema` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuestas` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `respuesta_correcta` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `Puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `programacion`
--

INSERT INTO `programacion` (`id`, `Tema`, `Descripcion`, `respuestas`, `respuesta_correcta`, `Puntaje`) VALUES
(1, 'Funciones', '\"Sea la función: sen^2(x)+cos^2(x)=r cuál es el valor de r\"', 'a)cos(x)/sen(x), b)tang^2(x),c)cos(x)*sen(x)', 'a)cos(x)/sen(x)', 100),
(2, 'Trigonometria', 'El valor de la tangente de un un ángulo agudo     ', 'a)es siempre mayor que 1, b)es siempre mayor que 0 y menor que 1,c)puede ser cualquier número positivo', 'c)puede ser cualquier número positivo', 100),
(3, 'sd', 's', 's', 'A)∅', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
