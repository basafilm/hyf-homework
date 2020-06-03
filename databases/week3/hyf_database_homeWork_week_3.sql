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

ALTER TABLE Meal
  ADD CONSTRAINT `fk_meal_reserv` 
   FOREIGN KEY (`max_reservations`) 
    REFERENCES `Reservation` (`id`) 
      ON DELETE CASCADE ON UPDATE CASCADE;
      
      SET foreign_key_checks = 0;

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
SELECT Meal.id 
FROM Meal;
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
VALUES ('1' , 8, '3' , '2020-05-23');

-- Get a reservation with any id, fx 1

SELECT id
FROM Reservation; 

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
SELECT id =1
FROM REview; 
-- OR
SELECT *
FROM Review
WHERE id = 1; 

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET id = 5 , created_date = '2020-06-20 : 08:05:01'
WHERE id =4;

-- Get meals that has a price smaller than a specific price fx 90

SELECT*
FROM Meal WHERE price  <90 ;

-- Get meals that still has available reservations
SELECT * , Reservation.id
FROM Meal 
INNER JOIN Reservation ON Reservation.meal_id = Meal.id; 

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * 
FROM Meal WHERE title LIKE '%sand%'; 

-- Get meals that has been created between two dates
SELECT *
FROM Meal 
WHERE created_date BETWEEN 2020-05-21 AND 2020-06-22;

-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM Meal 
WHERE Meal.id  <=5;

-- Get the meals that have good reviews
SELECT * 
FROM Meal 
INNER JOIN Review ON meal_id = Meal.id
WHERE Review.description = 'very testy' ;

-- Get reservations for a specific meal sorted by created_date

SELECT Reservation.id =1
FROM Reservation 
INNER JOIN Meal ON Meal.id = Reservation.meal_id 
ORDER BY Meal.id DESC;

-- Sort all meals by average number of stars in the reviews

