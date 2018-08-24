-- MySQL dump 10.13  Distrib 8.0.12, for osx10.12 (x86_64)
--
-- Host: localhost    Database: ukmkita
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admins`
--

DROP TABLE IF EXISTS `Admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admins`
--

LOCK TABLES `Admins` WRITE;
/*!40000 ALTER TABLE `Admins` DISABLE KEYS */;
INSERT INTO `Admins` VALUES (5,'khaslokal','khas','lokal admin','$2b$05$RL75QnYPUafpIH/uqL.aruYSOObaziMEoW0MEHJAXzULS7fGqn8DW','khaslokal.indo@gmail.com','2018-08-23 14:53:00','2018-08-23 14:53:00');
/*!40000 ALTER TABLE `Admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Couriers`
--

DROP TABLE IF EXISTS `Couriers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Couriers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Couriers`
--

LOCK TABLES `Couriers` WRITE;
/*!40000 ALTER TABLE `Couriers` DISABLE KEYS */;
INSERT INTO `Couriers` VALUES (1,'daren','$2b$05$DqTW7RTbCfsWpIunZ0vbXOlClFWroo1sTqnB4H2oA2pwxEvSAlAQq','10000','0812345678','2018-08-23 13:33:49','2018-08-23 13:33:49');
/*!40000 ALTER TABLE `Couriers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderItems`
--

DROP TABLE IF EXISTS `orderItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orderItems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproduct` int(11) DEFAULT NULL,
  `idorder` int(11) DEFAULT NULL,
  `qty` int(11) unsigned zerofill NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderfk_0_idx` (`idorder`),
  KEY `orderfk_1_idx` (`idproduct`),
  CONSTRAINT `orderfk_0` FOREIGN KEY (`idorder`) REFERENCES `Orders` (`id`),
  CONSTRAINT `orderfk_1` FOREIGN KEY (`idproduct`) REFERENCES `Products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderItems`
--

