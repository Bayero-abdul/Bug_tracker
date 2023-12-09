-- Setup MySQL server for Bug Tracker
CREATE DATABASE IF NOT EXISTS bug_dev_db;
CREATE USER IF NOT EXISTS 'bug_dev'@'localhost' IDENTIFIED BY 'bug_dev_pwd';
GRANT ALL PRIVILEGES ON `bug_dev_db`.* TO 'bug_dev'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'bug_dev'@'localhost';
FLUSH PRIVILEGES;
