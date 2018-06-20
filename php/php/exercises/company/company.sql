-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 20. Jun 2018 um 16:06
-- Server-Version: 10.1.10-MariaDB
-- PHP-Version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `company`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `abteilungen`
--

CREATE TABLE `abteilungen` (
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `abteilungen`
--

INSERT INTO `abteilungen` (`name`) VALUES
('Feierabend'),
('Frühstückspause'),
('Kaffeepause'),
('Mittagspause'),
('Raucherpause');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `employees_collection`
--

CREATE TABLE `employees_collection` (
  `id` int(10) UNSIGNED NOT NULL,
  `mitarbeiter_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abteilung_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `standort_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `employees_collection`
--

INSERT INTO `employees_collection` (`id`, `mitarbeiter_name`, `abteilung_name`, `standort_name`) VALUES
(1, 'Andi Hose', 'Feierabend', 'Ahrbrück'),
(2, 'Gerda Schmidt', 'Frühstückspause', 'Altenahr'),
(3, 'Hab Hunger', 'Mittagspause', 'Lind'),
(4, 'Mattes Voigt', 'Mittagspause', 'Plittersdorf'),
(5, 'Max Söder', 'Raucherpause', 'Plittersdorf'),
(6, 'Mia Sanmia', 'Kaffeepause', 'Mayschoss'),
(7, 'Nina Kurz', 'Feierabend', 'Altenahr'),
(8, 'Regina Müller', 'Mittagspause', 'Mayschoss'),
(10, 'Ulrich Dackel', 'Kaffeepause', 'Plittersdorf');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitarbeiter`
--

CREATE TABLE `mitarbeiter` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `mitarbeiter`
--

INSERT INTO `mitarbeiter` (`id`, `name`) VALUES
(4, 'Andi Hose'),
(5, 'Gerda Schmidt'),
(10, 'Hab Hunger'),
(2, 'Mattes Voigt'),
(8, 'Max Söder'),
(7, 'Mia Sanmia'),
(3, 'Nina Kurz'),
(1, 'Regina Müller'),
(11, 'Regina Müller'),
(6, 'Ulrich Dackel'),
(9, 'Verflucht Nochmal');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `standorte`
--

CREATE TABLE `standorte` (
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `standorte`
--

INSERT INTO `standorte` (`name`) VALUES
('Ahrbrück'),
('Altenahr'),
('Lind'),
('Mayschoss'),
('Plittersdorf');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'doc.snuggles@web.de', '', '$2y$10$4BDH.duZsSeTrnbhQl/mF.hfwMUnV9vi6zNJq0O1jPmKnIRcT2ZG2');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `abteilungen`
--
ALTER TABLE `abteilungen`
  ADD PRIMARY KEY (`name`);

--
-- Indizes für die Tabelle `employees_collection`
--
ALTER TABLE `employees_collection`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mitarbeiter_name` (`mitarbeiter_name`),
  ADD KEY `abteilung_name` (`abteilung_name`),
  ADD KEY `standort_name` (`standort_name`);

--
-- Indizes für die Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`);

--
-- Indizes für die Tabelle `standorte`
--
ALTER TABLE `standorte`
  ADD PRIMARY KEY (`name`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `employees_collection`
--
ALTER TABLE `employees_collection`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT für Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `employees_collection`
--
ALTER TABLE `employees_collection`
  ADD CONSTRAINT `employees_collection_ibfk_1` FOREIGN KEY (`abteilung_name`) REFERENCES `abteilungen` (`name`),
  ADD CONSTRAINT `employees_collection_ibfk_2` FOREIGN KEY (`standort_name`) REFERENCES `standorte` (`name`),
  ADD CONSTRAINT `employees_collection_ibfk_3` FOREIGN KEY (`mitarbeiter_name`) REFERENCES `mitarbeiter` (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
