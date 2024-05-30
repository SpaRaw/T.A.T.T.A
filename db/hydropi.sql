-- --------------------------------------------------------
-- Host:                         localhost
-- Server-Version:               8.4.0 - MySQL Community Server - GPL
-- Server-Betriebssystem:        Linux
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Exportiere Datenbank-Struktur für hydropi
CREATE DATABASE IF NOT EXISTS `hydropi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hydropi`;

-- Exportiere Struktur von Tabelle hydropi.drive
CREATE TABLE IF NOT EXISTS `drive` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DriveName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `Payer` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `Date` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `Distance` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle hydropi.fuel
CREATE TABLE IF NOT EXISTS `fuel` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Date` varchar(50) NOT NULL DEFAULT '0',
  `Type` varchar(50) NOT NULL DEFAULT '0',
  `Payer` varchar(5) NOT NULL DEFAULT 'both',
  `Price` float DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle hydropi.shopping
CREATE TABLE IF NOT EXISTS `shopping` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Date` varchar(50) NOT NULL DEFAULT '0',
  `Payer` varchar(5) NOT NULL DEFAULT '0',
  `CorgiAmount` float NOT NULL DEFAULT (0),
  `MinlaAmount` float NOT NULL DEFAULT (0),
  `Name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
