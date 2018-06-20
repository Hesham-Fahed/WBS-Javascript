-- 1
SELECT name FROM users;

-- 2
SELECT DISTINCT type FROM cheesewheels ORDER BY type;

-- 3
SELECT id, weight FROM cheesewheels WHERE weight >= 10000 AND weight <= 12000

-- 4
SELECT C.id AS kaeserad, C.price, C.user_id, U.name FROM cheesewheels C
JOIN users U ON C.user_id = U.id

-- 5
SELECT type, AVG(price) FROM cheesewheels
GROUP BY type

-- 6
SELECT type, AVG(price)/(weight/1000) AS 'AVG per Kg' FROM cheesewheels
GROUP BY type

-- 7
SELECT count(cow_id) FROM cheesewheels_cows WHERE cheesewheel_id = 11

-- 8
SELECT id, price FROM cheesewheels WHERE user_id IS NULL;

-- 9
SELECT name FROM cows
UNION
SELECT name FROM users
ORDER BY name;

-- 10
SELECT C.*, cheesewheels_cows.cow_id AS CowID, CO.name FROM cheesewheels C
JOIN cheesewheels_cows ON C.id = cheesewheels_cows.cheesewheel_id
JOIN cows CO ON cheesewheels_cows.cow_id = CO.id
WHERE C.user_id = 1
GROUP BY CO.name;

-- 11
SELECT
	* 
FROM 
	cows
JOIN 
	cheesewheels_cows ON cows.id = cheesewheels_cows.cow_id
JOIN 
	cheesewheels ON cheesewheels_cows.cheesewheel_id = cheesewheels.id
WHERE 
	cheesewheels.price IS NULL;


	_____________________________________________


	SELECT * FROM `employees_collection` ORDER BY standort_name DESC, mitarbeiter_name ASC