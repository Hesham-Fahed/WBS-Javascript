<?php
declare(strict_types=1);

/*************
 * DATABASES *
 *************/
?>

<h1>Anmerkung</h1>
<p>Da Beispiele zur Datenbankmanipulation wenig Sinn ergeben,
ohne die Datenbank zu verändern, legt dieses Script in der
datenbank 'wbs' die Tabellen 'pizza' und 'orders' an.</p>

<p>Damit das nicht jedes Mal passiert, ist der Benutzername
und das Passwort der Datenbank in Zeile 24 nicht gesetzt. Zum
Ausführen des Scripts müssen dort zB "root" und "" eingetragen
werden.<p>

<p>Vergesst nicht die beiden Tabellen wieder zu löschen, wenn
ihr mit der Begutachtung fertig seid.</p>
<?php

//                  host    username password datanase port
$db = new mysqli("127.0.0.1",  "",      "",    "wbs",  3306);

if ($db->connect_errno) {
	die('<div>Could not connect to Database.</div>' . $db->connect_error);
}

$db->set_charset('utf8');

echo "<pre>";

qhelper("DROP TABLE `pizza`;");
qhelper("DROP TABLE `orders`;");

qhelper("SELECT * FROM `pizza`;");
qhelper("CREATE TABLE `pizza` ( `pnumber` INT, `name` VARCHAR(255) );");
qhelper("DESCRIBE `pizza`;", 'fetch_all');

echo "=== Break 1 ===========================================================\n\n";

qhelper("ALTER TABLE `pizza` ADD has_cheese VARCHAR(255);");
qhelper("DESCRIBE `pizza`;", 'fetch_all');
qhelper("INSERT INTO `pizza` VALUES (12, 'Waikiki', 'Gouda');");
qhelper("SELECT * FROM `pizza`;", 'fetch_all');
qhelper("ALTER TABLE `pizza` MODIFY COLUMN has_cheese TINYINT(1);");
qhelper("ALTER TABLE `pizza` DROP COLUMN has_cheese;");
qhelper("DESCRIBE `pizza`;", 'fetch_all');
qhelper("SELECT * FROM `pizza`;", 'fetch_all');
qhelper("DROP TABLE `pizza`;");

echo "=== Break 2 ===========================================================\n\n";

$sql = <<<SQL
CREATE TABLE `pizza` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255),
PRIMARY KEY (`id`)
);
SQL;
qhelper($sql);

qhelper("INSERT INTO `pizza` (`name`) VALUES ('Hawaii');");
qhelper("INSERT INTO `pizza` (`name`) VALUES ('Diavolo');");
qhelper("INSERT INTO `pizza` (`name`) VALUES ('Diavolo');");

qhelper("ALTER TABLE `pizza` ADD UNIQUE (`name`);");
qhelper("DELETE FROM `pizza` WHERE `id`=3;");
qhelper("ALTER TABLE `pizza` ADD UNIQUE (`name`);");
qhelper("INSERT INTO `pizza` (`name`) VALUES ('Diavolo');");

echo "=== Break 3 ===========================================================\n\n";

$sql = <<<SQL
CREATE TABLE `orders` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`customer_name` VARCHAR(255) NOT NULL,
	`pizza_id` INT UNSIGNED NOT NULL,
FOREIGN KEY (pizza_id) REFERENCES pizza(id),
PRIMARY KEY (`id`)
);
SQL;
qhelper($sql);

qhelper("INSERT INTO `orders` (`customer_name`, `pizza_id`) VALUES ('John Doe', 1);");
qhelper("INSERT INTO `orders` (`customer_name`, `pizza_id`) VALUES ('Peter Piper', 2);");
qhelper("INSERT INTO `orders` (`customer_name`, `pizza_id`) VALUES ('Eleanor Rigby', 1);");

$sql = <<<SQL
SELECT P.name, O.customer_name FROM `pizza` P
JOIN orders O ON O.pizza_id=P.id
SQL;
qhelper($sql, 'fetch_all');

echo "=== Break 4 ===========================================================\n\n";

qhelper("INSERT INTO `pizza` (`name`) VALUES ('Speciale');");
$sql = <<<SQL
SELECT P.name, O.customer_name FROM `pizza` P
LEFT JOIN orders O ON O.pizza_id=P.id
SQL;
qhelper($sql, 'fetch_all');

$sql = <<<SQL
SELECT P.name, O.customer_name FROM `pizza` P
LEFT JOIN orders O ON P.id=O.pizza_id
WHERE O.pizza_id IS NULL
SQL;
qhelper($sql, 'fetch_all');

echo "</pre>"; 
$db->close();

function qhelper(string $sql, string $fetch_func = '') {
	global $db;                 // Don't do this!!! :)
	$result = $db->query($sql);

	echo "$sql\n => ";
	if ($result) {
		$data = ($fetch_func) ? $result->$fetch_func() : $result;
		print_r($data);
	}
	else {
		echo "Error: " . $db->error;
	}
	echo "\n\n";
}
