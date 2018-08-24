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
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (7,'khaslokal','khas','lokal admin','$2b$05$TlIcMtEcy4XTPZqsboJydOKlj1jG1WBRfaO7YjnV5GaVExINr7Qau','khaslokal.indo@gmail.com','2018-08-24 12:47:00','2018-08-24 12:47:00');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `couriers`
--

DROP TABLE IF EXISTS `couriers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `couriers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `couriers`
--

LOCK TABLES `couriers` WRITE;
/*!40000 ALTER TABLE `couriers` DISABLE KEYS */;
INSERT INTO `couriers` VALUES (3,'daren','$2b$05$Ek8BF5I9AOBan74zHJi/BOPnxRAp8c2y/c6MaehT20d3iBm4oAzSC','10000','0812345678','2018-08-24 12:50:36','2018-08-24 12:50:36');
/*!40000 ALTER TABLE `couriers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitems`
--

DROP TABLE IF EXISTS `orderitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orderitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproduct` int(11) DEFAULT NULL,
  `idorder` int(11) DEFAULT NULL,
  `qty` int(11) unsigned zerofill NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderfk_0_idx` (`idorder`),
  KEY `orderfk_1_idx` (`idproduct`),
  CONSTRAINT `orderfk_0` FOREIGN KEY (`idorder`) REFERENCES `orders` (`id`),
  CONSTRAINT `orderfk_1` FOREIGN KEY (`idproduct`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitems`
--

LOCK TABLES `orderitems` WRITE;
/*!40000 ALTER TABLE `orderitems` DISABLE KEYS */;
INSERT INTO `orderitems` VALUES (12,16,14,00000000020,'2018-08-24 13:37:06','2018-08-24 13:37:06'),(13,17,14,00000000020,'2018-08-24 13:37:06','2018-08-24 13:37:06'),(14,16,15,00000000050,'2018-08-24 13:39:57','2018-08-24 13:39:57'),(15,17,15,00000000050,'2018-08-24 13:39:57','2018-08-24 13:39:57');
/*!40000 ALTER TABLE `orderitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) DEFAULT NULL,
  `idcourier` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `status` enum('0','1','2') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Orders_fk2_idx` (`idcourier`),
  KEY `Orders_fk0_idx` (`iduser`),
  CONSTRAINT `Orders_fk0` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`),
  CONSTRAINT `Orders_fk2` FOREIGN KEY (`idcourier`) REFERENCES `couriers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (13,3,3,'2018-08-24 13:32:00','2018-08-24 13:32:00','0'),(14,3,3,'2018-08-24 13:37:06','2018-08-24 13:37:06','0'),(15,3,3,'2018-08-24 13:39:57','2018-08-24 13:39:57','0');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcategories`
--

DROP TABLE IF EXISTS `productcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcategories`
--

LOCK TABLES `productcategories` WRITE;
/*!40000 ALTER TABLE `productcategories` DISABLE KEYS */;
INSERT INTO `productcategories` VALUES (1,'makanan','2018-08-24 13:10:56','2018-08-24 13:10:56'),(2,'minuman','2018-08-24 13:10:56','2018-08-24 13:10:56'),(3,'oleh-oleh','2018-08-24 13:10:56','2018-08-24 13:10:56'),(4,'kerajinan','2018-08-24 13:10:56','2018-08-24 13:10:56'),(5,'perizinan','2018-08-24 13:10:56','2018-08-24 13:10:56'),(6,'jasa','2018-08-24 13:10:56','2018-08-24 13:10:56'),(7,'tiket','2018-08-24 13:10:56','2018-08-24 13:10:56'),(8,'tas','2018-08-24 13:10:56','2018-08-24 13:10:56'),(9,'aksesoris','2018-08-24 13:10:56','2018-08-24 13:10:56'),(10,'buah-buahan','2018-08-24 13:10:56','2018-08-24 13:10:56'),(11,'pakaian','2018-08-24 13:10:56','2018-08-24 13:10:56'),(12,'sepatu','2018-08-24 13:10:56','2018-08-24 13:10:56'),(13,'tanaman','2018-08-24 13:10:56','2018-08-24 13:10:56'),(14,'sayuran','2018-08-24 13:10:56','2018-08-24 13:10:56'),(15,'lauk-pauk','2018-08-24 13:10:56','2018-08-24 13:10:56'),(16,'daging','2018-08-24 13:10:56','2018-08-24 13:10:56'),(17,'herbal','2018-08-24 13:10:56','2018-08-24 13:10:56');
/*!40000 ALTER TABLE `productcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
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
  KEY `Products_fk0_idx` (`idcategory`),
  KEY `Products_fk1_idx` (`idseller`),
  CONSTRAINT `Products_fk0` FOREIGN KEY (`idcategory`) REFERENCES `productcategories` (`id`),
  CONSTRAINT `Products_fk1` FOREIGN KEY (`idseller`) REFERENCES `sellers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (16,8,1,'otak otak','25000','mama otak otak','teh tarik kemasan, segar dan nikmat disajikan saat dingin','https://instagram.fcgk6-1.fna.fbcdn.net/vp/84a2be651a86676739258291814b8797/5BF8C013/t51.2885-15/sh0.08/e35/s640x640/25017892_1539432409459671_3005321769587310592_n.jpg','2018-08-24 13:21:52','2018-08-24 13:21:52'),(17,9,2,'teh tarik','25000','melayu tea','kocok dahulu biar lemak. teh tarik kemasan, segar dan nikmat disajikan saat dingin','https://instagram.fcgk6-1.fna.fbcdn.net/vp/84a2be651a86676739258291814b8797/5BF8C013/t51.2885-15/sh0.08/e35/s640x640/25017892_1539432409459671_3005321769587310592_n.jpg','2018-08-24 13:27:55','2018-08-24 13:27:55');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellers`
--

DROP TABLE IF EXISTS `sellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sellers` (
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellers`
--

LOCK TABLES `sellers` WRITE;
/*!40000 ALTER TABLE `sellers` DISABLE KEYS */;
INSERT INTO `sellers` VALUES (8,'otakotak','mama','otakotak','batam - riau','$2b$05$qnnt0jn/YhUssPozn18tFeHa0dGlSiW51hAUWLIcMNl6di.Q7j8u2','ukmkeren@example.com','081234563456','2018-08-24 13:14:33','2018-08-24 13:14:33'),(9,'melayutea','melayu','tea','batam - riau','$2b$05$ymq48ED1E1sSfoxxJXpIXeJvx30uNfa6n7IPO3vWM7arTabTEGIBy','jamale@example.com','081234563456','2018-08-24 13:24:27','2018-08-24 13:24:27');
/*!40000 ALTER TABLE `sellers` ENABLE KEYS */;
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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'userbeli','user','beli','batam','$2b$05$mMFwxg6Uj84OlURx9mvpse5DU/LTgeJ1ZvT5.s2oeIXPDoScG0SMq','userbeli@example.com','081212121212','2018-08-24 12:53:44','2018-08-24 12:53:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
/*!50001 VIEW `view_order` AS select `a`.`id` AS `idorder`,`d`.`id` AS `iduser`,`e`.`id` AS `idcourier`,`e`.`username` AS `namecourier`,`d`.`username` AS `nameuser`,`a`.`status` AS `status`,`a`.`createdAt` AS `dateorder`,sum((`c`.`price` * `b`.`qty`)) AS `total` from ((((`orders` `a` left join `orderitems` `b` on((`a`.`id` = `b`.`idorder`))) left join `products` `c` on((`c`.`id` = `b`.`idproduct`))) left join `users` `d` on((`d`.`id` = `a`.`iduser`))) left join `couriers` `e` on((`e`.`id` = `a`.`idcourier`))) group by `a`.`id`,`d`.`username` */;
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

-- Dump completed on 2018-08-24 20:49:12
