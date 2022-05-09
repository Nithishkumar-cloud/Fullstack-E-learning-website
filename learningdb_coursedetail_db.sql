-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: learningdb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coursedetail_db`
--

DROP TABLE IF EXISTS `coursedetail_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coursedetail_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `coursename` varchar(45) NOT NULL,
  `Idnum` varchar(45) NOT NULL,
  `Instructors` varchar(45) NOT NULL,
  `duration` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursedetail_db`
--

LOCK TABLES `coursedetail_db` WRITE;
/*!40000 ALTER TABLE `coursedetail_db` DISABLE KEYS */;
INSERT INTO `coursedetail_db` VALUES (1,'ajith1','Nithishkumar141@outlook.com','Python Tutorial','1003','John Doe','8 months'),(2,'','','Python Tutorial','1003','John Doe','8 months'),(3,'','','Python Tutorial','1003','John Doe','8 months'),(4,'','','Python Tutorial','1003','John Doe','8 months'),(5,'','','Python Tutorial','1003','John Doe','8 months'),(6,'','','Python Tutorial','1003','John Doe','8 months'),(7,'','','Python Tutorial','1003','John Doe','8 months'),(8,'ajit','msajithkumar75@gmail.com','Python Tutorial','1003','John Doe','8 months'),(9,'ajit','praveen@gmail.com','Nodejs Basics','1002','John Doe','12 months'),(10,'nithishkumar','praveen@gmail.com','Python Tutorial','1003','John Doe','8 months'),(11,'nithishkumar','praveen@gmail.com','Automation testing','1004','John Doe','6 months'),(12,'nithishkumar','praveen@gmail.com','Reactjs Basics','1001','John Doe','10 months'),(13,'nithishkumar','praveen@gmail.com','Reactjs Basics','1001','John Doe','10 months'),(14,'Nithish','abcd@gmail.com','Devops Manual','1006','John Doe','11 months'),(15,'nithishkumar','ajith@gmail.com','Nodejs Basics','1002','John Doe','12 months'),(16,'nithishkumar','krnithishkumar14@gmail.com','Nodejs Basics','1002','John Doe','12 months');
/*!40000 ALTER TABLE `coursedetail_db` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09 19:34:51
