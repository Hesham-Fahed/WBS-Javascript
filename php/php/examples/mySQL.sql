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
SELECT count(cow_id) FROM cheesewheels_cows WHERE cheesewheel_id = '11'