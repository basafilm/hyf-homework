-- creating new database
CREATE DATABASE film_festival
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE=utf8mb4_unicode_ci;

USE film_festival;

-- creating 3 tables with one to many relationship

CREATE TABLE directors (
`id` INT(6) UNSIGNED AUTO_INCREMENT,
`firstName` VARCHAR(255) NOT NULL,
`secondtName` VARCHAR(255) NOT NULL,
`birth` DATE,
`email` VARCHAR(255) NOT NULL,
`contactNumber` VARCHAR(255) NOT NULL,
`address` VARCHAR(255) NOT NULL,
`country` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id` )
)ENGINE=INNODB;
-- changing mistake column name
ALTER TABLE directors 
RENAME COLUMN `secondtName` TO `secondName`;

CREATE TABLE film (
`film_d` INT(6) UNSIGNED AUTO_INCREMENT,
`title` VARCHAR(255) NOT NULL,
`duration` VARCHAR(255) NOT NULL,
`gener` VARCHAR(255) NOT NULL,
`production_year` DATE,
`production_company` VARCHAR(255) NOT NULL,
`country` VARCHAR(255) NOT NULL,
 PRIMARY KEY (`film_d` ),
 -- foriegn key related to directors table
`director_id` INT(6) UNSIGNED NOT NULL,
 FOREIGN KEY (`director_id`)
 REFERENCES `directors`(`id`)
 ON DELETE CASCADE
 ON UPDATE CASCADE
)ENGINE=INNODB;

-- changing mistake column name
ALTER TABLE film 
RENAME COLUMN `film_d` TO `film_id`;

CREATE TABLE screening (
`id` INT(6) UNSIGNED AUTO_INCREMENT,
`film_title` VARCHAR(255) NOT NULL,
`vanue` VARCHAR(255) NOT NULL, 
`begins` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`ends` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`),
 -- below two foriegn key access to directors and film tabels related column
`director_id` INT(6) DEFAULT ''  NOT NULL,
`film_id` INT(6) DEFAULT ''  NOT NULL,
 FOREIGN KEY (`director_id`)
 REFERENCES `directors`(`id`)
 ON DELETE CASCADE
 ON UPDATE CASCADE,
 
 FOREIGN KEY (`film_id`)
 REFERENCES `film`(`film_d`)
 ON DELETE CASCADE
 ON UPDATE CASCADE
)ENGINE=INNODB;

-- adding constarint to foriegn key (missed when created )

ALTER TABLE screening
ADD CONSTRAINT FK_directors
FOREIGN KEY (`director_id`) 
REFERENCES `directors`(`id`);

-- changing the reference of firiegn key and adding constarint
ALTER TABLE screening 
ADD CONSTRAINT fk_film 
FOREIGN KEY (`film_id`) REFERENCES `film`(`film_id`);

INSERT INTO directors (firstName, secondName, birth, email, contactNumber, address, country)
VALUES ('Malek', 'Shafii', '1974-05-27' , 'malek.immart@gmail.com', 91658509 , '2630 Taastrup' , 'Denmark');

INSERT INTO film (title, duration, gener, production_year, production_company, country, director_id)
VALUES ('MOHTARAMA', '60m', 'documentary' ,'2012-05-30', 'BASA Film', 'Afghanistan');

INSERT INTO screening (film_title, vanue, begins, ends, director_id, film_id )
VALUES ('MOHTARAMA', 'CPH-DOX', '2020-05-10 09:01:10' ,'2020-06-10 09:01:10', '1','1');




