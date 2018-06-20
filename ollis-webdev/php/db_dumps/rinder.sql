-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 19, 2018 at 04:08 PM
-- Server version: 5.7.22-0ubuntu18.04.1
-- PHP Version: 7.2.5-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rinder`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `user1_id` int(10) UNSIGNED NOT NULL,
  `user2_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`user1_id`, `user2_id`) VALUES
(4, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 6);

-- --------------------------------------------------------

--
-- Table structure for table `friend_requests`
--

CREATE TABLE `friend_requests` (
  `user1_id` int(10) UNSIGNED NOT NULL,
  `user2_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `friend_requests`
--

INSERT INTO `friend_requests` (`user1_id`, `user2_id`) VALUES
(6, 1),
(3, 4),
(2, 5),
(3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `created_at`, `modified_at`, `user_id`) VALUES
(29, 'Moo!', 'I have joined the community. I am a happy cow.', '2017-07-27 21:17:45', '2017-07-27 21:17:45', 1),
(30, 'Big Haystack Party on Saturday', 'Fellow Rinder.\r\n\r\nTomorrow will mark the anniversary of our famous German festivity, the \"Oh leck, en Haystack!\" party.\r\nAs always, there will be plenty to chew on. Start at 6pm.', '2017-07-27 21:22:18', '2017-07-27 21:22:18', 2),
(34, 'Calling in sick today', 'Fellow moosters. I can\'t make it to the hay today. I must have eaten something rotten yesterday.', '2017-07-27 21:43:04', '2017-07-27 21:43:04', 6),
(35, 'Breaking News! Grass greener on other side!', 'Yes, it\'s true. I\'ve seen it. It\'s actually greener. If only we could get across this nasty river!', '2017-07-30 20:03:02', '2017-07-30 20:03:02', 1),
(36, 'Free Swimming Lessons', 'I lately befriended a manatee who offered to give free swimming lessons to everyone interested.\nIf you want to join, drop me a line.', '2017-07-30 20:05:00', '2017-07-30 20:05:00', 2),
(37, 'Milk price in free fall', 'Dear comrades,\r\n\r\nthere\'s no way out. We have to join the syndicate or well be exploited until the end of time, our udders sucked dry and our horns blunt and weak.\r\n\r\nCows United!', '2017-07-30 20:06:52', '2017-07-30 20:06:52', 3),
(38, 'Wanted: Tanning Bed', 'Have you noticed my taint recently? I\'m white as milk! This summer is so cloudy that even my black spots are beginning to fade.\r\nIf anycow has a tanning bed for sale, I\'m glad to pay copious amounts of hay. Just drop me a line ... once this bastard finished the messaging and comment features.', '2017-08-01 19:06:22', '2017-08-01 19:06:22', 1),
(39, 'URGENT! Sober again but milk still spoilt', 'Does anycow know a remendy against after party vodka milk syndrome?\r\nI MUST give tasty milk again ASAP or that fat ass Mr. Murdoch will turn me into a crappy cheap meat cow for LIDL.', '2017-08-01 19:09:13', '2017-08-01 19:09:13', 2),
(40, 'Trump includes cows in travel-ban!', 'After muslims from several countries, none of which were involved in serious terroristic activities, the POTAS has extended his ban to cattle of all kinds.\r\nDidn\'t want to visit that crappy piece of peat bog anyway.', '2017-08-01 19:11:12', '2017-08-01 19:11:12', 3),
(41, 'Vaccicide! Big BBQ today!', 'Sharpen your horns and take to the streets.\r\nThere will be a big BBQ in the city tonight.\r\nWe must stop this carnage!\r\nWe must save our brothers!', '2017-08-03 18:55:24', '2017-08-03 18:55:24', 1),
(42, 'Song of the day: No milk today', 'Herman\'s Hermits did it again. The new cow chart number one hit is: No milk today!', '2017-08-03 19:03:22', '2017-08-03 19:03:22', 2),
(43, 'Roxette not vegan!', 'I just turned on the radio and there was this song by Roxette called: \"Milk And Toast And Honey\".\r\nI am a vegan cow! I would never consider putting honey on my toast!\r\nIt is an offence to bees and an offence to all species everywhere.\r\nBoycott Roxette!', '2017-08-03 19:07:21', '2017-08-03 19:07:21', 3),
(44, 'My first post!', 'I just wanted to let everyone know that I just wrote my first post.\r\nGo forth and post!', '2017-08-03 19:08:19', '2017-08-03 19:08:19', 4),
(45, '我是家牛', '丑是地支之一，通常當為地支的次位，其前為子、其後為寅。丑月為農曆12月，丑時為二十四小時制的01:00至03:00，在方向上指東北偏北。\r\n五行裡丑代表土，陰陽學說裡丑為陰。', '2017-08-03 19:11:32', '2017-08-03 19:11:32', 6),
(47, 'Raindrops are falling on my horn', 'Please don\'t desturb me today. Under no circumstances must I be distrurbed. Any disturbance will be retaliated with the vengeance of my stomach!', '2017-08-08 16:25:47', '2017-08-08 16:25:47', 1),
(48, 'Feeling cheesy today', 'Do you know this feeling? You wake up in the morning and feel cheesy? Almost churned? Like whey?\r\nI don\'t like it!', '2017-08-08 16:26:37', '2017-08-08 16:26:37', 3),
(49, 'New Magic Card Trick!!!', 'I can now eat 12 regular sized playing cards without anyone noticing. I can proove it!', '2017-08-08 16:39:37', '2017-08-08 16:39:37', 3),
(50, 'New song about cows! Listen to this!', 'DAD is supposedly singing about a vacophile counting his cattle.\nThis is a clear offence to our standards of sophistication.\nWe must stop this pleb from undermining our reputation any further.\nAct now! Sign this petition (link will be here soon...ish).', '2017-08-08 21:13:20', '2017-08-08 21:13:20', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `screenname` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `portrait` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` tinyint(3) UNSIGNED NOT NULL,
  `age` tinyint(3) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `screenname`, `portrait`, `gender`, `age`, `created_at`, `modified_at`) VALUES
