SELECT *
FROM task;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task
(title, description, created, updated, due_date, status_id)
VALUES ('video recording','experienced', '2020-05-01 08:00:01' ,'2020-05-10 08:00:01' , '2020-06-19 03:14:07' , 3 );

-- Change the title of a task
--  Changed from empty the mailbox to :
UPDATE task
SET title = 'full the mailbox'
WHERE id = 5 ;

-- Change a task due date
-- changed from '2017-12-19 17:01:10' to :
UPDATE task
SET due_date = '2020-05-10 09:01:10'
WHERE id = 10 ;

-- Change a task status
-- status changed from 1 to : 3

UPDATE task
SET status_id = '3'
WHERE id = 4 ;

-- Mark a task as complete
UPDATE task
SET status_id = '3'
WHERE id = 12 ;

-- Delete a task

DELETE FROM task
WHERE id = 25; 


-- Part 2: School database

CREATE DATABASE school_database;
-- adding character set to database
ALTER DATABASE school_database
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE=utf8mb4_unicode_ci;

-- tables
CREATE TABLE class (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
begins TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
ends TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=INNODB;

CREATE TABLE student (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(250) NOT NULL,
email VARCHAR(250),
phone VARCHAR(9),
class_id INT(6) UNSIGNED NOT NULL,
  CONSTRAINT fk_class FOREIGN KEY (class_id)
  REFERENCES class(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE

) ENGINE=INNODB;

-- Create an index on the name column of the student table.
CREATE INDEX index_name
ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD column status ENUM ('not-started','ongoing','finished' );


-- Part 3: More queries 
USE hyf_lesson2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*, user.id AS user_id,  user.email AS user_email 
FROM user
INNER JOIN user_task ON user.id = user_task.user_id
INNER JOIN task ON user_task.task_id =task.id
WHERE user.email LIKE '%@spotify.com'
GROUP BY task.id; 

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*, 
user.name , user.email,
status.name
FROM user
INNER JOIN user_task ON user.id = user_task.user_id
INNER JOIN task ON user_task.task_id =task.id
INNER JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started'
GROUP BY user.name; 


-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.* , 
user.name,
status.name
FROM user
INNER JOIN user_task ON user.id = user_task.user_id
INNER JOIN task ON user_task.task_id =task.id
INNER JOIN status ON status.id = task.status_id
WHERE user.name = 'Maryrose Meadows' AND MONTH (task.created) = 09
GROUP BY task.id; 


-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTH(task.created) AS months, COUNT(task.id)
FROM task
GROUP BY month(task.created)
ORDER BY MONTH(task.created) ASC; 


-- Part 4: Creating a database

