/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.32-MariaDB : Database - opticenter
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`opticenter` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `opticenter`;

/*Table structure for table `log` */

DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `codigo_estado` int(11) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `id_cliente` int(10) NOT NULL,
  `Accion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `log_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `tblclientes` (`intClvCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=366 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `log` */

insert  into `log`(`id`,`ip`,`url`,`codigo_estado`,`fecha_hora`,`id_cliente`,`Accion`) values (1,'::1','/auth/login',200,'2024-03-16 12:51:23',1,'Inicio de sesion'),(2,'::1','/auth/login',200,'2024-04-16 12:52:14',5,'Inicio de sesion'),(3,'::1','/auth/login',200,'2024-04-16 12:55:53',1,'Inicio de sesion'),(4,'::1','/auth/login',200,'2024-04-16 13:37:11',1,'Inicio de sesion'),(5,'::1','/auth/login',200,'2024-04-16 13:45:25',1,'Inicio de sesion'),(6,'::1','/auth/login',200,'2024-04-16 15:10:43',1,'Inicio de sesion'),(7,'::1','/auth/login',200,'2024-04-16 15:10:58',1,'Inicio de sesion'),(8,'::1','/auth/login',200,'2024-04-16 15:11:52',5,'Inicio de sesion'),(9,'::1','/auth/login',200,'2024-04-16 15:15:20',5,'Inicio de sesion'),(10,'::1','/auth/login',200,'2024-04-16 15:23:42',5,'Inicio de sesion'),(11,'::1','/auth/login',200,'2024-04-16 15:24:16',5,'Inicio de sesion'),(12,'::1','/auth/login',200,'2024-04-16 15:35:03',5,'Bloqueo de cuenta por 3 intentos fallidos'),(13,'::1','/auth/login',200,'2024-04-16 15:35:03',5,'Bloqueo de cuenta por 3 intentos fallidos'),(14,'::1','/auth/login',200,'2024-04-16 15:35:04',5,'Bloqueo de cuenta por 3 intentos fallidos'),(15,'::1','/auth/login',200,'2024-04-16 15:36:39',5,'Bloqueo de cuenta por 3 intentos fallidos'),(16,'::1','/auth/login',200,'2024-04-16 15:37:58',5,'Bloqueo de cuenta por 3 intentos fallidos'),(17,'::1','/auth/login',200,'2024-04-16 15:41:06',5,'Bloqueo de cuenta por 3 intentos fallidos'),(18,'::1','/auth/login',200,'2024-04-16 15:41:27',5,'Bloqueo de cuenta por 3 intentos fallidos'),(19,'::1','/auth/login',200,'2024-04-16 15:42:39',5,'Bloqueo de cuenta por 3 intentos fallidos'),(20,'::1','/auth/login',200,'2024-04-16 15:54:26',5,'Inicio de sesion'),(21,'::1','/auth/login',200,'2024-04-16 16:17:48',1,'Inicio de sesion'),(22,'::1','/auth/login',200,'2024-06-01 09:52:42',1,'Inicio de sesion'),(23,'2806:10a6:10:464e:d562:90df:aaec:a5b3','/auth/login',200,'2024-06-01 09:55:08',1,'Inicio de sesion'),(24,'2806:10a6:10:464e:d562:90df:aaec:a5b3','/auth/login',200,'2024-06-01 10:26:39',1,'Bloqueo de cuenta por 3 intentos fallidos'),(25,'2806:10a6:10:464e:d562:90df:aaec:a5b3','/auth/login',200,'2024-06-01 10:26:53',1,'Inicio de sesion'),(26,'2806:10a6:10:464e:d562:90df:aaec:a5b3','/auth/login',200,'2024-06-01 10:30:38',1,'Inicio de sesion'),(27,'2806:10a6:10:464e:d562:90df:aaec:a5b3','/auth/login',200,'2024-06-01 10:34:23',1,'Inicio de sesion'),(28,'2806:10a6:10:464e:d562:90df:aaec:a5b3','/auth/login',200,'2024-06-02 06:20:33',1,'Inicio de sesion'),(29,'::1','/clientes/recuperar-contrasena',200,'2024-06-02 20:41:22',2,'Solicitud de recuperación de contraseña'),(30,'::1','/clientes/recuperar-contrasena',200,'2024-06-02 20:47:48',1,'Solicitud de recuperación de contraseña'),(31,'::1','/auth/login',200,'2024-06-02 20:48:35',1,'Inicio de sesion'),(32,'::1','/clientes/recuperar-contrasena',200,'2024-06-02 20:49:29',5,'Solicitud de recuperación de contraseña'),(33,'::1','/auth/login',200,'2024-06-02 20:50:29',5,'Inicio de sesion'),(34,'::1','/auth/login',200,'2024-06-02 20:54:33',1,'Inicio de sesion'),(35,'::1','/auth/login',200,'2024-06-02 21:12:02',1,'Inicio de sesion'),(36,'::1','/auth/login',200,'2024-06-02 21:15:33',1,'Inicio de sesion'),(37,'::1','/clientes/recuperar-contrasena',200,'2024-06-02 21:54:36',1,'Solicitud de recuperación de contraseña'),(38,'::1','/auth/login',200,'2024-06-03 01:50:58',1,'Inicio de sesion'),(39,'201.97.126.102','/auth/login',200,'2024-06-03 02:08:53',1,'Inicio de sesion'),(40,'201.97.126.102','/auth/login',200,'2024-06-03 02:11:36',1,'Inicio de sesion'),(41,'201.97.126.102','/auth/login',200,'2024-06-03 02:11:54',1,'Inicio de sesion'),(42,'201.97.126.102','/auth/login',200,'2024-06-03 02:12:19',1,'Inicio de sesion'),(43,'201.97.126.102','/auth/login',200,'2024-06-03 02:15:29',1,'Inicio de sesion'),(44,'201.97.126.102','/auth/login',200,'2024-06-03 02:23:57',1,'Inicio de sesion'),(45,'201.97.126.102','/auth/login',200,'2024-06-03 04:54:12',1,'Inicio de sesion'),(46,'201.97.126.102','/auth/login',200,'2024-06-03 04:57:17',1,'Inicio de sesion'),(47,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:52',1,'Inicio de sesion'),(48,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:54',1,'Inicio de sesion'),(49,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:55',1,'Inicio de sesion'),(50,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:55',1,'Inicio de sesion'),(51,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:55',1,'Inicio de sesion'),(52,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:55',1,'Inicio de sesion'),(53,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:56',1,'Inicio de sesion'),(54,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:56',1,'Inicio de sesion'),(55,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:56',1,'Inicio de sesion'),(56,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:56',1,'Inicio de sesion'),(57,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:56',1,'Inicio de sesion'),(58,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:56',1,'Inicio de sesion'),(59,'201.97.126.102','/auth/login',200,'2024-06-03 05:33:57',1,'Inicio de sesion'),(60,'201.97.126.102','/auth/login',200,'2024-06-03 05:34:31',1,'Inicio de sesion'),(61,'201.97.126.102','/auth/login',200,'2024-06-03 05:48:49',1,'Inicio de sesion'),(62,'201.97.126.102','/auth/login',200,'2024-06-03 05:49:31',1,'Inicio de sesion'),(63,'201.97.126.102','/auth/login',200,'2024-06-03 05:52:40',1,'Inicio de sesion'),(64,'201.97.126.102','/auth/login',200,'2024-06-03 05:58:31',1,'Inicio de sesion'),(65,'201.97.126.102','/auth/login',200,'2024-06-03 06:00:45',1,'Inicio de sesion'),(66,'201.97.126.102','/auth/login',200,'2024-06-03 06:01:39',1,'Inicio de sesion'),(67,'201.97.126.102','/auth/login',200,'2024-06-03 06:02:42',1,'Inicio de sesion'),(68,'201.97.126.102','/auth/login',200,'2024-06-03 06:03:17',1,'Inicio de sesion'),(69,'201.97.126.102','/auth/login',200,'2024-06-03 06:06:25',1,'Inicio de sesion'),(70,'201.97.126.102','/auth/login',200,'2024-06-03 06:08:05',1,'Inicio de sesion'),(71,'201.97.126.102','/auth/login',200,'2024-06-03 06:20:03',1,'Inicio de sesion'),(72,'201.97.126.102','/auth/login',200,'2024-06-03 06:20:34',1,'Inicio de sesion'),(73,'201.97.126.102','/auth/login',200,'2024-06-03 06:27:39',1,'Inicio de sesion'),(74,'201.97.126.102','/auth/login',200,'2024-06-03 06:28:32',1,'Inicio de sesion'),(75,'201.97.126.102','/auth/login',200,'2024-06-03 06:40:25',1,'Inicio de sesion'),(76,'201.97.126.102','/auth/login',200,'2024-06-03 06:42:15',1,'Inicio de sesion'),(77,'201.97.126.102','/auth/login',200,'2024-06-03 06:51:47',1,'Inicio de sesion'),(78,'201.97.126.102','/auth/login',200,'2024-06-03 07:03:59',1,'Inicio de sesion'),(79,'201.97.126.102','/auth/login',200,'2024-06-03 07:26:39',1,'Inicio de sesion'),(80,'201.97.126.102','/auth/login',200,'2024-06-03 07:34:39',1,'Inicio de sesion'),(81,'201.97.126.102','/auth/login',200,'2024-06-03 08:25:49',1,'Inicio de sesion'),(82,'201.97.126.102','/auth/login',200,'2024-06-03 09:01:39',1,'Inicio de sesion'),(83,'201.97.126.102','/auth/login',200,'2024-06-04 00:54:57',1,'Inicio de sesion'),(84,'201.97.126.102','/auth/login',200,'2024-06-04 07:57:52',1,'Inicio de sesion'),(85,'201.97.126.102','/auth/login',200,'2024-06-04 08:10:56',1,'Inicio de sesion'),(86,'201.97.126.102','/auth/login',200,'2024-06-04 08:37:52',1,'Inicio de sesion'),(87,'201.97.126.102','/auth/login',200,'2024-06-04 10:21:11',1,'Inicio de sesion'),(88,'201.97.126.102','/auth/login',200,'2024-06-04 10:22:02',1,'Inicio de sesion'),(89,'::1','/auth/login',200,'2024-06-04 21:52:27',1,'Inicio de sesion'),(90,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-04 23:33:23',1,'Inicio de sesion'),(91,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 00:02:27',1,'Inicio de sesion'),(92,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 00:19:09',1,'Inicio de sesion'),(93,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 02:40:39',1,'Inicio de sesion'),(94,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 02:41:38',1,'Inicio de sesion'),(95,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 02:43:09',1,'Inicio de sesion'),(96,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 02:46:35',1,'Inicio de sesion'),(97,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 02:47:32',1,'Inicio de sesion'),(98,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 02:49:29',1,'Inicio de sesion'),(99,'2806:10a6:10:464e:9552:9f8c:ac61:5176','/auth/login',200,'2024-06-05 02:52:02',5,'Inicio de sesion'),(100,'201.97.126.102','/auth/login',200,'2024-06-05 04:37:29',1,'Inicio de sesion'),(101,'201.97.126.102','/auth/login',200,'2024-06-05 05:19:36',1,'Inicio de sesion'),(102,'201.97.126.102','/auth/login',200,'2024-06-05 05:22:03',1,'Inicio de sesion'),(103,'201.97.126.102','/auth/login',200,'2024-06-05 05:23:32',1,'Inicio de sesion'),(104,'201.97.126.102','/auth/login',200,'2024-06-05 05:46:08',1,'Inicio de sesion'),(105,'201.97.126.102','/auth/login',200,'2024-06-05 05:47:05',5,'Inicio de sesion'),(106,'201.97.126.102','/auth/login',200,'2024-06-05 06:02:58',1,'Inicio de sesion'),(107,'201.97.126.102','/auth/login',200,'2024-06-05 08:22:56',1,'Inicio de sesion'),(108,'201.97.126.102','/auth/login',200,'2024-06-05 08:25:04',1,'Inicio de sesion'),(109,'201.97.126.102','/auth/login',200,'2024-06-05 08:25:58',1,'Inicio de sesion'),(110,'201.97.126.102','/auth/login',200,'2024-06-05 08:30:59',1,'Inicio de sesion'),(111,'201.97.126.102','/auth/login',200,'2024-06-05 08:32:32',1,'Inicio de sesion'),(112,'201.97.126.102','/auth/login',200,'2024-06-05 08:34:49',1,'Inicio de sesion'),(113,'201.97.126.102','/auth/login',200,'2024-06-06 04:23:48',1,'Inicio de sesion'),(114,'201.97.126.102','/auth/login',200,'2024-06-06 04:24:20',1,'Inicio de sesion'),(115,'201.97.126.102','/auth/login',200,'2024-06-06 04:35:30',1,'Inicio de sesion'),(116,'201.97.126.102','/auth/login',200,'2024-06-06 04:36:25',1,'Inicio de sesion'),(117,'201.97.126.102','/auth/login',200,'2024-06-06 04:38:26',1,'Inicio de sesion'),(118,'201.97.126.102','/auth/login',200,'2024-06-06 05:19:50',1,'Inicio de sesion'),(119,'201.97.126.102','/auth/login',200,'2024-06-06 05:26:09',1,'Inicio de sesion'),(120,'201.97.126.102','/auth/login',200,'2024-06-06 05:40:31',1,'Inicio de sesion'),(121,'201.97.126.102','/auth/login',200,'2024-06-06 05:42:11',1,'Inicio de sesion'),(122,'201.97.126.102','/auth/login',200,'2024-06-06 05:47:33',1,'Inicio de sesion'),(123,'201.97.126.102','/auth/login',200,'2024-06-06 05:48:17',1,'Inicio de sesion'),(124,'201.97.126.102','/auth/login',200,'2024-06-06 06:10:12',1,'Inicio de sesion'),(125,'201.97.126.102','/auth/login',200,'2024-06-06 06:17:42',1,'Inicio de sesion'),(126,'201.97.126.102','/auth/login',200,'2024-06-06 06:34:32',1,'Inicio de sesion'),(127,'201.97.126.102','/auth/login',200,'2024-06-06 06:35:21',1,'Inicio de sesion'),(128,'201.97.126.102','/auth/login',200,'2024-06-06 06:41:14',1,'Inicio de sesion'),(129,'201.97.126.102','/auth/login',200,'2024-06-06 06:42:20',1,'Inicio de sesion'),(130,'201.97.126.102','/auth/login',200,'2024-06-07 08:11:13',1,'Inicio de sesion'),(131,'201.97.126.102','/auth/login',200,'2024-06-07 08:11:45',1,'Inicio de sesion'),(132,'201.97.126.102','/auth/login',200,'2024-06-07 08:12:47',1,'Inicio de sesion'),(133,'201.97.126.102','/auth/login',200,'2024-06-07 08:16:11',1,'Inicio de sesion'),(134,'201.97.126.102','/auth/login',200,'2024-06-07 08:49:07',1,'Inicio de sesion'),(135,'201.97.126.102','/auth/login',200,'2024-06-07 08:51:50',1,'Inicio de sesion'),(136,'201.97.126.102','/auth/login',200,'2024-06-07 08:53:33',1,'Inicio de sesion'),(137,'201.97.126.102','/auth/login',200,'2024-06-07 08:54:37',1,'Inicio de sesion'),(138,'201.97.126.102','/auth/login',200,'2024-06-07 08:57:32',1,'Inicio de sesion'),(139,'201.97.126.102','/auth/login',200,'2024-06-07 08:59:08',1,'Inicio de sesion'),(140,'201.97.126.102','/auth/login',200,'2024-06-07 08:59:46',1,'Inicio de sesion'),(141,'201.97.126.102','/auth/login',200,'2024-06-07 09:00:20',1,'Inicio de sesion'),(142,'201.97.126.102','/auth/login',200,'2024-06-07 09:01:29',1,'Inicio de sesion'),(143,'201.97.126.102','/auth/login',200,'2024-06-07 09:18:52',1,'Inicio de sesion'),(144,'201.97.126.102','/auth/login',200,'2024-06-07 09:20:45',1,'Inicio de sesion'),(145,'201.97.126.102','/auth/login',200,'2024-06-07 09:22:03',1,'Inicio de sesion'),(146,'201.97.126.102','/auth/login',200,'2024-06-07 09:23:49',1,'Inicio de sesion'),(147,'201.97.126.102','/auth/login',200,'2024-06-07 09:24:55',1,'Inicio de sesion'),(148,'201.97.126.102','/auth/login',200,'2024-06-07 09:27:05',1,'Inicio de sesion'),(149,'201.97.126.102','/auth/login',200,'2024-06-07 09:27:53',1,'Inicio de sesion'),(150,'201.97.126.102','/auth/login',200,'2024-06-07 09:46:22',1,'Inicio de sesion'),(151,'201.97.126.102','/auth/login',200,'2024-06-07 09:48:17',1,'Inicio de sesion'),(152,'201.97.126.102','/auth/login',200,'2024-06-07 09:51:48',1,'Inicio de sesion'),(153,'201.97.126.102','/auth/login',200,'2024-06-07 09:53:08',1,'Inicio de sesion'),(154,'201.97.126.102','/auth/login',200,'2024-06-07 09:54:25',1,'Inicio de sesion'),(155,'201.97.126.102','/auth/login',200,'2024-06-07 09:55:32',1,'Inicio de sesion'),(156,'201.97.126.102','/auth/login',200,'2024-06-07 10:03:17',1,'Inicio de sesion'),(157,'201.97.126.102','/auth/login',200,'2024-06-07 10:04:42',1,'Inicio de sesion'),(158,'201.97.126.102','/auth/login',200,'2024-06-07 10:06:46',1,'Inicio de sesion'),(159,'201.97.126.102','/auth/login',200,'2024-06-07 10:08:30',1,'Inicio de sesion'),(160,'201.97.126.102','/auth/login',200,'2024-06-07 10:13:29',1,'Inicio de sesion'),(161,'201.97.126.102','/auth/login',200,'2024-06-07 10:16:52',1,'Inicio de sesion'),(162,'201.97.126.102','/auth/login',200,'2024-06-07 10:18:10',1,'Inicio de sesion'),(163,'201.97.126.102','/auth/login',200,'2024-06-07 10:24:54',1,'Inicio de sesion'),(164,'201.97.126.102','/auth/login',200,'2024-06-07 10:27:56',1,'Inicio de sesion'),(165,'201.97.126.102','/auth/login',200,'2024-06-07 10:29:11',5,'Inicio de sesion'),(166,'201.97.126.102','/auth/login',200,'2024-06-07 10:39:12',5,'Inicio de sesion'),(167,'201.97.126.102','/auth/login',200,'2024-06-07 10:51:24',1,'Inicio de sesion'),(168,'201.97.126.102','/auth/login',200,'2024-06-07 11:17:00',1,'Inicio de sesion'),(169,'201.97.126.102','/auth/login',200,'2024-06-07 11:17:31',1,'Inicio de sesion'),(170,'201.97.126.102','/auth/login',200,'2024-06-07 11:19:24',1,'Inicio de sesion'),(171,'201.97.126.102','/auth/login',200,'2024-06-07 11:28:10',1,'Inicio de sesion'),(172,'201.97.126.102','/auth/login',200,'2024-06-07 11:30:45',1,'Inicio de sesion'),(173,'201.97.126.102','/auth/login',200,'2024-06-07 11:37:18',1,'Inicio de sesion'),(174,'201.97.126.102','/auth/login',200,'2024-06-07 11:37:42',1,'Inicio de sesion'),(175,'201.97.126.102','/auth/login',200,'2024-06-07 11:40:03',1,'Inicio de sesion'),(176,'201.97.126.102','/auth/login',200,'2024-06-07 11:46:32',1,'Inicio de sesion'),(177,'201.97.126.102','/auth/login',200,'2024-06-07 11:47:30',1,'Inicio de sesion'),(178,'201.97.126.102','/auth/login',200,'2024-06-07 11:51:17',1,'Inicio de sesion'),(179,'201.97.126.102','/auth/login',200,'2024-06-07 11:52:14',1,'Inicio de sesion'),(180,'201.97.126.102','/auth/login',200,'2024-06-07 13:41:31',1,'Inicio de sesion'),(181,'201.97.126.102','/auth/login',200,'2024-06-07 13:42:27',1,'Inicio de sesion'),(182,'201.97.126.102','/auth/login',200,'2024-06-07 13:45:46',1,'Inicio de sesion'),(183,'201.97.126.102','/auth/login',200,'2024-06-07 13:47:15',1,'Inicio de sesion'),(184,'201.97.126.102','/auth/login',200,'2024-06-07 13:50:13',1,'Inicio de sesion'),(185,'201.97.126.102','/auth/login',200,'2024-06-07 14:06:03',1,'Inicio de sesion'),(186,'201.97.126.102','/auth/login',200,'2024-06-07 14:51:18',1,'Inicio de sesion'),(187,'2806:10a6:10:464e:3c46:694c:9d56:2617','/auth/login',200,'2024-06-07 20:58:28',1,'Inicio de sesion'),(188,'201.97.126.102','/auth/login',200,'2024-06-09 01:25:23',1,'Inicio de sesion'),(189,'201.97.126.102','/auth/login',200,'2024-06-09 01:58:54',1,'Inicio de sesion'),(190,'201.97.126.102','/auth/login',200,'2024-06-09 02:21:04',1,'Inicio de sesion'),(191,'201.97.126.102','/auth/login',200,'2024-06-09 02:40:03',1,'Inicio de sesion'),(192,'201.97.126.102','/auth/login',200,'2024-06-09 03:15:10',1,'Inicio de sesion'),(193,'201.97.126.102','/auth/login',200,'2024-06-09 03:15:53',1,'Inicio de sesion'),(194,'201.97.126.102','/auth/login',200,'2024-06-09 03:16:54',1,'Inicio de sesion'),(195,'201.97.126.102','/auth/login',200,'2024-06-09 03:18:09',1,'Inicio de sesion'),(196,'201.97.126.102','/auth/login',200,'2024-06-09 03:19:35',1,'Inicio de sesion'),(197,'201.97.126.102','/auth/login',200,'2024-06-09 03:20:23',1,'Inicio de sesion'),(198,'201.97.126.102','/auth/login',200,'2024-06-09 03:26:13',1,'Inicio de sesion'),(199,'201.97.126.102','/auth/login',200,'2024-06-09 03:26:41',1,'Inicio de sesion'),(200,'201.97.126.102','/auth/login',200,'2024-06-09 03:30:16',1,'Inicio de sesion'),(201,'201.97.126.102','/auth/login',200,'2024-06-09 03:30:58',1,'Inicio de sesion'),(202,'201.97.126.102','/auth/login',200,'2024-06-09 04:10:18',1,'Inicio de sesion'),(203,'201.97.126.102','/auth/login',200,'2024-06-09 04:13:53',1,'Inicio de sesion'),(204,'201.97.126.102','/auth/login',200,'2024-06-09 05:26:24',1,'Inicio de sesion'),(205,'201.97.126.102','/auth/login',200,'2024-06-09 05:35:44',1,'Inicio de sesion'),(206,'201.97.126.102','/auth/login',200,'2024-06-09 05:36:40',1,'Inicio de sesion'),(207,'201.97.126.102','/auth/login',200,'2024-06-09 05:37:22',1,'Inicio de sesion'),(208,'201.97.126.102','/auth/login',200,'2024-06-09 05:38:05',1,'Inicio de sesion'),(209,'201.97.126.102','/auth/login',200,'2024-06-09 05:38:48',1,'Inicio de sesion'),(210,'201.97.126.102','/auth/login',200,'2024-06-09 05:39:47',1,'Inicio de sesion'),(211,'201.97.126.102','/auth/login',200,'2024-06-09 05:48:48',1,'Inicio de sesion'),(212,'201.97.126.102','/auth/login',200,'2024-06-09 05:50:50',1,'Inicio de sesion'),(213,'201.97.126.102','/auth/login',200,'2024-06-09 05:51:40',1,'Inicio de sesion'),(214,'201.97.126.102','/auth/login',200,'2024-06-09 05:52:16',1,'Inicio de sesion'),(215,'201.97.126.102','/auth/login',200,'2024-06-09 05:53:07',1,'Inicio de sesion'),(216,'201.97.126.102','/auth/login',200,'2024-06-09 05:54:34',1,'Inicio de sesion'),(217,'201.97.126.102','/auth/login',200,'2024-06-09 05:57:24',1,'Inicio de sesion'),(218,'201.97.126.102','/auth/login',200,'2024-06-09 05:58:36',1,'Inicio de sesion'),(219,'201.97.126.102','/auth/login',200,'2024-06-09 05:59:14',1,'Inicio de sesion'),(220,'201.97.126.102','/auth/login',200,'2024-06-09 05:59:50',1,'Inicio de sesion'),(221,'201.97.126.102','/auth/login',200,'2024-06-09 06:00:27',1,'Inicio de sesion'),(222,'201.97.126.102','/auth/login',200,'2024-06-09 06:01:25',1,'Inicio de sesion'),(223,'201.97.126.102','/auth/login',200,'2024-06-09 06:02:46',1,'Inicio de sesion'),(224,'201.97.126.102','/auth/login',200,'2024-06-09 06:04:09',1,'Inicio de sesion'),(225,'201.97.126.102','/auth/login',200,'2024-06-09 06:06:08',1,'Inicio de sesion'),(226,'201.97.126.102','/auth/login',200,'2024-06-09 06:06:53',1,'Inicio de sesion'),(227,'201.97.126.102','/auth/login',200,'2024-06-09 06:08:16',1,'Inicio de sesion'),(228,'201.97.126.102','/auth/login',200,'2024-06-09 06:09:02',1,'Inicio de sesion'),(229,'201.97.126.102','/auth/login',200,'2024-06-09 06:11:31',1,'Inicio de sesion'),(230,'201.97.126.102','/auth/login',200,'2024-06-09 06:12:31',1,'Inicio de sesion'),(231,'201.97.126.102','/auth/login',200,'2024-06-09 06:13:34',1,'Inicio de sesion'),(232,'201.97.126.102','/auth/login',200,'2024-06-09 06:14:49',1,'Inicio de sesion'),(233,'201.97.126.102','/auth/login',200,'2024-06-09 06:15:49',1,'Inicio de sesion'),(234,'201.97.126.102','/auth/login',200,'2024-06-09 06:16:23',1,'Inicio de sesion'),(235,'201.97.126.102','/auth/login',200,'2024-06-09 06:18:34',1,'Inicio de sesion'),(236,'201.97.126.102','/auth/login',200,'2024-06-09 06:24:28',1,'Inicio de sesion'),(237,'201.97.126.102','/auth/login',200,'2024-06-09 06:25:04',1,'Inicio de sesion'),(238,'201.97.126.102','/auth/login',200,'2024-06-09 06:25:45',1,'Inicio de sesion'),(239,'201.97.126.102','/auth/login',200,'2024-06-09 06:26:19',1,'Inicio de sesion'),(240,'201.97.126.102','/auth/login',200,'2024-06-09 06:28:54',1,'Inicio de sesion'),(241,'201.97.126.102','/auth/login',200,'2024-06-09 06:29:50',1,'Inicio de sesion'),(242,'201.97.126.102','/auth/login',200,'2024-06-09 06:38:07',1,'Inicio de sesion'),(243,'201.97.126.102','/auth/login',200,'2024-06-09 06:39:18',1,'Inicio de sesion'),(244,'201.97.126.102','/auth/login',200,'2024-06-09 06:59:15',1,'Inicio de sesion'),(245,'201.97.126.102','/auth/login',200,'2024-06-09 07:10:20',1,'Inicio de sesion'),(246,'201.97.126.102','/auth/login',200,'2024-06-09 07:47:09',1,'Inicio de sesion'),(247,'201.97.126.102','/auth/login',200,'2024-06-09 07:53:36',1,'Inicio de sesion'),(248,'201.97.126.102','/auth/login',200,'2024-06-09 08:20:08',1,'Inicio de sesion'),(249,'201.97.126.102','/auth/login',200,'2024-06-09 08:22:10',1,'Inicio de sesion'),(250,'201.97.126.102','/auth/login',200,'2024-06-09 08:33:12',1,'Inicio de sesion'),(251,'201.97.126.102','/auth/login',200,'2024-06-09 08:36:13',1,'Inicio de sesion'),(252,'201.97.126.102','/auth/login',200,'2024-06-09 08:47:12',1,'Inicio de sesion'),(253,'201.97.126.102','/auth/login',200,'2024-06-09 08:47:47',5,'Inicio de sesion'),(254,'201.97.126.102','/auth/login',200,'2024-06-09 08:56:01',1,'Inicio de sesion'),(255,'201.97.126.102','/auth/login',200,'2024-06-09 09:03:47',1,'Inicio de sesion'),(256,'201.97.126.102','/auth/login',200,'2024-06-09 09:05:07',1,'Inicio de sesion'),(257,'201.97.126.102','/auth/login',200,'2024-06-09 09:13:22',1,'Inicio de sesion'),(258,'201.97.126.102','/auth/login',200,'2024-06-09 09:16:35',1,'Inicio de sesion'),(259,'201.97.126.102','/auth/login',200,'2024-06-09 09:17:59',1,'Inicio de sesion'),(260,'201.97.126.102','/auth/login',200,'2024-06-09 09:18:46',1,'Inicio de sesion'),(261,'201.97.126.102','/auth/login',200,'2024-06-09 09:26:45',1,'Inicio de sesion'),(262,'201.97.126.102','/auth/login',200,'2024-06-09 09:27:47',1,'Inicio de sesion'),(263,'201.97.126.102','/auth/login',200,'2024-06-09 09:30:47',1,'Inicio de sesion'),(264,'201.97.126.102','/auth/login',200,'2024-06-09 09:41:57',1,'Inicio de sesion'),(265,'201.97.126.102','/auth/login',200,'2024-06-09 09:47:27',1,'Inicio de sesion'),(266,'201.97.126.102','/auth/login',200,'2024-06-09 09:55:00',1,'Inicio de sesion'),(267,'201.97.126.102','/auth/login',200,'2024-06-09 09:55:54',1,'Inicio de sesion'),(268,'201.97.126.102','/auth/login',200,'2024-06-09 09:57:12',1,'Inicio de sesion'),(269,'201.97.126.102','/auth/login',200,'2024-06-09 09:57:12',1,'Inicio de sesion'),(270,'201.97.126.102','/auth/login',200,'2024-06-09 09:58:04',1,'Inicio de sesion'),(271,'201.97.126.102','/auth/login',200,'2024-06-09 09:58:52',1,'Inicio de sesion'),(272,'201.97.126.102','/auth/login',200,'2024-06-09 09:59:55',1,'Inicio de sesion'),(273,'201.97.126.102','/auth/login',200,'2024-06-09 10:03:09',1,'Inicio de sesion'),(274,'201.97.126.102','/auth/login',200,'2024-06-10 19:57:30',1,'Inicio de sesion'),(275,'201.97.126.102','/auth/login',200,'2024-06-10 19:59:21',1,'Inicio de sesion'),(276,'201.97.126.102','/auth/login',200,'2024-06-10 20:01:18',1,'Inicio de sesion'),(277,'201.97.126.102','/auth/login',200,'2024-06-10 20:03:31',1,'Inicio de sesion'),(278,'201.97.126.102','/auth/login',200,'2024-06-10 20:10:42',1,'Inicio de sesion'),(279,'201.97.126.102','/auth/login',200,'2024-06-10 20:30:26',1,'Inicio de sesion'),(280,'201.97.126.102','/auth/login',200,'2024-06-10 20:36:28',1,'Inicio de sesion'),(281,'::1','/auth/login',200,'2024-06-13 06:32:52',1,'Inicio de sesion'),(282,'201.97.69.5','/auth/login',200,'2024-06-16 04:03:39',1,'Inicio de sesion'),(283,'201.97.69.5','/auth/login',200,'2024-06-16 04:04:57',1,'Inicio de sesion'),(284,'201.97.69.5','/auth/login',200,'2024-06-16 04:06:10',1,'Inicio de sesion'),(285,'201.97.69.5','/auth/login',200,'2024-06-16 04:20:28',1,'Inicio de sesion'),(286,'201.97.69.5','/auth/login',200,'2024-06-16 04:21:05',1,'Bloqueo de cuenta por 3 intentos fallidos'),(287,'201.97.69.5','/auth/login',200,'2024-06-16 04:21:19',1,'Inicio de sesion'),(288,'201.97.69.5','/auth/login',200,'2024-06-16 04:21:19',1,'Inicio de sesion'),(289,'201.97.69.5','/auth/login',200,'2024-06-16 04:21:19',1,'Inicio de sesion'),(290,'201.97.69.5','/auth/login',200,'2024-06-16 04:39:32',1,'Inicio de sesion'),(291,'201.97.69.5','/auth/login',200,'2024-06-16 04:43:43',1,'Inicio de sesion'),(292,'201.97.69.5','/auth/login',200,'2024-06-16 04:50:07',1,'Inicio de sesion'),(293,'201.97.69.5','/auth/login',200,'2024-06-16 04:51:16',1,'Inicio de sesion'),(294,'201.97.69.5','/auth/login',200,'2024-06-16 04:52:21',1,'Inicio de sesion'),(295,'201.97.69.5','/auth/login',200,'2024-06-16 04:52:58',1,'Inicio de sesion'),(296,'201.97.69.5','/auth/login',200,'2024-06-16 04:53:37',1,'Inicio de sesion'),(297,'201.97.69.5','/auth/login',200,'2024-06-16 04:55:17',1,'Inicio de sesion'),(298,'201.97.69.5','/auth/login',200,'2024-06-16 04:55:44',1,'Inicio de sesion'),(299,'201.97.69.5','/auth/login',200,'2024-06-16 04:58:10',1,'Inicio de sesion'),(300,'201.97.69.5','/auth/login',200,'2024-06-16 05:00:02',1,'Inicio de sesion'),(301,'201.97.69.5','/auth/login',200,'2024-06-16 05:30:46',1,'Inicio de sesion'),(302,'201.97.69.5','/auth/login',200,'2024-06-16 05:31:57',1,'Inicio de sesion'),(303,'201.97.69.5','/auth/login',200,'2024-06-16 05:34:46',1,'Inicio de sesion'),(304,'201.97.69.5','/auth/login',200,'2024-06-16 05:35:32',1,'Inicio de sesion'),(305,'201.97.69.5','/auth/login',200,'2024-06-16 05:42:49',1,'Inicio de sesion'),(306,'201.97.69.5','/auth/login',200,'2024-06-16 05:43:14',1,'Inicio de sesion'),(307,'201.97.69.5','/auth/login',200,'2024-06-16 05:46:39',1,'Inicio de sesion'),(308,'201.97.69.5','/auth/login',200,'2024-06-16 05:47:41',1,'Inicio de sesion'),(309,'201.97.69.5','/auth/login',200,'2024-06-16 05:48:11',1,'Inicio de sesion'),(310,'201.97.69.5','/auth/login',200,'2024-06-16 05:48:46',1,'Inicio de sesion'),(311,'201.97.69.5','/auth/login',200,'2024-06-16 05:49:43',1,'Inicio de sesion'),(312,'201.97.69.5','/auth/login',200,'2024-06-16 05:54:16',1,'Inicio de sesion'),(313,'201.97.69.5','/auth/login',200,'2024-06-16 05:54:43',1,'Inicio de sesion'),(314,'201.97.69.5','/auth/login',200,'2024-06-16 05:57:39',1,'Inicio de sesion'),(315,'201.97.69.5','/auth/login',200,'2024-06-16 06:01:47',1,'Inicio de sesion'),(316,'201.97.69.5','/auth/login',200,'2024-06-16 06:04:53',1,'Inicio de sesion'),(317,'201.97.69.5','/auth/login',200,'2024-06-16 06:04:53',1,'Inicio de sesion'),(318,'201.97.69.5','/auth/login',200,'2024-06-16 06:13:47',1,'Inicio de sesion'),(319,'201.97.69.5','/auth/login',200,'2024-06-16 06:13:47',1,'Inicio de sesion'),(320,'201.97.69.5','/auth/login',200,'2024-06-16 06:17:04',1,'Inicio de sesion'),(321,'201.97.69.5','/auth/login',200,'2024-06-16 06:17:44',1,'Inicio de sesion'),(322,'201.97.69.5','/auth/login',200,'2024-06-16 06:18:16',1,'Inicio de sesion'),(323,'201.97.69.5','/auth/login',200,'2024-06-16 06:18:40',1,'Inicio de sesion'),(324,'201.97.69.5','/auth/login',200,'2024-06-16 06:19:11',1,'Inicio de sesion'),(325,'201.97.69.5','/auth/login',200,'2024-06-16 06:19:46',1,'Inicio de sesion'),(326,'201.97.69.5','/auth/login',200,'2024-06-16 06:20:28',1,'Inicio de sesion'),(327,'201.97.69.5','/auth/login',200,'2024-06-16 06:30:44',1,'Inicio de sesion'),(328,'201.97.69.5','/auth/login',200,'2024-06-16 06:32:54',1,'Inicio de sesion'),(329,'201.97.69.5','/auth/login',200,'2024-06-16 06:35:14',1,'Inicio de sesion'),(330,'201.97.69.5','/auth/login',200,'2024-06-16 06:35:55',1,'Inicio de sesion'),(331,'201.97.69.5','/auth/login',200,'2024-06-16 06:41:50',1,'Inicio de sesion'),(332,'201.97.69.5','/auth/login',200,'2024-06-16 06:52:06',1,'Inicio de sesion'),(333,'201.97.69.5','/auth/login',200,'2024-06-16 06:57:51',1,'Inicio de sesion'),(334,'201.97.69.5','/auth/login',200,'2024-06-16 07:00:05',1,'Inicio de sesion'),(335,'201.97.69.5','/auth/login',200,'2024-06-16 07:00:50',1,'Inicio de sesion'),(336,'201.97.38.227','/auth/login',200,'2024-06-23 09:39:16',1,'Inicio de sesion'),(337,'201.97.38.227','/auth/login',200,'2024-06-23 10:17:24',1,'Inicio de sesion'),(338,'201.97.101.125','/auth/login',200,'2024-06-24 00:06:12',1,'Inicio de sesion'),(339,'2806:10a6:10:5b62:75a4:fbb8:526b:2157','/auth/login',200,'2024-06-24 00:11:49',1,'Inicio de sesion'),(340,'201.97.101.125','/auth/login',200,'2024-06-24 20:14:19',1,'Inicio de sesion'),(341,'::1','/auth/login',200,'2024-06-28 18:20:35',1,'Inicio de sesion'),(342,'::1','/auth/login',200,'2024-06-28 18:29:24',1,'Inicio de sesion'),(343,'::1','/clientes/ids/1',200,'2024-06-28 18:29:35',1,'Actualización de datos del cliente'),(344,'::1','/auth/login',200,'2024-06-29 02:52:17',1,'Inicio de sesion'),(345,'::1','/auth/login',200,'2024-06-29 02:57:24',1,'Inicio de sesion'),(346,'::1','/clientes/ids/1',200,'2024-06-29 02:57:38',1,'Actualización de datos del cliente'),(347,'::1','/auth/login',200,'2024-06-29 02:58:14',1,'Inicio de sesion'),(348,'::1','/clientes/recuperar-contrasena',200,'2024-06-29 03:22:12',2,'Solicitud de recuperación de contraseña'),(349,'::1','/clientes/recuperar-contrasena',200,'2024-06-29 03:22:19',1,'Solicitud de recuperación de contraseña'),(350,'::1','/auth/login',200,'2024-07-01 22:07:43',1,'Inicio de sesion'),(351,'::1','/auth/login',200,'2024-07-02 19:49:41',1,'Inicio de sesion'),(352,'::1','/auth/login',200,'2024-07-07 06:02:26',1,'Inicio de sesion'),(353,'::1','/auth/login',200,'2024-07-07 06:05:31',1,'Inicio de sesion'),(354,'::1','/auth/login',200,'2024-07-07 19:25:56',1,'Inicio de sesion'),(355,'::1','/auth/login',200,'2024-07-08 01:59:30',1,'Inicio de sesion'),(356,'201.97.68.251','/auth/login',200,'2024-07-08 19:22:13',1,'Inicio de sesion'),(357,'201.97.68.251','/auth/login',200,'2024-07-09 18:49:23',1,'Inicio de sesion'),(358,'201.97.68.251','/auth/login',200,'2024-07-09 18:56:26',1,'Inicio de sesion'),(359,'201.97.68.251','/auth/login',200,'2024-07-09 18:59:54',1,'Inicio de sesion'),(360,'201.97.68.251','/auth/login',200,'2024-07-09 19:08:08',1,'Inicio de sesion'),(361,'::1','/clientes/',201,'2024-07-11 23:26:53',7,'Creación de nuevo cliente'),(362,'::1','/auth/login',200,'2024-07-12 09:05:50',1,'Inicio de sesion'),(363,'::1','/auth/login',200,'2024-07-12 09:10:49',1,'Inicio de sesion'),(364,'::1','/auth/login',200,'2024-07-12 20:23:21',1,'Inicio de sesion'),(365,'::1','/auth/login',200,'2024-07-12 20:38:55',1,'Inicio de sesion');

/*Table structure for table `persons` */

DROP TABLE IF EXISTS `persons`;

CREATE TABLE `persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `persons` */

insert  into `persons`(`id`,`name`,`address`,`phone`,`createdAt`,`updatedAt`) values (1,'Jose','Huejutla','7715034525','2024-03-19 03:51:35','2024-03-19 04:20:41'),(2,'Arturo','Tehuetlan','7715022357','2024-03-19 03:54:56','2024-03-19 04:19:45');

/*Table structure for table `tblcarrito` */

DROP TABLE IF EXISTS `tblcarrito`;

CREATE TABLE `tblcarrito` (
  `IdCarrito` int(10) NOT NULL AUTO_INCREMENT,
  `IdCliente` int(10) NOT NULL,
  PRIMARY KEY (`IdCarrito`),
  KEY `IdCliente` (`IdCliente`),
  CONSTRAINT `tblcarrito_ibfk_3` FOREIGN KEY (`IdCliente`) REFERENCES `tblclientes` (`intClvCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblcarrito` */

insert  into `tblcarrito`(`IdCarrito`,`IdCliente`) values (1,1),(36,4),(37,5);

/*Table structure for table `tblcategorias` */

DROP TABLE IF EXISTS `tblcategorias`;

CREATE TABLE `tblcategorias` (
  `IdCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `NombreCategoria` varchar(50) NOT NULL,
  PRIMARY KEY (`IdCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblcategorias` */

insert  into `tblcategorias`(`IdCategoria`,`NombreCategoria`) values (1,'Lentes de sol'),(2,'Lentes graduados');

/*Table structure for table `tblcita` */

DROP TABLE IF EXISTS `tblcita`;

CREATE TABLE `tblcita` (
  `IdCita` int(5) NOT NULL AUTO_INCREMENT,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `IdCliente` int(11) NOT NULL,
  `IdTipoCita` int(10) NOT NULL,
  `Costo` float(10,2) NOT NULL,
  `IdEstadoCita` int(10) NOT NULL,
  `Observaciones` varchar(255) NOT NULL,
  PRIMARY KEY (`IdCita`),
  KEY `idCliente` (`IdCliente`),
  KEY `IdTipoCita` (`IdTipoCita`),
  KEY `IdEstadoCita` (`IdEstadoCita`),
  CONSTRAINT `tblcita_ibfk_1` FOREIGN KEY (`IdCliente`) REFERENCES `tblclientes` (`intClvCliente`),
  CONSTRAINT `tblcita_ibfk_2` FOREIGN KEY (`IdTipoCita`) REFERENCES `tbltipo_cita` (`IdTipoCita`),
  CONSTRAINT `tblcita_ibfk_3` FOREIGN KEY (`IdEstadoCita`) REFERENCES `tblestado_cita` (`IdEstadoCita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblcita` */

insert  into `tblcita`(`IdCita`,`Fecha`,`Hora`,`IdCliente`,`IdTipoCita`,`Costo`,`IdEstadoCita`,`Observaciones`) values (1,'2024-03-05','14:00:00',1,1,0.00,1,'');

/*Table structure for table `tblclientes` */

DROP TABLE IF EXISTS `tblclientes`;

CREATE TABLE `tblclientes` (
  `intClvCliente` int(10) NOT NULL AUTO_INCREMENT,
  `vchNomCliente` varchar(30) NOT NULL,
  `vchAPaterno` varchar(30) NOT NULL,
  `vchAMaterno` varchar(30) NOT NULL,
  `vchCorreo` varchar(50) NOT NULL,
  `chrSexo` char(1) NOT NULL,
  `dtFechaNacimiento` date NOT NULL,
  `vchTelefono` varchar(10) NOT NULL,
  `vchPassword` varchar(200) NOT NULL,
  `vchPreguntaSecreta` varchar(255) DEFAULT NULL,
  `vchRespuestaSecreta` varchar(255) DEFAULT NULL,
  `lockedUntil` date DEFAULT NULL,
  `intentosLogin` int(11) NOT NULL DEFAULT 0,
  `codigoAle` int(11) NOT NULL,
  PRIMARY KEY (`intClvCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblclientes` */

insert  into `tblclientes`(`intClvCliente`,`vchNomCliente`,`vchAPaterno`,`vchAMaterno`,`vchCorreo`,`chrSexo`,`dtFechaNacimiento`,`vchTelefono`,`vchPassword`,`vchPreguntaSecreta`,`vchRespuestaSecreta`,`lockedUntil`,`intentosLogin`,`codigoAle`) values (1,'Julio Chavez','Salazar','Hernandez','20210709@uthh.edu.mx','M','2003-05-15','7712036621','$2a$10$8lfoFEYgtSze8VQohTmttOmunOt681XLHtTfu6dB3gKGfYRX46w..','¿El nombre de tu mejor amigo?','Angel','2024-06-16',0,0),(2,'Irving Yahir','Hernandez','Mateo','20211042@uthh.edu.mx','M','2003-05-15','7713291125','$2a$10$hqDrzXjlJEBCNXlMCUWpVeQ3npOag/g1LcQYNUYUdRon0ZOBHBN5m','¿El nombre de tu mejor amigo?','Juan',NULL,0,0),(3,'Marcos','Salazar','Pardo','Marcos@hotmail.com','M','2003-05-15','7711029322','$2a$10$C3gYo1N41gluH73SjwTFGuskpGGq4tOphVY1BOSoa4ZorD29sqeve','¿Cuál es tu color favorito?','Negro',NULL,0,0),(4,'Marcos','hernandez','salazar','Carlos0121@hotmail.com','M','2003-05-15','7721232455','$2a$10$yfmARgdt4H9gg52.VA0.cOf/RNu7VPlEBS76nOgmaZdXr82J9Dpoa','¿Cuál es tu color favorito?','azul',NULL,0,0),(5,'Ana','Felipe','Redondo','Ana@hotmail.com','F','2003-05-15','7725606965','$2a$10$oYHKk/1kWUQ9CBkvYg9q3OKahtf94bMocKFfFcEZWQ56DIdIy98hu','¿Cuál es tu comida favorita?','Mole','2024-04-16',0,0),(6,'Julio Cesar','Salazar','Hernandez','20210709@uthh.edu.mx','M','2003-05-15','7712036621','$2a$10$QzXczBcapzPwbdHxX649NublXSnr2pkTsRl2neyEjUEQJfO5kq3IG','¿Cuál es el nombre de tu mejor amigo?','angel',NULL,0,0),(7,'Itzel','Doroteo','Martinez','doroteo@gmail.com','F','2003-05-15','7871292978','$2a$10$P3h9hrjZrHgz/5rwVqruiuqlYKrQqRZH/oihdOCq.Uwcpz9JLpc4y','¿Cuál es el nombre de tu mejor amigo?','jose',NULL,0,3832);

/*Table structure for table `tblcodigos_recuperacion` */

DROP TABLE IF EXISTS `tblcodigos_recuperacion`;

CREATE TABLE `tblcodigos_recuperacion` (
  `IdCodigoRecuperacion` int(11) NOT NULL AUTO_INCREMENT,
  `Codigo` varchar(255) DEFAULT NULL,
  `HoraExpiracion` time NOT NULL,
  `Correo_electronico` varchar(255) NOT NULL,
  PRIMARY KEY (`IdCodigoRecuperacion`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblcodigos_recuperacion` */

insert  into `tblcodigos_recuperacion`(`IdCodigoRecuperacion`,`Codigo`,`HoraExpiracion`,`Correo_electronico`) values (1,'262508','23:11:39','20210709@uthh.edu.mx'),(2,'300503','22:20:53','20210709@uthh.edu.mx'),(3,'781811','22:27:51','20210709@uthh.edu.mx'),(4,'459074','13:10:48','20210709@uthh.edu.mx'),(5,'248962','13:11:20','20210709@uthh.edu.mx'),(6,'590183','07:48:38','20210709@uthh.edu.mx'),(7,'867969','20:52:07','Marcos@hotmail.com'),(8,'906870','06:05:10','Carlos0121@hotmail.com'),(9,'897721','20:52:53','20210709@uthh.edu.mx'),(10,'469439','20:54:34','Ana@hotmail.com'),(11,'520679','21:59:40','20210709@uthh.edu.mx'),(12,'691761','03:27:24','20210709@uthh.edu.mx');

/*Table structure for table `tbldetalle_pedido` */

DROP TABLE IF EXISTS `tbldetalle_pedido`;

CREATE TABLE `tbldetalle_pedido` (
  `IdDetallePedido` int(10) NOT NULL AUTO_INCREMENT,
  `IdProducto` int(10) NOT NULL,
  `IdGraduacion` int(10) NOT NULL,
  `IdTratamiento` int(10) NOT NULL,
  `Precio` float NOT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `SubTotal` float NOT NULL,
  `Cantidad` int(10) NOT NULL,
  `IdPedido` int(10) NOT NULL,
  PRIMARY KEY (`IdDetallePedido`),
  KEY `IdProductos` (`IdProducto`),
  KEY `IdVentas` (`IdPedido`),
  KEY `IdGraduacion` (`IdGraduacion`),
  KEY `IdTratamiento` (`IdTratamiento`),
  CONSTRAINT `tbldetalle_pedido_ibfk_1` FOREIGN KEY (`IdProducto`) REFERENCES `tblproductos` (`IdProducto`),
  CONSTRAINT `tbldetalle_pedido_ibfk_2` FOREIGN KEY (`IdGraduacion`) REFERENCES `tblgraduacion` (`IdGraduacion`),
  CONSTRAINT `tbldetalle_pedido_ibfk_3` FOREIGN KEY (`IdTratamiento`) REFERENCES `tbltratamiento` (`IdTratamiento`),
  CONSTRAINT `tbldetalle_pedido_ibfk_4` FOREIGN KEY (`IdPedido`) REFERENCES `tblpedido` (`IdPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbldetalle_pedido` */

/*Table structure for table `tbldetallecarrito` */

DROP TABLE IF EXISTS `tbldetallecarrito`;

CREATE TABLE `tbldetallecarrito` (
  `IdDetalle_Carrito` int(10) NOT NULL AUTO_INCREMENT,
  `IdProducto` int(10) NOT NULL,
  `IdGraduacion` int(10) NOT NULL,
  `IdTratamiento` int(10) DEFAULT NULL,
  `Precio` float NOT NULL,
  `Descripcion` varchar(255) NOT NULL,
  `SubTotal` float NOT NULL,
  `Cantidad` int(10) NOT NULL,
  `IdCarrito` int(10) NOT NULL,
  PRIMARY KEY (`IdDetalle_Carrito`),
  KEY `IdCarrito` (`IdCarrito`),
  KEY `IdTratamiento` (`IdTratamiento`),
  KEY `IdGraduacion` (`IdGraduacion`),
  KEY `IdProducto` (`IdProducto`),
  CONSTRAINT `tbldetallecarrito_ibfk_1` FOREIGN KEY (`IdCarrito`) REFERENCES `tblcarrito` (`IdCarrito`),
  CONSTRAINT `tbldetallecarrito_ibfk_2` FOREIGN KEY (`IdTratamiento`) REFERENCES `tbltratamiento` (`IdTratamiento`),
  CONSTRAINT `tbldetallecarrito_ibfk_3` FOREIGN KEY (`IdGraduacion`) REFERENCES `tblgraduacion` (`IdGraduacion`),
  CONSTRAINT `tbldetallecarrito_ibfk_4` FOREIGN KEY (`IdProducto`) REFERENCES `tblproductos` (`IdProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbldetallecarrito` */

insert  into `tbldetallecarrito`(`IdDetalle_Carrito`,`IdProducto`,`IdGraduacion`,`IdTratamiento`,`Precio`,`Descripcion`,`SubTotal`,`Cantidad`,`IdCarrito`) values (101,1,1,1,200,'Lentes de sol 100% original',200,1,37);

/*Table structure for table `tbldirec_client` */

DROP TABLE IF EXISTS `tbldirec_client`;

CREATE TABLE `tbldirec_client` (
  `IdDirec_Client` int(10) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(255) NOT NULL,
  `CP` int(10) NOT NULL,
  `Municipio` varchar(255) NOT NULL,
  `Colonia` varchar(255) NOT NULL,
  `Calle` varchar(255) NOT NULL,
  `NumExt` varchar(20) NOT NULL,
  `NumInt` varchar(20) DEFAULT NULL,
  `Referencia` varchar(255) NOT NULL,
  `IdCliente` int(10) NOT NULL,
  PRIMARY KEY (`IdDirec_Client`),
  KEY `IdCliente` (`IdCliente`),
  CONSTRAINT `tbldirec_client_ibfk_1` FOREIGN KEY (`IdCliente`) REFERENCES `tblclientes` (`intClvCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbldirec_client` */

insert  into `tbldirec_client`(`IdDirec_Client`,`Estado`,`CP`,`Municipio`,`Colonia`,`Calle`,`NumExt`,`NumInt`,`Referencia`,`IdCliente`) values (1,'Hidalgo',43000,'Huejutla','Valle del encinal','Los tulipanes','','','Enfrente del poso',1),(2,'Hidalgo',43000,'Huejutla de Reyes','Valle del Encinal','palmas','S/N','32','Casa negra',4),(3,'Hidalgo',43000,'Huejutla de Reyes','Valle del Encinal','palmas','S/N','32','Casa blanca',5),(4,'Hidalgo',43000,'Huejutla de Reyes','Valle del Encinal','palmas','S/N','32','adssadaasdasd',1);

/*Table structure for table `tbldirec_emp` */

DROP TABLE IF EXISTS `tbldirec_emp`;

CREATE TABLE `tbldirec_emp` (
  `IdDirec_Emp` int(10) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(255) NOT NULL,
  `Municipio` varchar(255) NOT NULL,
  `Colonia` varchar(255) NOT NULL,
  `Calle` varchar(255) NOT NULL,
  `CP` int(10) NOT NULL,
  `IdEmpleado` int(10) NOT NULL,
  PRIMARY KEY (`IdDirec_Emp`),
  KEY `IdEmpleado` (`IdEmpleado`),
  CONSTRAINT `tbldirec_emp_ibfk_1` FOREIGN KEY (`IdEmpleado`) REFERENCES `tblempleado` (`intClvEmpleado`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbldirec_emp` */

insert  into `tbldirec_emp`(`IdDirec_Emp`,`Estado`,`Municipio`,`Colonia`,`Calle`,`CP`,`IdEmpleado`) values (1,'Hidalgo','Huejutla','Aviacion','Las palomas',43000,1);

/*Table structure for table `tblempleado` */

DROP TABLE IF EXISTS `tblempleado`;

CREATE TABLE `tblempleado` (
  `intClvEmpleado` int(11) NOT NULL AUTO_INCREMENT,
  `vchNombre` varchar(255) NOT NULL,
  `vchAPaterno` varchar(255) NOT NULL,
  `vchAMaterno` varchar(255) NOT NULL,
  `vchCorreo` varchar(100) NOT NULL,
  `dtFechaNacimiento` datetime NOT NULL,
  `vchTelefono` varchar(50) NOT NULL,
  `chrSexo` char(1) NOT NULL,
  `EstadoEmp` enum('DISPONIBLE','OCUPADO','NO DISPONIBLE') NOT NULL,
  `vchPassword` varchar(200) NOT NULL,
  `vchPreguntaSecreta` varchar(100) NOT NULL,
  `vchRespuestaSecreta` varchar(100) NOT NULL,
  PRIMARY KEY (`intClvEmpleado`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblempleado` */

insert  into `tblempleado`(`intClvEmpleado`,`vchNombre`,`vchAPaterno`,`vchAMaterno`,`vchCorreo`,`dtFechaNacimiento`,`vchTelefono`,`chrSexo`,`EstadoEmp`,`vchPassword`,`vchPreguntaSecreta`,`vchRespuestaSecreta`) values (1,'Juan','Pérez','López','juanperez@hotmail.com','1990-01-01 00:00:00','1234567890','M','DISPONIBLE','$2a$10$T39i2ANDOOZRg0d1K28caOPgXN4D9EC2tD9GPvfsNETFH.TuPvNaS','¿Cuál es el nombre de tu mascota?','Firulais'),(2,'Julio Cesar','Salazar','Hernandez','julio@hotmail.com','2003-05-15 06:00:00','7712036621','M','DISPONIBLE','$2a$10$OAUvWKIv8W16S.oCbm129.y7FPjvuNPXrScoEwkrKoKES.dzbSoMe','Mejor amigo','Angel'),(3,'Maria','Salazar','Concepcion','Maria@hotmail.com','2003-05-15 00:00:00','7971232769','F','DISPONIBLE','$2a$10$IfoShBssqCvDnIhuKZ90be8fLRTXRX9PxQRIvsT/UDTRMEe4SWXIu','¿Cuál es tu color favorito?','Azul'),(4,'Jesus','Bautista','Moreno','jesusbautistam845@gmail.com','2002-05-01 00:00:00','7713217322','M','DISPONIBLE','$2a$10$pztaIPRe5uvdMxxv7QCJWurnEaCo78BJzPdCjr.yFlwhFRYrm.ciK','¿Cuál es tu color favorito?','Verde'),(5,'Irving Yahir','Hernandez','Mateo','20211042@uthh.edu.mx','2003-05-15 00:00:00','7713291125','M','DISPONIBLE','$2a$10$.aknGdV9EOgsStQA4tNpsuCMyj8FD8tPY5uUIdUkRuRKhZNmNqlwm','¿Cuál es tu color favorito?','Azul');

/*Table structure for table `tblestado_cita` */

DROP TABLE IF EXISTS `tblestado_cita`;

CREATE TABLE `tblestado_cita` (
  `IdEstadoCita` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`IdEstadoCita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblestado_cita` */

insert  into `tblestado_cita`(`IdEstadoCita`,`Nombre`) values (1,'Solicitud');

/*Table structure for table `tblestado_envio` */

DROP TABLE IF EXISTS `tblestado_envio`;

CREATE TABLE `tblestado_envio` (
  `IdEstado_Envio` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`IdEstado_Envio`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblestado_envio` */

insert  into `tblestado_envio`(`IdEstado_Envio`,`Nombre`) values (1,'En camino'),(2,'Entregado'),(3,'Devuelto');

/*Table structure for table `tblestado_pedido` */

DROP TABLE IF EXISTS `tblestado_pedido`;

CREATE TABLE `tblestado_pedido` (
  `IdEstado_Pedido` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`IdEstado_Pedido`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblestado_pedido` */

insert  into `tblestado_pedido`(`IdEstado_Pedido`,`Nombre`) values (1,'Pendiente'),(2,'En proceso'),(3,'Enviado');

/*Table structure for table `tblgraduacion` */

DROP TABLE IF EXISTS `tblgraduacion`;

CREATE TABLE `tblgraduacion` (
  `IdGraduacion` int(11) NOT NULL AUTO_INCREMENT,
  `ValorGraduacion` varchar(50) NOT NULL,
  `Precio` float NOT NULL,
  PRIMARY KEY (`IdGraduacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblgraduacion` */

insert  into `tblgraduacion`(`IdGraduacion`,`ValorGraduacion`,`Precio`) values (1,'Monofocal',0),(2,'Progresivo',2000),(3,'Sin graduacion',0);

/*Table structure for table `tblgraduaciones` */

DROP TABLE IF EXISTS `tblgraduaciones`;

CREATE TABLE `tblgraduaciones` (
  `IdGraduacion` int(11) NOT NULL AUTO_INCREMENT,
  `ValorGraduacion` varchar(50) NOT NULL,
  PRIMARY KEY (`IdGraduacion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblgraduaciones` */

insert  into `tblgraduaciones`(`IdGraduacion`,`ValorGraduacion`) values (1,'Sin graduación'),(2,'Miopía');

/*Table structure for table `tblmarcas` */

DROP TABLE IF EXISTS `tblmarcas`;

CREATE TABLE `tblmarcas` (
  `IdMarca` int(11) NOT NULL AUTO_INCREMENT,
  `NombreMarca` varchar(50) NOT NULL,
  PRIMARY KEY (`IdMarca`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblmarcas` */

insert  into `tblmarcas`(`IdMarca`,`NombreMarca`) values (1,'Casio'),(2,'Ray-Ban'),(3,'Oakley');

/*Table structure for table `tblmetodopago` */

DROP TABLE IF EXISTS `tblmetodopago`;

CREATE TABLE `tblmetodopago` (
  `IdTipoPago` int(11) NOT NULL AUTO_INCREMENT,
  `TipoPago` varchar(255) DEFAULT NULL,
  `vchDescripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdTipoPago`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblmetodopago` */

insert  into `tblmetodopago`(`IdTipoPago`,`TipoPago`,`vchDescripcion`) values (1,'MercadoPago','MercadoPago Debito'),(2,'MercadoPagoCredito','MercadoPago Credito');

/*Table structure for table `tblpaqueteria` */

DROP TABLE IF EXISTS `tblpaqueteria`;

CREATE TABLE `tblpaqueteria` (
  `IdPaqueteria` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`IdPaqueteria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblpaqueteria` */

insert  into `tblpaqueteria`(`IdPaqueteria`,`Nombre`) values (1,'DHL'),(2,'Estafeta'),(3,'FedEx');

/*Table structure for table `tblpedido` */

DROP TABLE IF EXISTS `tblpedido`;

CREATE TABLE `tblpedido` (
  `IdPedido` int(10) NOT NULL AUTO_INCREMENT,
  `Fecha_Hora` datetime NOT NULL,
  `IdCliente` int(10) NOT NULL,
  `Numero_Guia` int(10) NOT NULL,
  `TotalPe` float NOT NULL,
  `IdMetodoPago` int(10) NOT NULL,
  `IdEstado_Pedido` int(10) NOT NULL,
  `IdEstado_Envio` int(10) NOT NULL,
  `IdDireccion` int(10) NOT NULL,
  `IdPaqueteria` int(10) NOT NULL,
  `IdEmpleado` int(10) NOT NULL,
  PRIMARY KEY (`IdPedido`),
  KEY `IdMetodoPago` (`IdMetodoPago`),
  KEY `IdCliente` (`IdCliente`),
  KEY `IdEstado_Pedido` (`IdEstado_Pedido`),
  KEY `IdEstado_Envio` (`IdEstado_Envio`),
  KEY `IdDireccion` (`IdDireccion`),
  KEY `IdPaqueteria` (`IdPaqueteria`),
  KEY `IdEmpleado` (`IdEmpleado`),
  CONSTRAINT `tblpedido_ibfk_1` FOREIGN KEY (`IdCliente`) REFERENCES `tblclientes` (`intClvCliente`),
  CONSTRAINT `tblpedido_ibfk_3` FOREIGN KEY (`IdMetodoPago`) REFERENCES `tblmetodopago` (`IdTipoPago`),
  CONSTRAINT `tblpedido_ibfk_4` FOREIGN KEY (`IdEstado_Pedido`) REFERENCES `tblestado_pedido` (`IdEstado_Pedido`),
  CONSTRAINT `tblpedido_ibfk_5` FOREIGN KEY (`IdEstado_Envio`) REFERENCES `tblestado_envio` (`IdEstado_Envio`),
  CONSTRAINT `tblpedido_ibfk_6` FOREIGN KEY (`IdDireccion`) REFERENCES `tbldirec_client` (`IdDirec_Client`),
  CONSTRAINT `tblpedido_ibfk_7` FOREIGN KEY (`IdPaqueteria`) REFERENCES `tblpaqueteria` (`IdPaqueteria`),
  CONSTRAINT `tblpedido_ibfk_8` FOREIGN KEY (`IdEmpleado`) REFERENCES `tblempleado` (`intClvEmpleado`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblpedido` */

insert  into `tblpedido`(`IdPedido`,`Fecha_Hora`,`IdCliente`,`Numero_Guia`,`TotalPe`,`IdMetodoPago`,`IdEstado_Pedido`,`IdEstado_Envio`,`IdDireccion`,`IdPaqueteria`,`IdEmpleado`) values (13,'2024-04-16 11:01:35',1,12345,0,1,2,2,1,1,1),(14,'2024-06-30 12:05:22',5,12345,0,1,2,2,1,1,1);

/*Table structure for table `tblproductos` */

DROP TABLE IF EXISTS `tblproductos`;

CREATE TABLE `tblproductos` (
  `IdProducto` int(10) NOT NULL AUTO_INCREMENT,
  `IdEmpleado` int(10) DEFAULT NULL,
  `vchNombreProducto` varchar(50) NOT NULL,
  `vchNomImagen` varchar(250) NOT NULL,
  `vchDescripcion` varchar(100) NOT NULL,
  `Existencias` float DEFAULT NULL,
  `IdCategoria` int(10) DEFAULT NULL,
  `IdMarca` int(10) DEFAULT NULL,
  `Precio` decimal(10,0) DEFAULT NULL,
  `EnOferta` tinyint(1) NOT NULL DEFAULT 0,
  `PrecioOriginal` decimal(10,2) DEFAULT NULL,
  `PrecioOferta` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`IdProducto`),
  KEY `fk_producto_categoria` (`IdCategoria`),
  KEY `fk_producto_marca` (`IdMarca`),
  KEY `IdEmpleado` (`IdEmpleado`),
  CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`IdCategoria`) REFERENCES `tblcategorias` (`IdCategoria`),
  CONSTRAINT `fk_producto_marca` FOREIGN KEY (`IdMarca`) REFERENCES `tblmarcas` (`IdMarca`),
  CONSTRAINT `tblproductos_ibfk_1` FOREIGN KEY (`IdEmpleado`) REFERENCES `tblempleado` (`intClvEmpleado`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblproductos` */

insert  into `tblproductos`(`IdProducto`,`IdEmpleado`,`vchNombreProducto`,`vchNomImagen`,`vchDescripcion`,`Existencias`,`IdCategoria`,`IdMarca`,`Precio`,`EnOferta`,`PrecioOriginal`,`PrecioOferta`) values (1,1,'ViewEase Ultra\n','https://res.cloudinary.com/dlrixqhln/image/upload/v1711732034/Productos/m3fxqx7asxurxrqwmgno.png','Lentes de sol 100% original',0,1,2,200,0,200.00,100.00),(2,1,'OptiFocus Precision\n','https://res.cloudinary.com/dlrixqhln/image/upload/v1712101379/Productos/wpvmdjfgo0qiptuqnlbr.jpg',' El lente Optifocus Precision es una opción ideal para aquellos que buscan una visión clara y precis',3,2,1,300,1,NULL,150.00),(3,1,'SightMaster Flex\n','https://res.cloudinary.com/dlrixqhln/image/upload/v1711335343/xl8sg7hspea9dyhtqyxn.jpg','Lentes opticos xd',1,2,2,200,1,NULL,150.00),(4,1,'SunGuard Elite\n','https://res.cloudinary.com/dlrixqhln/image/upload/v1711335343/xl8sg7hspea9dyhtqyxn.jpg','LENTES XD',0,1,1,100,1,NULL,75.00),(7,1,'VisionClear Pro','http://res.cloudinary.com/dlrixqhln/image/upload/v1711673031/ghp115xuvrs92mpwb9cp.jpg','sasaas',0,2,2,500,0,500.00,350.00),(8,NULL,'Lents','http://res.cloudinary.com/dlrixqhln/image/upload/v1711673031/ghp115xuvrs92mpwb9cp.jpg','sdadssadasd',6,1,1,250,0,NULL,200.00),(9,NULL,'Lents','https://res.cloudinary.com/dlrixqhln/image/upload/v1711335343/xl8sg7hspea9dyhtqyxn.jpg','sdadssadasd',3,1,1,250,0,NULL,NULL),(10,NULL,'Lents','http://res.cloudinary.com/dlrixqhln/image/upload/v1711673031/ghp115xuvrs92mpwb9cp.jpg','sdadssadasd',0,1,1,250,0,NULL,NULL),(11,NULL,'Lents','http://res.cloudinary.com/dlrixqhln/image/upload/v1711673031/ghp115xuvrs92mpwb9cp.jpg','sdadssadasd',5,1,1,250,0,NULL,NULL),(12,NULL,'Lentsa reyescar','https://res.cloudinary.com/dlrixqhln/image/upload/v1717755844/Productos/cuqwsqenjopvfezxdxon.png','Los lentes ReyesCar son sinónimo de elegancia, innovación y calidad. Esta marca ha logrado posiciona',5,1,1,250,1,250.00,100.00),(13,NULL,'Lents','http://res.cloudinary.com/dlrixqhln/image/upload/v1711673031/ghp115xuvrs92mpwb9cp.jpg','sdadssadasd',5,1,1,250,0,NULL,NULL),(14,NULL,'Lents','http://res.cloudinary.com/dlrixqhln/image/upload/v1711673183/bo5d65jbswyklij8ipsj.jpg','sdadssadasd',5,1,1,250,0,NULL,NULL),(15,NULL,'Lents reyos','https://res.cloudinary.com/dlrixqhln/image/upload/v1717756019/Productos/hhxaielqhinuxwkuhdgq.jpg','sdadssadasd',5,1,1,250,1,250.00,150.00),(16,NULL,'Lents','http://res.cloudinary.com/dlrixqhln/image/upload/v1711871785/Productos/svdmxl5fhpyc1oolwu9c.png','sdadssadasd',5,1,1,250,0,250.00,50.00);

/*Table structure for table `tbltipo_cita` */

DROP TABLE IF EXISTS `tbltipo_cita`;

CREATE TABLE `tbltipo_cita` (
  `IdTipoCita` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Costo` float NOT NULL,
  PRIMARY KEY (`IdTipoCita`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbltipo_cita` */

insert  into `tbltipo_cita`(`IdTipoCita`,`Nombre`,`Costo`) values (1,'Examen de vista',100);

/*Table structure for table `tbltratamiento` */

DROP TABLE IF EXISTS `tbltratamiento`;

CREATE TABLE `tbltratamiento` (
  `IdTratamiento` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Precio` float NOT NULL,
  PRIMARY KEY (`IdTratamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tbltratamiento` */

insert  into `tbltratamiento`(`IdTratamiento`,`Nombre`,`Precio`) values (1,'Sin tratamiento',0),(2,'Antireflejante',1620),(3,'Antireflejante con filtro contra luz azul',1700);

/*Table structure for table `tblvaloracion` */

DROP TABLE IF EXISTS `tblvaloracion`;

CREATE TABLE `tblvaloracion` (
  `IdVaLPro` int(11) NOT NULL AUTO_INCREMENT,
  `Comentario` varchar(255) DEFAULT NULL,
  `Puntuacion` int(11) NOT NULL,
  `IdProducto` int(11) NOT NULL,
  PRIMARY KEY (`IdVaLPro`),
  KEY `IdProducto` (`IdProducto`),
  CONSTRAINT `tblvaloracion_ibfk_1` FOREIGN KEY (`IdProducto`) REFERENCES `tblproductos` (`IdProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tblvaloracion` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
