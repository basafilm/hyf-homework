CREATE DATABASE meal_sharing 
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE=utf8mb4_unicode_ci;

USE meal_sharing;

CREATE Table Meal (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title`varchar(255),
 `description` text,
 `location` varchar(255) NOT NULL,
 `when` datetime,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` decimal,
 `created_date` date
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE Table Reservation (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(10) unsigned NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` date,
  CONSTRAINT `fk_reserv_meal` 
   FOREIGN KEY (`meal_id`) 
    REFERENCES `Meal` (`id`) 
      ON DELETE CASCADE ON UPDATE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE Table Review (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(500) NOT NULL,
 `description` text,
 `stars` FLOAT DEFAULT 0,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` date,
  CONSTRAINT `fk_review_meal` 
   FOREIGN KEY (`meal_id`) 
    REFERENCES `Meal` (`id`) 
      ON DELETE CASCADE ON UPDATE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Add a new meal
INSERT INTO Meal 
VALUES ('1', 'Shawarma',' not chelly ','Taastrup 2630' , '2020-05-22' , 3, 150 , '2020-05-21' ),
('2', 'Cheken BBQ',' not chelly ','Taastrup 2630' , '2020-05-22' , 1, 70 , '2020-05-21'),
('3', 'Sandwich',' chelly ','Taastrup 2630' , '2020-05-22' , 2, 100 , '2020-05-21'),
('4', 'Falafel',' chelly ','Taastrup' , '2020-05-25' , 3, 50 , '2020-05-21'),
('5', 'Qabuly',' not chelly ','Taastrup 2630' , '2020-05-22' , 3, 150 , '2020-06-22' );

-- Get all meals 
SELECT * 
FROM Meal; 

-- Get a meal with any id, fx 1
SELECT Meal.id,Meal.title,Meal.description,Meal.location,Meal.when,Meal.max_reservations,Meal.price,Meal.created_date
FROM Meal
WHERE id = 3; 



-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET description = 'very Chelly' , max_reservations= '5' , price = 150
WHERE Meal.id =1;

-- Delete a meal with any id, fx 1

DELETE FROM Meal 
WHERE id = 2;

-- Get all reservations

SELECT * 
FROM Reservation;


-- Add a new reservation
INSERT INTO Reservation 
VALUES ('2' , 5, '2' , '2020-05-20');

-- Get a reservation with any id, fx 1

SELECT Reservation.id, Reservation.number_of_guests,Reservation.meal_id,Reservation.created_date
FROM Reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation
SET number_of_guests = 10
WHERE id =1;


-- Add a new review 
INSERT INTO Review
VALUES 
('3' , 'Sandwich', 'not bad', '3', '2020-05-22 : 08:05:01'),
('4' , 'Falafel', 'not bad', '4', '2020-05-23 : 08:04:11');


-- Get a review with any id, fx 1

SELECT *
FROM Review
WHERE id = 1; 

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET id = 5 , created_date = '2020-06-20'
WHERE id =4;

-- Get meals that has a price smaller than a specific price fx 90

SELECT*
FROM Meal WHERE price  <90 ;

-- Get meals that still has available reservations
SELECT  Meal.id, Meal.title,Meal.max_reservations, COALESCE(SUM(Reservation.number_of_guests))
FROM Meal
LEFT JOIN Reservation ON Meal.id = Reservation.meal_id
WHERE max_reservations <= Reservation.number_of_guests || Reservation.number_of_guests < Meal.max_reservations
GROUP BY Reservation.id;

SELECT *
FROM Reservation;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * 
FROM Meal WHERE title LIKE '%sand%'; 

-- Get meals that has been created between two dates
SELECT *
FROM Meal 
WHERE created_date BETWEEN '2020-05-21' AND '2020-06-22';

-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM Meal 
LIMIT 5; 


-- Get the meals that have good reviews
SELECT Meal.*
FROM Meal 
INNER JOIN Review ON meal_id = Meal.id
WHERE Review.stars >=5
GROUP BY Meal.id;


-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM Reservation
WHERE meal_id  = 2
ORDER BY created_date;


-- Sort all meals by average number of stars in the reviews
SELECT * 
FROM Review;

INSERT INTO Review (id, title, description, stars , meal_id, created_date)
VALUES 
( '6', 'Shawarma', 'not good', 5, '1', '2020-05-22 : 08:05:01'),
('9' , 'Cheken BBQ', 'testy', 3,'2', '2020-05-22 : 08:04:11');

SELECT Meal.*
FROM Meal 
INNER JOIN Review ON meal_id = Meal.id
GROUP BY Meal.id
ORDER BY AVG(Review.stars) DESC; 