(1, 'a@moo.de', '$2y$10$b0f9vaaiBcjJSq1UpdbrdOLtaYWLeY.mSXLZF2KLcQ2R7uUauLXDe', 'Cattle McCowster', 'img/avatars/1.jpg', 1, 3, '2015-06-02 05:00:00', '2018-06-19 11:59:37'),
(2, 'b@moo.de', '$2y$10$b0f9vaaiBcjJSq1UpdbrdOLtaYWLeY.mSXLZF2KLcQ2R7uUauLXDe', 'Mustafa Ibrahim', 'img/avatars/2.jpg', 1, 5, '2017-06-14 07:00:00', '2018-06-19 11:59:37'),
(3, 'c@moo.de', '$2y$10$b0f9vaaiBcjJSq1UpdbrdOLtaYWLeY.mSXLZF2KLcQ2R7uUauLXDe', 'The Cheesemaker', 'img/avatars/3.jpg', 4, 22, '2017-06-17 00:00:00', '2018-06-19 11:59:37'),
(4, 'd@moo.de', '$2y$10$b0f9vaaiBcjJSq1UpdbrdOLtaYWLeY.mSXLZF2KLcQ2R7uUauLXDe', 'Udder Nonsense', 'img/avatars/4.jpg', 3, 7, '2016-06-17 00:00:00', '2018-06-19 11:59:37'),
(5, 'e@moo.de', '$2y$10$b0f9vaaiBcjJSq1UpdbrdOLtaYWLeY.mSXLZF2KLcQ2R7uUauLXDe', 'Helga the mighty Supercow', 'img/avatars/5.jpg', 2, 12, '2017-08-27 00:00:00', '2018-06-19 11:59:37'),
(6, 'f@moo.de', '$2y$10$b0f9vaaiBcjJSq1UpdbrdOLtaYWLeY.mSXLZF2KLcQ2R7uUauLXDe', 'Karl', 'img/avatars/6.jpg', 2, 4, '2017-06-05 00:00:00', '2018-06-19 11:59:37'),
(7, 'g@moo.de', '$2y$10$b0f9vaaiBcjJSq1UpdbrdOLtaYWLeY.mSXLZF2KLcQ2R7uUauLXDe', 'Buttermilk', 'img/avatars/default.jpg', 3, 0, '2017-07-06 00:00:00', '2018-06-19 11:59:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`user1_id`,`user2_id`),
  ADD KEY `friends_ibfk_2` (`user2_id`);

--
-- Indexes for table `friend_requests`
--
ALTER TABLE `friend_requests`
  ADD PRIMARY KEY (`user1_id`,`user2_id`),
  ADD KEY `user2` (`user2_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `friend_requests`
--
ALTER TABLE `friend_requests`
  ADD CONSTRAINT `friend_requests_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `friend_requests_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
