-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: eshop_pkm
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bid`
--

DROP TABLE IF EXISTS `bid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bid` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `bid_amount` int(11) DEFAULT NULL,
  `status` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bid`
--

LOCK TABLES `bid` WRITE;
/*!40000 ALTER TABLE `bid` DISABLE KEYS */;
INSERT INTO `bid` VALUES (1,1,1,5,'open','2021-01-01 23:59:59');
/*!40000 ALTER TABLE `bid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'pokemon card','https://www.pokepedia.fr/images/c/cd/Rondoudou-RFVF.png'),(2,'trainer card','https://www.pokepedia.fr/images/0/06/Red_%28Ultime%29-PM.png'),(3,'energy card','https://static2.cards-capital.com/43566/lot-de-10-cartes-feu-pokemon.jpg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `order_ref` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_method` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,1,'2020-01-01 23:59:59','0001','paypal');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `ref` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,'order00001',2,'finished','2016-12-10 00:00:00',1),(2,'order00001',2,'finished','2016-12-10 00:00:00',12),(3,'order00001',2,'finished','2016-12-10 00:00:00',20),(4,'order00002',3,'finished','2016-12-10 00:00:00',10),(5,'order00003',4,'in progress','2016-12-11 01:00:00',14),(6,'order00003',4,'in progress','2016-12-11 01:00:00',19),(7,'order00004',2,'in progress','2016-12-11 01:00:00',11),(8,'order00004',2,'in progress','2016-12-11 01:00:00',11),(9,'order00005',5,'in progress','2016-12-11 01:00:00',16);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `ref` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `energy_type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `bid` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'sm76',1,'Pikachu','joues','electric','2021-02-09',0,10,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM76.png'),(2,'sm226',1,'Dracaufeu','evol salameche','fire','2021-02-09',0,20,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM226.png'),(3,'sm77',1,'Mewtwo',NULL,'psychic','2021-02-09',0,30,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM77.png'),(4,'sm127',1,'Sablaireau d\'alola','test','steel','2021-02-09',0,40,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM127.png'),(5,'sm144',1,'Artikodin',NULL,'water','2021-02-09',0,50,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM144.png'),(6,'sm153',1,'brindibou',NULL,'grass','2021-01-01',0,60,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM153.png'),(7,'sm186',1,'pyroli',NULL,'fire','2021-01-01',0,70,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM186.png'),(10,'sm235',1,'évoli','test','normal','2020-01-01',0,20,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM235.png'),(11,'sm29',1,'Mimiqui','Sa véritable apparence est inconnue. Les chercheurs qui ont vu sous son déguisement sont littéralement morts de peur.','psychic','2020-01-01',0,25,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM29.png'),(12,'sm40',1,'bébécaille','test','dragon','2020-01-01',0,20,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM40.png'),(13,'sm54',1,'lucario','test','fighting','2021-01-01',0,10,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM54.png'),(14,'xy35',2,'poké ball',NULL,NULL,'2021-01-01',0,10,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/XY0/XY0_FR_35.png'),(15,'xy37',2,'potion',NULL,NULL,'2021-01-01',0,6,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/XY0/XY0_FR_37.png'),(16,'xy39',2,'tierno',NULL,NULL,'2021-02-09',0,80,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/XY0/XY0_FR_39.png'),(17,'xy38',2,'echange',NULL,NULL,'2017-01-01',0,100,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/XY0/XY0_FR_38.png'),(18,'sm119',2,'super ball',NULL,NULL,'2011-01-01',0,10,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SM1/SM1_FR_119.png'),(19,'sm129',2,'super bonbon',NULL,NULL,'2021-02-09',0,10,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SM1/SM1_FR_129.png'),(20,'sm133',2,'sbire de la team skull',NULL,NULL,'1991-01-01',0,68,'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/SM1/SM1_FR_133.png');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,1,2),(2,2,4),(3,3,2),(4,4,3),(5,5,0),(6,6,4),(7,7,1),(8,8,0),(9,9,2),(10,10,1),(11,11,8),(12,12,4),(13,13,2),(14,14,3),(15,15,4),(16,16,7),(17,17,4),(18,18,0),(19,19,5),(20,20,4);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `admin` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'azuria','ondine','ondine@hotmail.fr','ondinemdp','2016-11-10 00:00:00',0),(4,'ketchum','giovanni','giovanni@hotmail.fr','giovannimdp','2016-11-10 00:00:00',0),(5,'rocket','james','james@hotmail.fr','jamesmdp','2016-11-10 01:00:00',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'eshop_pkm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-12 16:57:56
