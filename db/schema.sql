DROP DATABASE IF EXISTS calendar_db;
CREATE DATABASE calendar_db;

USE calendar_db;

CREATE TABLE months (
    id INT PRIMARY KEY,
    db_date DATE NOT NULL,
    month INTEGER NOT NULL,
    week INTEGER NOT NULL,
    day INTEGER NOT NULL,
    month_name VARCHAR(10) NOT NULL,
    day_name VARCHAR(10) NOT NULL
);

CREATE TABLE weeks (
    weeks_id INT AUTO_INCREMENT PRIMARY KEY,
    weeks VARCHAR(30),
    dates INT,
    FOREIGN KEY (weeks_id) REFERENCES months(id) ON DELETE SET NULL
);

CREATE TABLE days(
    days_id INT AUTO_INCREMENT PRIMARY KEY,
    days VARCHAR(30),
    dates INT,
    FOREIGN KEY (dates_id) REFERENCES weeks(weeks_id) ON DELETE SET NULL