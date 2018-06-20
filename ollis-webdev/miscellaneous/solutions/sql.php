<?php
declare(strict_types=1);

/*******************
 * SOLUTIONS - SQL *
 *******************/

?>
<!DOCTYPE html>
<html lang="de">
<head></head>
<body>

<h1>Übungen zu SQL</h1>

<p>Schreibe SQL-Queries, die die verlangten Informationen beinhalten.
Versuche, soweit möglich, nur die verlangten Felder aus der Datenbank auszulesen.<br>
(Die Spaltenanzahl des Result Sets ist in Klammern angegeben.)</p>

<ol>
<li>Alle Benutzernamen (1)
    <pre>SELECT `name` FROM `users`</pre>
</li>
<li>Alle Käsesorten (types) (1)
    <pre>SELECT DISTINCT `type` FROM `cheesewheels`</pre>
</li>
<li>Alle Käseräder (id) mit einem Gewicht zwischen 10 und 12 Kilo (inklusive). Lies das Gewicht mit aus. (2)
    <pre>SELECT `id`, `weight` FROM `cheesewheels`
WHERE `weight` >= 10000 AND `weight` <= 12000
    </pre>
</li>
<li>Alle Käseräder (id), die von einem User gekauft wurden. Lies den Benutzernamen und den Kaufpreis mit aus. (3)
    <pre>SELECT U.`name`, CW.`id`, CW.`price`
FROM `users` U
JOIN `cheesewheels` CW ON U.`id`=CW.`user_id`
ORDER BY U.`name`
    </pre>
</li>
<li>Alle Käsetypen und der Durchschnittspreis der Käseräder. Jeder Käsetyp darf nur ein Mal im Ergebnis vorkommen. (2)
    <pre>SELECT `type`, avg(`price`)
FROM `cheesewheels`
GROUP BY `type`
    </pre>
</li>
<li>Alle Käsetypen und ihr durchschnittlicher Kilopreis. Jeder Käsetyp darf nur ein Mal im Ergebnis vorkommen. (2)
    <pre>SELECT `type`, avg(`price` / `weight` * 1000) AS price_per_kilo
FROM `cheesewheels`
GROUP BY `type`
    </pre>
</li>
<li>Wie viele Kühe stecken in Käse 11 (1)?
    <pre>SELECT count(`cow_id`) as number_of_cows
FROM `cheesewheels_cows`
WHERE `cheesewheel_id`=11
    </pre>
</li>
<li>Id und Preis aller unverkauften Käseräder. (2)
    <pre>SELECT `id`, `price` FROM `cheesewheels` CW
WHERE CW.`user_id` IS NULL;
    </pre>
</li>
<li>Liste aller Rind- und Usernamen, alphabetisch sortiert (1)
    <pre>SELECT * FROM (
    SELECT `name` as names FROM `cows`
    UNION
    SELECT `name` FROM `users`
) CU ORDER BY names
    </pre>
</li>
<li>Namen aller Rinder, von deren Käse User 1 gekauft hat. Jeder Name darf nur ein Mal vorkommen. (1)
    <pre>SELECT DISTINCT C.`name`
FROM `cows` C
JOIN `cheesewheels_cows` CC ON C.`id`=CC.`cow_id`
JOIN `cheesewheels` CW ON CC.`cheesewheel_id`=CW.`id`
WHERE CW.`user_id`=1
    </pre>
</li>
<li>Name und Geschlecht aller Rinder, von denen noch nie ein Käse verkauft wurde (2)
    <pre>SELECT cows.`name`, cows.`gender` FROM (
    SELECT DISTINCT C.`id` AS cid FROM `cheesewheels` CW
    JOIN `cheesewheels_cows` CC ON CW.`id`=CC.`cheesewheel_id`
    JOIN `cows` C ON CC.`cow_id`=C.`id`
    WHERE CW.`user_id` IS NOT NULL
) AS SOLD
RIGHT JOIN `cows` ON SOLD.`cid`=cows.`id`
WHERE SOLD.`cid` IS NULL
    </pre>

    <pre>SELECT name, gender
FROM cows WHERE id NOT IN
(
    SELECT DISTINCT C.id FROM cows C
    JOIN cheesewheels_cows CWC ON C.id = CWC.cow_id
    JOIN cheesewheels CW ON CWC.cheesewheel_id = CW.id
    WHERE CW.user_id IS NOT NULL
)
    </pre>

        Die folgende Lösung funktioniert auf MariaDB, aber nicht auf MySQL.
    <pre>SELECT F.name, F.gender
FROM (
    SELECT CO.name, CO.gender, CW.user_id
    FROM cows CO
    JOIN cheesewheels_cows C_C ON CO.id = C_C.cow_id
    JOIN cheesewheels CW ON C_C.cheesewheel_id = CW.id
    GROUP BY CO.name
) AS F
WHERE F.user_id IS NULL
    </pre>

</li>
<li>Welcher User hat von wie vielen Kühen Käse gekauft. Ergebnis nach Anzahl der Kühe sortieren (2)?
    <pre>SELECT u.name, count(cc.`cow_id`) AS 'cow_count'
FROM users u
JOIN cheesewheels cw ON u.`id`=cw.`user_id`
JOIN cheesewheels_cows cc ON cc.`cheesewheel_id`=cw.`id`
GROUP BY u.`name`
ORDER BY count(cc.`cow_id`) DESC
    </pre>
</li>
</ol>

</body>
</html>