LOCK TABLES `orderItems` WRITE;
/*!40000 ALTER TABLE `orderItems` DISABLE KEYS */;
INSERT INTO `orderItems` VALUES (1,10,1,00000000020,NULL,NULL),(2,11,1,00000000014,NULL,NULL),(4,11,2,00000000076,'2018-08-24 03:15:21','2018-08-24 03:15:21'),(5,10,2,00000000037,'2018-08-24 03:15:21','2018-08-24 03:15:21'),(6,11,4,00000000076,'2018-08-24 08:22:42','2018-08-24 08:22:42'),(7,10,4,00000000037,'2018-08-24 08:22:42','2018-08-24 08:22:42');
/*!40000 ALTER TABLE `orderItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) DEFAULT NULL,
  `idcourier` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `status` enum('0','1','2') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Orders_fk2_idx` (`idcourier`),
  KEY `Orders_fk0_idx` (`iduser`),
  CONSTRAINT `Orders_fk0` FOREIGN KEY (`iduser`) REFERENCES `Users` (`id`),
  CONSTRAINT `Orders_fk2` FOREIGN KEY (`idcourier`) REFERENCES `Couriers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (1,1,1,NULL,NULL,'0'),(2,1,1,'2018-08-24 03:15:21','2018-08-24 03:36:26','2'),(3,1,1,'2018-08-24 08:15:07','2018-08-24 08:15:07','0'),(4,1,1,'2018-08-24 08:22:42','2018-08-24 08:22:42','0');
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productCategories`
--

DROP TABLE IF EXISTS `productCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productCategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productCategories`
--

LOCK TABLES `productCategories` WRITE;
/*!40000 ALTER TABLE `productCategories` DISABLE KEYS */;
INSERT INTO `productCategories` VALUES (1,'makanan','2018-08-23 13:31:01','2018-08-23 13:31:01'),(2,'minuman','2018-08-23 13:31:01','2018-08-23 13:31:01'),(3,'oleh-oleh','2018-08-23 13:31:01','2018-08-23 13:31:01'),(4,'kerajinan','2018-08-23 13:31:01','2018-08-23 13:31:01'),(5,'perizinan','2018-08-23 13:31:01','2018-08-23 13:31:01'),(6,'jasa','2018-08-23 13:31:01','2018-08-23 13:31:01'),(7,'tiket','2018-08-23 13:31:01','2018-08-23 13:31:01'),(8,'tas','2018-08-23 13:31:01','2018-08-23 13:31:01'),(9,'aksesoris','2018-08-23 13:31:01','2018-08-23 13:31:01'),(10,'buah-buahan','2018-08-23 13:31:01','2018-08-23 13:31:01'),(11,'pakaian','2018-08-23 13:31:01','2018-08-23 13:31:01'),(12,'sepatu','2018-08-23 13:31:01','2018-08-23 13:31:01'),(13,'tanaman','2018-08-23 13:31:01','2018-08-23 13:31:01'),(14,'sayuran','2018-08-23 13:31:01','2018-08-23 13:31:01'),(15,'lauk-pauk','2018-08-23 13:31:01','2018-08-23 13:31:01'),(16,'daging','2018-08-23 13:31:01','2018-08-23 13:31:01'),(17,'herbal','2018-08-23 13:31:01','2018-08-23 13:31:01');
/*!40000 ALTER TABLE `productCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idseller` int(11) DEFAULT NULL,
  `idcategory` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Products_fk0` (`idcategory`),
  KEY `Products_fk1_idx` (`idseller`),
  CONSTRAINT `Products_fk0` FOREIGN KEY (`idcategory`) REFERENCES `productCategories` (`id`),
  CONSTRAINT `Products_fk1` FOREIGN KEY (`idseller`) REFERENCES `Sellers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (10,5,2,'teh tarik','15000','melayu tea','teh tarik kemasan, segar dan nikmat disajikan saat dingin','https://instagram.fcgk6-1.fna.fbcdn.net/vp/84a2be651a86676739258291814b8797/5BF8C013/t51.2885-15/sh0.08/e35/s640x640/25017892_1539432409459671_3005321769587310592_n.jpg','2018-08-23 13:31:30','2018-08-23 13:31:30'),(11,5,1,'otak otak','25000','mama otak otak','teh tarik kemasan, segar dan nikmat disajikan saat dingin','https://instagram.fcgk6-1.fna.fbcdn.net/vp/84a2be651a86676739258291814b8797/5BF8C013/t51.2885-15/sh0.08/e35/s640x640/25017892_1539432409459671_3005321769587310592_n.jpg','2018-08-23 13:32:58','2018-08-23 13:32:58'),(12,6,1,'otak ikan','25000','mama otak otak','teh tarik kemasan, segar dan nikmat disajikan saat dingin','https://instagram.fcgk6-1.fna.fbcdn.net/vp/84a2be651a86676739258291814b8797/5BF8C013/t51.2885-15/sh0.08/e35/s640x640/25017892_1539432409459671_3005321769587310592_n.jpg','2018-08-23 14:59:11','2018-08-23 14:59:11'),(13,6,1,'ikan paus','25000','mama otak otak','teh tarik kemasan, segar dan nikmat disajikan saat dingin','https://instagram.fcgk6-1.fna.fbcdn.net/vp/84a2be651a86676739258291814b8797/5BF8C013/t51.2885-15/sh0.08/e35/s640x640/25017892_1539432409459671_3005321769587310592_n.jpg','2018-08-23 15:00:06','2018-08-23 15:00:06');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sellers`
--

DROP TABLE IF EXISTS `Sellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Sellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sellers`
--

LOCK TABLES `Sellers` WRITE;
/*!40000 ALTER TABLE `Sellers` DISABLE KEYS */;
INSERT INTO `Sellers` VALUES (5,'meltea','melayu','tea','batam','$2b$05$AKnfcfbHPckhKtwXNVgtleXH9jtTZMMWUondKz2AxQIFHmVL88epy','ukmkeren@example.com','081234563456','2018-08-23 13:29:29','2018-08-23 13:29:29'),(6,'otakotak','mama','otakotak','batam - riau','$2b$05$Y5dIZCAbsxh6bmlLqYnUl.pB0xu9IhobFSWI93Mekww0UvNZT3wUq','ukmkeren@example.com','081234563456','2018-08-23 13:32:18','2018-08-23 13:32:18');
/*!40000 ALTER TABLE `Sellers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'userbeli','user','beli','batam','$2b$05$QNAeL1TlywA3b7KzcO/U8..17JVaz9qX7OjD8QZB.9S4BQPDh2Vwm','userbeli@example.com','081212121212','2018-08-23 13:28:38','2018-08-23 13:28:38');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_order`
--

DROP TABLE IF EXISTS `view_order`;
/*!50001 DROP VIEW IF EXISTS `view_order`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `view_order` AS SELECT 
 1 AS `idorder`,
 1 AS `iduser`,
 1 AS `idcourier`,
 1 AS `namecourier`,
 1 AS `nameuser`,
 1 AS `status`,
 1 AS `dateorder`,
 1 AS `total`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_orderitem`
--

DROP TABLE IF EXISTS `view_orderitem`;
/*!50001 DROP VIEW IF EXISTS `view_orderitem`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `view_orderitem` AS SELECT 
 1 AS `idorder`,
 1 AS `name`,
 1 AS `price`,
 1 AS `qty`,
 1 AS `total`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_order`
--

/*!50001 DROP VIEW IF EXISTS `view_order`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`indr`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_order` AS select `a`.`id` AS `idorder`,`d`.`id` AS `iduser`,`e`.`id` AS `idcourier`,`e`.`username` AS `namecourier`,`d`.`username` AS `nameuser`,`a`.`status` AS `status`,`a`.`createdAt` AS `dateorder`,sum((`c`.`price` * `b`.`qty`)) AS `total` from ((((`orders` `a` left join `orderitems` `b` on((`a`.`id` = `b`.`idorder`))) left join `products` `c` on((`c`.`id` = `b`.`idproduct`))) left join `Users` `d` on((`d`.`id` = `a`.`iduser`))) left join `Couriers` `e` on((`e`.`id` = `a`.`idcourier`))) group by `a`.`id`,`d`.`username` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_orderitem`
--

/*!50001 DROP VIEW IF EXISTS `view_orderitem`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`indr`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_orderitem` AS select `b`.`idorder` AS `idorder`,`c`.`name` AS `name`,`c`.`price` AS `price`,`b`.`qty` AS `qty`,(`c`.`price` * `b`.`qty`) AS `total` from (`orderitems` `b` left join `products` `c` on((`c`.`id` = `b`.`idproduct`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-24 15:26:43
