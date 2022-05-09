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
-- Table structure for table `register_db`
--

DROP TABLE IF EXISTS `register_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(450) NOT NULL,
  `email` varchar(450) NOT NULL,
  `password` varchar(450) NOT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register_db`
--

LOCK TABLES `register_db` WRITE;
/*!40000 ALTER TABLE `register_db` DISABLE KEYS */;
INSERT INTO `register_db` VALUES (1,'ajith','ajith@gmail.com','$2b$10$lR2SBJHzZWReznBfy2IK3OYrslRTBjSelecYC4TgsHTPr0nBCYBfm'),(2,'nithish','hi@gmail.com','$2b$10$002y7Eskcp/pjWZEShznNuRE2.UjKFoCvmtxbLU8t7.3qAaGseV5O'),(3,'praveen','praveen@gmail.com','$2b$10$IUosyXMxFnMd3Sq9RNW7SuY/rfZo0mhn2MQMho0xomen1Ss.dMzKa'),(4,'ajith','krnithishkumar14@gmail.com','$2b$10$/NAc3.WYTxGlWGZluIQ7C.sWJos8Czv9oh9hZScnWPtptHM.zke9C'),(5,'gddgd','abcd@gmail.com','$2b$10$VTO2XnkXlYkdy9RzfqegGeWAKydZmBaMiFgUEgDms9LHaS3Z1AhdG'),(6,'dgd','','$2b$10$Hwm5WZ2gvO0JF0g1DWdkbuAgZW7hjwECjlCPgDhLY2j7DmCOPj0GC'),(7,'dgd','','$2b$10$ZfSmdmlN8CJ7dwa9RV8ZTemvgTxJrJclvqVeEhGMDP1hNgBoWw0V.'),(8,'nithishkumar','krnithishkumar14@gmail.com','$2b$10$O1LBk/eFnOz3uCJgVGjlkuxkidSpwN6.GJREaiJfdp22Pj0cx9xQK'),(9,'nithishkumar','krnithishkumar14@gmail.com','$2b$10$0li1cZcfk87RnZMXkE30J.PHU/01.KFsHkToDDG.uoh.koUlNCnnS'),(10,'deds','hi@gmail.com','$2b$10$VFWUTiq00kYM2y.ATPPEl.ou0AOsBOrqoHIrzEryLRiOezxVQZcO2'),(11,'Nithish','Nithishkumar141@outlook.com','$2b$10$Pr9skVWzfjwiVeLDIkuN9eA4OL9WbtEFVISUV2825jJ67Ihq8CblW'),(12,'praveen','praveen@gmail.com','$2b$10$BC73yMYmDr4RM0BmxYeBvuGea9Gjb3W8G5dOPu5LnroyTxcU7vfdG'),(13,'ok','ok@gmail.com','$2b$10$A4o31YshA1OBzXUzdT1Ro.l5zbGGYvHTVH0AJl6DpbdjEqbNSXsaC'),(14,'done','done@gmail.com','$2b$10$Wry3KoYp1GTNLWdPYzhVP.zuwryF5W/Xga2giYBYQGVLDwwPhwWwi'),(15,'done','done@gmail.com','$2b$10$ML.pHVKzpGdboBvuqoNYn.eSpddwiHfEyOJ1n1M2kvH33wuclRKzy'),(16,'abcd','abcdef@gmail.com','$2b$10$YM9ha8dqr/ZE9ozaAHaSDuez7dx2XN2TF6KboLnGxYccvKHJktkzG'),(17,'kikiki','kiki@gmail.com','$2b$10$oxv7of9H8Srrt5UrxxjmHOi4ZWauUmVeXD21xTZhD1z9WVKW6h5r6'),(18,'nithu','nithu@gmail.com','$2b$10$Zu8HJP/dePOxU1kAJNp3JeodU2KoZ1sYFGG69M6i3FBW//m0HeF6O'),(19,'hihihihi','hi@gmail.com','$2b$10$fu1KWxoksUraYsps3VnoR.mwRtytBhpQDp21NojirGshuIw7zhl5q'),(20,'lolo','lol@gmail.com','$2b$10$K7pxAe/tjEtjPdrivf70AegpKU6LQSKMjM43NSUjrT.rPEIu9dkbG'),(21,'Nithish','Nithishkumar141@outlook.com','$2b$10$IkK.4ioEz8pI.MfaVnOAueYLgf737TnCodSA1sE5xkANU/3ov3aIm');
/*!40000 ALTER TABLE `register_db` ENABLE KEYS */;
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
