-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 07, 2017 at 08:25 PM
-- Server version: 5.7.20-0ubuntu0.17.10.1
-- PHP Version: 7.1.11-0ubuntu0.17.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `cheesewheels`
--

DROP TABLE IF EXISTS `cheesewheels`;
CREATE TABLE `cheesewheels` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` int(10) UNSIGNED NOT NULL,
  `price` decimal(14,2) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cheesewheels`
--

INSERT INTO `cheesewheels` (`id`, `type`, `weight`, `price`, `user_id`) VALUES
(1, 'Gouda', 12013, '91.22', 1),
(2, 'Gouda', 11302, '87.22', 2),
(3, 'Gouda', 10992, '76.00', NULL),
(4, 'Emmentaler', 21032, '287.01', NULL),
(5, 'Emmentaler', 20000, '222.22', NULL),
(6, 'Emmentaler', 8321, '99.99', 1),
(7, 'Feta', 3121, '45.21', 3),
(8, 'Feta', 2991, '42.21', 2),
(11, 'Feta', 2891, '41.22', NULL),
(12, 'Feta', 921, '16.23', 4),
(13, 'Feta', 3321, '47.26', NULL),
(14, 'Appenzeller', 8112, '131.22', 1),
(15, 'Limburger', 1290, '10.11', 3),
(16, 'Limburger', 1410, '12.51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cheesewheels_cows`
--

DROP TABLE IF EXISTS `cheesewheels_cows`;
CREATE TABLE `cheesewheels_cows` (
  `cheesewheel_id` int(10) UNSIGNED NOT NULL,
  `cow_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cheesewheels_cows`
--

INSERT INTO `cheesewheels_cows` (`cheesewheel_id`, `cow_id`) VALUES
(1, 1),
(1, 3),
(1, 5),
(1, 6),
(2, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6),
(4, 2),
(4, 3),
(4, 4),
(4, 6),
(5, 1),
(5, 2),
(6, 3),
(7, 1),
(7, 4),
(8, 4),
(8, 5),
(8, 1),
(8, 4),
(11, 1),
(11, 4),
(12, 2),
(12, 4),
(12, 6),
(13, 1),
(13, 4),
(14, 6),
(3, 7),
(4, 7),
(11, 7),
(16, 7),
(15, 3),
(15, 1),
(15, 5),
(16, 4),
(16, 6);

-- --------------------------------------------------------

--
-- Table structure for table `cows`
--

DROP TABLE IF EXISTS `cows`;
CREATE TABLE `cows` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('Bull','Bullock','Cow','Heifer') COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cows`
--

INSERT INTO `cows` (`id`, `name`, `gender`, `color`) VALUES
(1, 'Elsa', 'Heifer', 'ginger'),
(2, 'Fred', 'Bullock', 'black/white'),
(3, 'Rudolf', 'Bull', 'brown'),
(4, 'Schimanski', 'Bull', 'black'),
(5, 'Helga', 'Cow', 'brown'),
(6, 'Sour Cream', 'Cow', 'white'),
(7, 'Tequila', 'Heifer', 'red');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `registered` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `registered`) VALUES
(1, 'Cheese Lover 1', '2017-08-07 23:19:22'),
(2, 'Peter Limburger', '2017-07-12 00:00:00'),
(3, 'Frau Brie', '2016-12-13 04:17:08'),
(4, 'Rock Vor!', '2017-08-01 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cheesewheels`
--
ALTER TABLE `cheesewheels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `cheesewheels_cows`
--
ALTER TABLE `cheesewheels_cows`
  ADD KEY `cheesewheel_id` (`cheesewheel_id`),
  ADD KEY `cow_id` (`cow_id`);

--
-- Indexes for table `cows`
--
ALTER TABLE `cows`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cheesewheels`
--
ALTER TABLE `cheesewheels`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `cows`
--
ALTER TABLE `cows`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `cheesewheels_cows`
--
ALTER TABLE `cheesewheels_cows`
  ADD CONSTRAINT `cheesewheels_cows_ibfk_1` FOREIGN KEY (`cheesewheel_id`) REFERENCES `cheesewheels` (`id`),
  ADD CONSTRAINT `cheesewheels_cows_ibfk_2` FOREIGN KEY (`cow_id`) REFERENCES `cows` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
