-- creating new database
CREATE DATABASE film_festival
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE=utf8mb4_unicode_ci;

USE film_festival;

-- creating 3 tables with one to many relationship

CREATE TABLE directors (
`id` INT(6) UNSIGNED AUTO_INCREMENT,
`firstName` VARCHAR(255) NOT NULL,
`secondName` VARCHAR(255) NOT NULL,
`birth` DATE,
`email` VARCHAR(255) NOT NULL,
`contactNumber` VARCHAR(255) NOT NULL,
`address` VARCHAR(255) NOT NULL,
`country` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id` )
)ENGINE=INNODB;

CREATE TABLE film (
`film_id` INT(6) UNSIGNED AUTO_INCREMENT,
`title` VARCHAR(255) NOT NULL,
`duration` VARCHAR(255) NOT NULL,
`gener` VARCHAR(255) NOT NULL,
`production_year` DATE,
`production_company` VARCHAR(255) NOT NULL,
`country` VARCHAR(255) NOT NULL,
 PRIMARY KEY (`film_id` ),
 -- foriegn key related to directors table
`director_id` INT(6) UNSIGNED NOT NULL,
 FOREIGN KEY (`director_id`)
 REFERENCES `directors`(`id`)
 ON DELETE CASCADE
 ON UPDATE CASCADE
)ENGINE=INNODB;

SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE screening (
`id` INT(6) UNSIGNED AUTO_INCREMENT,
`vanue` VARCHAR(255) NOT NULL, 
`begins` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`ends` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`),
 -- below the foriegn key access to directors and film tabels related column
`filmId` INT(6) UNSIGNED  NOT NULL,
 FOREIGN KEY (`filmId`)
 REFERENCES `film`(`film_id`)
 ON DELETE CASCADE
 ON UPDATE CASCADE
)ENGINE=INNODB;

-- changing the reference of firiegn key and adding constarint
ALTER TABLE screening 
ADD CONSTRAINT fk_film 
FOREIGN KEY (`filmId`) REFERENCES `film`(`film_id`);

INSERT INTO directors (firstName, secondName, birth, email, contactNumber, address, country)
VALUES ('Malek', 'Shafii', '1974-05-27' , 'malek.immart@gmail.com', 91658509 , '2630 Taastrup' , 'Denmark');

INSERT INTO film (title, duration, gener, production_year, production_company, country, director_id)
VALUES ('MOHTARAMA', '60m', 'documentary' ,'2012-05-30', 'BASA Film', 'Afghanistan', '1');
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`film_festival`.`film`, CONSTRAINT `film_ibfk_1` FOREIGN KEY (`director_id`) REFERENCES `directors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)


INSERT INTO screening (vanue, begins, ends, filmId )
VALUES ('CPH-DOX', '2020-05-10 09:01:10' ,'2020-06-10 09:01:10','1');
