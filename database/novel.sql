-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2025 at 11:36 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `novel`
--

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `name` varchar(50) NOT NULL,
  `true-name` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `rank` varchar(50) NOT NULL,
  `class` varchar(50) NOT NULL,
  `aspect` varchar(50) NOT NULL,
  `flaw` varchar(50) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`name`, `true-name`, `age`, `status`, `rank`, `class`, `aspect`, `flaw`, `image`) VALUES
('Sunless', 'Lost From Light', '26(current)', 'Alive', 'Saint(Transcendent)', 'Terror', 'Divine', 'Clear Conscience', '/assets/sunny_illustration.png'),
('Nephis', 'Changing Star', '26(current)', 'Alive', 'Saint(Transcendent)', 'Titan', 'Divine', 'Pristine Soul', '/assets/nephis_illustration.png'),
('Cassia', 'Song of the Fallen', '26(current)', 'Alive', 'Saint(Transcendent)', '――', 'Sacred', 'Blindness', '/assets/cassie_illustration.png'),
('Athena', 'Raised by Wolves', '28(current)', 'Alive', 'Saint(Transcendent)', '――', 'Transcendent', 'Glutton', '/assets/effie_illustration.png'),
('Jet', '――', '35(current)', 'Active', 'Saint(Transcendent)', '――', 'Supreme', 'You are dead', '/assets/jet_illustration.png'),
('Kai', 'Nightingale', '28(current)', 'Alive', 'Saint(Transcendent)', '――', 'Ascended', 'Lie Sense', '/assets/kai_illustration.png'),
('Mordret', '――', '30(current)', 'Alive', 'Saint(Transcendent)', 'Titan', 'Divine', '――', '/assets/mordret_illustration.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
