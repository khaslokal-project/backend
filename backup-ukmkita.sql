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
-- Table structure for table `adminCouriers`
--

DROP TABLE IF EXISTS `adminCouriers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `adminCouriers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addressSeller` varchar(255) DEFAULT NULL,
  `nameProduct` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `priceProduct` varchar(255) DEFAULT NULL,
  `totalProductPrice` varchar(255) DEFAULT NULL,
  `tariff` varchar(255) DEFAULT NULL,
  `grandTotal` int(11) DEFAULT NULL,
  `iduser` varchar(255) DEFAULT NULL,
  `addressUser` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminCouriers`
--

LOCK TABLES `adminCouriers` WRITE;
/*!40000 ALTER TABLE `adminCouriers` DISABLE KEYS */;
/*!40000 ALTER TABLE `adminCouriers` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admins`
--

LOCK TABLES `Admins` WRITE;
/*!40000 ALTER TABLE `Admins` DISABLE KEYS */;
INSERT INTO `Admins` VALUES (4,'indrak','indra','putra','$2b$05$uPNUnayKdEvBbWpGNKkkUOkphc31jLvb10uYFv5a5wcV4e33CGh3W','indra@example.com','2018-08-18 12:47:50','2018-08-18 12:47:50');
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
INSERT INTO `Couriers` VALUES (1,'daren','$2b$05$n8g7USPubmAZYYQGHTSnpezV4s0rfv/IAwXwGARhUO8x320qYUa.q','10000','2018-08-20 08:23:42','2018-08-20 08:37:12');
/*!40000 ALTER TABLE `Couriers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproduct` int(11) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL,
  `idcourier` int(11) DEFAULT NULL,
  `idseller` int(11) DEFAULT NULL,
  `total` bigint(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Orders_fk0` (`iduser`),
  KEY `Orders_fk1` (`idproduct`),
  KEY `Orders_fk2` (`idseller`),
  KEY `Orders_fk3` (`idcourier`),
  CONSTRAINT `Orders_fk0` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`),
  CONSTRAINT `Orders_fk1` FOREIGN KEY (`idproduct`) REFERENCES `products` (`id`),
  CONSTRAINT `Orders_fk2` FOREIGN KEY (`idseller`) REFERENCES `sellers` (`id`),
  CONSTRAINT `Orders_fk3` FOREIGN KEY (`idcourier`) REFERENCES `couriers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
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
  `nameCategory` varchar(255) DEFAULT NULL,
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
INSERT INTO `productCategories` VALUES (1,'makanan','2018-08-18 15:20:19','2018-08-20 13:01:59'),(2,'minuman','2018-08-18 15:20:19','2018-08-18 15:20:19'),(3,'oleh-oleh','2018-08-18 15:20:20','2018-08-20 13:02:15'),(4,'kerajinan','2018-08-18 15:20:20','2018-08-18 15:20:20'),(5,'perizinan','2018-08-18 15:20:20','2018-08-18 15:20:20'),(6,'jasa','2018-08-18 15:20:20','2018-08-18 15:20:20'),(7,'tiket','2018-08-18 15:20:20','2018-08-18 15:20:20'),(8,'tas','2018-08-18 15:20:23','2018-08-18 15:20:23'),(9,'aksesoris','2018-08-18 15:23:44','2018-08-18 15:23:44'),(10,'buah-buahan','2018-08-18 15:23:44','2018-08-18 15:23:44'),(11,'pakaian','2018-08-18 15:23:47','2018-08-18 15:23:47'),(12,'sepatu','2018-08-19 08:49:37','2018-08-19 08:49:37'),(13,'tanaman','2018-08-19 08:50:33','2018-08-19 08:50:33'),(14,'sayuran','2018-08-19 08:50:40','2018-08-19 08:50:40'),(15,'lauk-pauk','2018-08-19 08:50:48','2018-08-19 08:50:48'),(16,'daging','2018-08-19 09:26:27','2018-08-19 09:26:27'),(17,'herbal','2018-08-19 09:27:32','2018-08-19 09:27:32');
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
  `stock` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,5,5,'Tempe','15000','10','Tempeku','Keripik Tempe Renyah yang dibuat langsung oleh warga tempatan Baju Ampar, sebagai upaya bersama membangun semangat desa','snack','keripik.jpg',5,'Sangat renyah','2018-08-19 07:13:37','2018-08-20 12:59:24'),(6,5,6,'Melayu Tea','10000','10','Melayu Tea','Minuman teh melayu','minuman','meltea.jpg',5,'Sangat segar','2018-08-19 14:37:46','2018-08-20 13:04:20'),(7,5,7,'Tenun Motif Batam','1000000','10','Batam Tenun','Tenun aseli batam','kerajinan','tenunbatam.jpg',5,'padu padan warna yang unik','2018-08-19 14:40:30','2018-08-20 13:06:38'),(8,6,3,'Keripik','15000','10','Tempeku','Keripik Tempe Renyah yang dibuat langsung oleh warga tempatan Baju Ampar, sebagai upaya bersama membangun semangat desa','snack','https://cdn.sribu.com/assets/media/contest_detail/2016/2/kontes-desain-label-keripik-singkong-aruna-56b45f3bca6bcb4a00000002/f7dd864d1c.jpg',5,'Sangat menyenangkan','2018-08-20 09:42:41','2018-08-20 09:42:41');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sellers`
--

LOCK TABLES `Sellers` WRITE;
/*!40000 ALTER TABLE `Sellers` DISABLE KEYS */;
INSERT INTO `Sellers` VALUES (1,'sellerbaru','seller','baru','Jalan Legenda Malaka','$2b$05$5ZCXdFpnQbcLYGgtv0oyg.s.jU0L9s0lcFDV06abYKlZuQzJcoVOu','ukmkeren@example.com','081234563456','2018-08-19 10:39:03','2018-08-19 10:39:03'),(2,'wellyandriani','welly','andriani','jakarta','$2b$05$yPavD.O6KhCbo/6zdj0/0eVxz.rsIsyrEvdOQRYUA2/b4a2fvs336','wellyandriani97@gmail.com','09677673423','2018-08-19 10:49:01','2018-08-19 13:51:36'),(3,'indraputra','indra','putra','mitraraya','$2b$05$rSGHv5v2ehUKv62YE1Fp4.OTTsDmVqERnzMcwz2nnj1p30zNHmv0W','della.kutsser@yahoo.com','9078676723','2018-08-19 13:36:44','2018-08-19 13:36:44');
/*!40000 ALTER TABLE `Sellers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20180818061114-create-admin.js'),('20180818062158-create-product.js'),('20180818063120-create-user.js'),('20180818063213-create-seller.js'),('20180818065357-create-admin-courier.js'),('20180818070406-create-courier.js'),('20180818070645-create-product-category.js'),('20180821075342-create-order.js');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-21 15:14:01
