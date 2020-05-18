-- Find out how many tasks are in the task table
SELECT COUNT(id) FROM task;
-- Find out how many tasks in the task table do not have a valid due date
SELECT id FROM task WHERE due_date = 0;
-- Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id > 1;
-- Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id = 0 ;
-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task 
ORDER BY created ASC ;
-- Get the single most recently created task
SELECT * FROM task 
WHERE created = '2017-09-03 02:47:17';

-- Get the title and due date of all tasks where the title or description contains database
SELECT task.title, task.due_date FROM task  
WHERE title LIKE '%database%' OR description like '%database%';

-- Get the title and status (as text) of all tasks
SELECT  CONCAT(title, status_id) FROM task; 
 
-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.id, status.name, COUNT(task.id) AS task_count FROM status
LEFT JOIN task ON status.id = task.user_id
GROUP BY status.id
HAVING task_count >1 ;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT  status.name, task.id AS task_name  
FROM status
LEFT JOIN task ON status.id = task.user_id WHERE task.status_id > 1
ORDER BY task_name DESC;


