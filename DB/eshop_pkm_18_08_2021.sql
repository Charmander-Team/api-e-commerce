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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'trainer card','https://cacheimg.twitube.top/i.php?img=http://www.les-reponses.fr/wp-content/uploads/2016/07/potion-pokemon-go.png&key=098b2c4e4ba86d90e6c1b9f57a882a3e','2021-05-09 16:21:31','2021-07-20 13:08:36'),(2,'pokemon card','https://www.pokepedia.fr/images/e/e2/Pok%C3%A9_Ball-RS.png','2021-05-09 16:21:47','2021-07-20 13:06:28'),(4,'energy card','https://ih1.redbubble.net/image.402371362.5243/st,small,507x507-pad,600x600,f8f8f8.u2.jpg','2021-07-20 13:09:25','2021-07-20 13:09:25');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_contents`
--

DROP TABLE IF EXISTS `order_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_contents`
--

LOCK TABLES `order_contents` WRITE;
/*!40000 ALTER TABLE `order_contents` DISABLE KEYS */;
INSERT INTO `order_contents` VALUES (1,9,8,2,'2021-07-20 15:59:43','2021-07-20 15:59:43'),(2,9,9,2,'2021-07-20 16:00:24','2021-07-20 16:00:24'),(3,9,10,1,'2021-07-20 16:00:29','2021-07-20 16:00:29');
/*!40000 ALTER TABLE `order_contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ref` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` int(255) DEFAULT NULL,
  `paid` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (9,6,NULL,NULL,NULL,1,NULL,'2021-07-20 13:32:35','2021-07-20 13:32:35'),(10,6,NULL,NULL,NULL,1,NULL,'2021-07-20 13:32:37','2021-07-20 13:32:37'),(11,6,NULL,NULL,NULL,0,NULL,'2021-07-20 13:32:44','2021-07-20 13:32:44'),(12,6,NULL,NULL,NULL,0,NULL,'2021-07-20 13:32:45','2021-07-20 13:32:45'),(13,6,NULL,NULL,NULL,0,NULL,'2021-07-20 13:32:46','2021-07-20 13:32:46'),(14,6,NULL,NULL,NULL,0,NULL,'2021-07-20 13:32:47','2021-07-20 13:32:47'),(15,7,NULL,NULL,NULL,0,NULL,'2021-07-20 13:32:53','2021-07-20 13:32:53'),(16,8,NULL,NULL,NULL,0,NULL,'2021-07-20 13:32:59','2021-07-20 13:32:59'),(17,8,NULL,NULL,NULL,0,NULL,'2021-07-20 13:33:00','2021-07-20 13:33:00'),(18,8,NULL,NULL,NULL,1,NULL,'2021-07-20 13:33:04','2021-07-20 13:33:04'),(19,8,NULL,NULL,NULL,1,NULL,'2021-07-20 13:33:04','2021-07-20 13:33:04'),(20,9,NULL,NULL,NULL,1,NULL,'2021-07-20 13:33:14','2021-07-20 13:33:14'),(21,9,NULL,NULL,NULL,1,NULL,'2021-07-20 13:33:15','2021-07-20 13:33:15'),(22,9,NULL,NULL,NULL,1,NULL,'2021-07-20 13:33:15','2021-07-20 13:33:15'),(23,9,NULL,NULL,NULL,1,NULL,'2021-07-20 13:33:16','2021-07-20 13:33:16'),(24,9,NULL,NULL,NULL,1,NULL,'2021-07-20 13:33:17','2021-07-20 13:33:17');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `navbar_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text_color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (1,'test','blue','blue','blue','blue','blue','blue',1,'2021-08-18 17:24:15','2021-08-18 17:24:15');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stock` int(255) DEFAULT NULL,
  `energy_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `condition` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (8,'sm01',2,'pikachu','pikachu est un pokemon electrique',5,'lightning',10,'https://fr.shopping.rakuten.com/photo/1141922520.jpg','2021-07-20 13:13:35','2021-07-20 13:13:35',NULL),(9,'bulbi001',2,'bulbizarre','bulbizarre a une etrange graine planté dans le dos',2,'grass',10,'https://www.pokepedia.fr/images/b/b3/Carte_Set_de_Base_44.png','2021-07-20 13:14:51','2021-07-20 13:14:51',NULL),(10,'ronfl001',2,'ronflex','ronflex dort tout le temps',2,'normal',15,'https://fr.shopping.rakuten.com/photo/1387229620.jpg','2021-07-20 13:16:44','2021-07-20 13:16:44',NULL),(11,'tenta001',2,'tentacool','tentacool est un poulpe',2,'water',8,'https://fr.shopping.rakuten.com/photo/1233486127.jpg','2021-07-20 13:18:31','2021-07-20 13:18:31',NULL),(12,'light001',3,'lightning energy',NULL,2,'lightning',1,'https://fr.shopping.rakuten.com/photo/362530662.jpg','2021-07-20 13:21:24','2021-07-20 13:21:24',NULL),(13,'psy001',3,'psychic energy',NULL,2,'psychic',1,'https://www.pikastore.fr/5092-large_default/-fr-pokemon-carte-energie-psy-epee-et-bouclier.jpg','2021-07-20 13:23:12','2021-07-20 13:23:12',NULL),(14,'fight001',3,'fightning energy',NULL,2,'fightning',1,'https://cdn2.bulbagarden.net/upload/4/40/FightingEnergySunMoon.jpg','2021-07-20 13:25:44','2021-07-20 13:25:44',NULL),(15,'heal001',1,'potion','soigne 30 pts de vie',2,NULL,5,'https://www.blueumbreon.com/img/cartes/en/pokemon-card-potion-BW7-132-en.png','2021-07-20 13:27:31','2021-07-20 13:27:31',NULL),(16,'heal002',1,'super potion','soigne 60 pts de vie',2,NULL,7,'https://assets.pokemon.com/assets/cms2/img/cards/web/XY1/XY1_EN_128.png','2021-07-20 13:27:58','2021-07-20 13:27:58',NULL),(17,'bill001',1,'bill','pioche 2 cartes',2,NULL,12,'https://images-na.ssl-images-amazon.com/images/I/71j0LjSda4L._AC_SL1054_.jpg','2021-07-20 13:29:07','2021-07-20 13:29:07',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hash` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'witkowski','antoine','witkowski.antoine@gmail.com','123456',1,'https://eternia.fr/public/media/pokedex/artworks/263.png','2021-07-20 12:59:06','2021-07-20 12:59:06',NULL,NULL),(7,'brechaire','vincent','brechaire.vincent@gmail.com','123456',1,'https://www.pokepedia.fr/images/thumb/d/db/Mewtwo-RFVF.png/1200px-Mewtwo-RFVF.png','2021-07-20 13:00:29','2021-07-20 13:00:29',NULL,NULL),(8,'ambang','chriss','ambang.chris@gmail.com','123456',1,'https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png','2021-07-20 13:01:40','2021-08-04 12:32:19','1628080339:$2a$10$Rc8E8oYj1e4OTXESN.nIeOXSH0B4Wu4bFEh0C445P8f3vkEd8mfNK',NULL),(9,'ketchum','sacha','ketchum.sacha@gmail.com','123456',0,'http://3.bp.blogspot.com/-xCNK2qSeoa4/UAGWz_-sV3I/AAAAAAAAAAY/T5RMyUlXoOg/s320/Sacha_-_Tenue_Unys.png','2021-07-20 13:03:33','2021-07-20 13:03:33',NULL,NULL),(10,'Nom','Prenom','prenom.nom@gmail.fr','user',0,'','2021-07-28 17:36:02','2021-07-28 17:36:02',NULL,NULL),(11,'Nom','Pnom','pnom.nom@mail.fr','kjcksjqbhcqscbh',0,'','2021-07-28 20:47:04','2021-07-28 20:47:04',NULL,NULL),(12,'bang','kris','kris@bang.fr','test',0,'','2021-07-28 20:52:16','2021-07-28 20:52:16',NULL,NULL),(13,'test2','test1','test@test.fr','test',0,'','2021-07-28 20:58:41','2021-07-28 20:58:41',NULL,NULL),(14,'test3','test2','test3@mail.com','tt',0,'','2021-07-28 21:40:02','2021-07-28 21:40:02',NULL,NULL),(15,'bang','frere','bang@frere.fr','ahaha',0,'','2021-07-28 21:44:02','2021-07-28 21:44:02',NULL,NULL),(16,'bang','frere','bang@bang.com','tang',0,'','2021-07-28 21:46:28','2021-07-28 21:46:28',NULL,NULL),(17,'bang','frere','king@test.fr','gthfd',0,'','2021-07-28 21:48:41','2021-07-28 21:48:41',NULL,NULL),(18,'Kawnik','Aurore','aurore@kawnik.fr','test',0,'','2021-07-31 18:25:41','2021-07-31 18:25:41',NULL,NULL),(19,'nombcrypt','prenombcrypt','prenom.nom@gmail.com','$2a$10$c/E2tX25wK83p5N9nhLJvOT25OgdnrKzi/QFNiCYHI0o/eEKaSn46',0,'','2021-08-04 12:46:14','2021-08-04 12:46:14',NULL,NULL),(20,'prenom','nom','p.n@gmail.com','$2a$10$I3uEjbmHZDHadPDcUWtOGueZQ58luA25FbNS6/r/trfK4NTogI/Lq',0,'','2021-08-04 13:24:48','2021-08-04 13:34:51','1628084091:$2a$10$s2coQ4.e.Z6jHci8OmxmPeYpv1ivu/Elkmnn0mutNi5obbtxxc7Bu',NULL),(21,'n','p','p.n@gmail.com','$2a$10$caRM.5ncXSQ7rLXmpP8E5O4kehvfsUqyM8hq3JATqlxsnlsNYYeGa',0,'','2021-08-04 13:40:23','2021-08-04 13:40:23',NULL,NULL),(22,'k','a','ak@gmail.com','$2a$10$ZVW/jrv7lt3BUWq17eTwRen8C63Ky7amd4y7OJYmat5lldzU8Y8dK',0,'','2021-08-04 14:07:07','2021-08-04 14:07:07',NULL,''),(23,'m','j','jm@gmail.com','azerty',0,'','2021-08-04 20:24:27','2021-08-04 22:21:55','1628115715:$2a$10$e0PaW1iRDcLGdeCKhTvZi.165P8RNTRBlz6YwYncPWc1drwN1c/4C','$2a$10$FVaUZ98Y7FkmFsdNu.t1sO'),(24,'r','j','jr@gmail.com','azerty',0,'','2021-08-04 21:10:04','2021-08-04 22:16:56','1628115417:$2a$10$E6TBw1oi/eUqgQn0C.qT9eWYW/MTcNr0s/vhEuZFkiixEbNq9qcbW','$2a$10$ughgWwZJmWtn2Nu.60aJxu'),(25,'i','j','ji@gmail.com','azerty',0,'','2021-08-04 22:33:05','2021-08-04 22:33:32','1628116412:$2a$10$dCMSEfwopzVWGBS1DWs/z.50yibgJ6QGUwov35gF8GFONtSfsFe0.','$2a$10$TR5257uJ8JeYni3Dh9M0uu'),(26,'a','d','da@gmail.com','azerty',0,'','2021-08-04 22:51:17','2021-08-04 22:51:46','1628117506:$2a$10$OS0DQynlR3NUbOYWFktl1.zd43F5C2Hw9bemWhbd5T5mj3j.4BExa','$2a$10$sZ.SA4iKBov49I/Hy3ctru'),(27,'b','k','kb@gmail.com','azerty',0,'','2021-08-04 22:59:54','2021-08-04 23:00:15','1628118015:$2a$10$YYT6hnjl1PXyaJLWhmlOGO9G5la8Y7JRLazgc1AWMd9b8xgWAgcWy','$2a$10$zh8GgGk.mIVLfbS/0n0kYe'),(28,'a','c','ca@gmail.com','azerty',0,'','2021-08-04 23:10:15','2021-08-04 23:10:39','1628118639:$2a$10$vOPKcIzrRbs2kp9PjVSM9OMfczQ2e0agH/7AyTDxIThcZE.bQ5MDa','$2a$10$raajGdjaSvuHuEAMYkfuRe'),(29,'k','t','tk@gmail.com','$2a$10$q/t2XnqjCKZh.wlmc5oOtu234jBCcjVcXqpKxBvj0EXxzr1u2q6cK',0,'','2021-08-04 23:18:52','2021-08-04 23:21:21','1628119281:$2a$10$6UDOVF5uo35i3C/8auBp8.yMJtbc5q7ShPpPZIK3AT6UmiYv92ML.','$2a$10$q/t2XnqjCKZh.wlmc5oOtu'),(30,'m','a','am@gmail.com','$2a$10$N5ZiXqECU8Qmb2aeNdysz.Nhf1KAqubJJ9KM9hnFxt.5HfcCxSAGe',0,'','2021-08-04 23:27:09','2021-08-04 23:28:55','1628119735:$2a$10$yN3HvNqMYbeVtXMR6JI.c.Kopi31NG7c/RB52a46JL1LqRrf6cwHm','$2a$10$N5ZiXqECU8Qmb2aeNdysz.'),(31,'q','a','aq1@gmail.com','$2a$10$YaozEmDBQOWGgj.ktkmpU.jnFCOqixEpmBqGRB0GyMJItHhXlP62G',0,'','2021-08-05 08:26:17','2021-08-05 08:57:13','1628153834:$2a$10$X4YfhS1lNQp0zfNEZqjNAOqaNcdTZCq8CS88bYl3F.wj937kzrI6K','$2a$10$YaozEmDBQOWGgj.ktkmpU.'),(32,'k','t','tk@gmail.com','$2a$10$/l00jRk4znuyyABWaVqWiucjpPP6yU9Q0u7hxuylmA8XVwGoyTFaa',0,'','2021-08-05 09:01:16','2021-08-05 09:01:16','1628154077:$2a$10$fUinZtEF.5OXY8pQD/FzUutXmvXMAbQj88Z46u4Iv4Yw9kAhP79HW','$2a$10$/l00jRk4znuyyABWaVqWiu'),(33,'r','k','kr1@gmail.com','$2a$10$c5CzQ/JsfDPry6mZ79JP2ep4N.iqErHsjxF/JwYnL4X3iASWp7jKO',0,'','2021-08-05 09:11:11','2021-08-05 09:20:22','1628155222:$2a$10$q2iUItYX.v.GfimFr1jr2OJcPQPv4h.yBwDNHJSYLGjhYDF4rGVJ2','$2a$10$c5CzQ/JsfDPry6mZ79JP2e'),(34,'r','f','fr1@gmail.com','$2a$10$1Fxp33edu7lc1Nzb1BiLfe9f6BJF15btkPIZcxEY5CVcjlG0ue2PK',0,'','2021-08-05 09:27:20','2021-08-05 09:27:49','1628155669:$2a$10$RBefuZDTWQsol43NLyeeoeNRLG0rHXZWk2gYD.lDfjbJpRMQcEKy2','$2a$10$1Fxp33edu7lc1Nzb1BiLfe'),(35,'t','h','ht1@gmail.com','$2a$10$UFSAaZmGvBUfvODn3cycCetBxGLLQyy9njifLX.AgKVUVD892RmKi',0,'','2021-08-05 09:37:11','2021-08-05 09:38:49','1628156329:$2a$10$VYUlOS8tpZplGEYaa1mI7u/.H6ecTiXMsLHUwijMcKSiLA2cQ5QPO','$2a$10$UFSAaZmGvBUfvODn3cycCe'),(36,'t','p','pt1@gmail.com','$2a$10$AXkwXNZhVXmfujFzcHxoAeOigX5cAlmlS1B0OAewFuioQcAdc5ddO',0,'','2021-08-05 09:42:06','2021-08-05 09:42:52','1628156573:$2a$10$1ag2THl1R5th3mW3OsGa5.0zjxctANXqQPWT0dTtKcFFgRWhI7HtG','$2a$10$AXkwXNZhVXmfujFzcHxoAe'),(37,'m','l','lm1gmail.com','$2a$10$iL2SNmfFnzjNi5P2NRvQdOrEBwCy.gYXmFfAn5xp8yD1O1rMzYFti',0,'','2021-08-05 09:53:56','2021-08-05 10:01:41','1628157702:$2a$10$UHNH.RVEGWBLcGIcCMZzdOhuVVW7LWtf1lLFpltZXD6Uv6JZgLPBa','$2a$10$iL2SNmfFnzjNi5P2NRvQdO'),(38,'f','a','af@gmail.com','$2a$10$9PNL6X/VYc.MODz7ZJQFOu1fZtGtGbPMVT4RSpCH2yTqhQg4tg9Qa',0,'','2021-08-05 10:03:24','2021-08-05 10:04:01','1628157841:$2a$10$k4Kej44EinoZKcmHkeIRSeDzOuCE63uIaEj9uVBjNO0r92sbw.TC.','$2a$10$9PNL6X/VYc.MODz7ZJQFOu'),(39,'p','a','ap1@gmail.com','$2a$10$K3KgqU50TUUlQZSbhET/P.1OLsNhXBa2.jRDtnUJRBtNypQbJUmeC',0,'','2021-08-05 10:05:54','2021-08-05 10:06:48','1628158008:$2a$10$NJOL67.7VA.bk9Pn5EMLyeO3ga0qq/SKANanyy0QGsK57YnGUf3OG','$2a$10$K3KgqU50TUUlQZSbhET/P.'),(40,'l','k','kl@gmail.com','$2a$10$77iL3oCb2.4c.A8OLQhKN.yAnJSNwziALFzL/zV8Wbk7R9hpHKI/i',0,'','2021-08-05 10:42:33','2021-08-05 10:42:59','1628160179:$2a$10$sbhIA4sf7i9PzheW7rUCCOtzLqJM53mEoEz0EBBARO.tdoZYZHVMC','$2a$10$77iL3oCb2.4c.A8OLQhKN.'),(41,'h','g','gh1@gmail.com','$2a$10$GLfNYyL7b7cuHnEfVDAH5.cBeFoiiIEjczXFb4v0sQFP4yJ9fEDMy',0,'','2021-08-05 10:45:38','2021-08-05 10:46:03','1628160363:$2a$10$V/X0CjB5SE3LFUZ9w0BdfOfNqXoBNZ9Wttd9EHvn/1aarJ36Zwg9C','$2a$10$GLfNYyL7b7cuHnEfVDAH5.'),(42,'n','b','bn1@gmail.com','$2a$10$2gDzRzn42QdxeKU3nYuFsuYl4/RrF1m84eXl8hdXfwzyQ7/fnkW76',0,'','2021-08-05 10:47:58','2021-08-06 11:05:24','1628247925:$2a$10$DgWyYilmnoW0rS3frF6W1.QPkKM1gaHyBa4NUZkowqCYwXKK/j5MW','$2a$10$2gDzRzn42QdxeKU3nYuFsu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-18 20:21:59
