DROP DATABASE IF EXISTS calendar_db;
CREATE DATABASE calendar_db;

USE calendar_db;

CREATE TABLE months (
    id INT PRIMARY KEY,
    db_date DATE,
    month INTEGER,
    week INTEGER,
    day INTEGER,
    month_name VARCHAR(10),
    day_name VARCHAR(10)
);

CREATE TABLE weeks (
    weeks_id INT AUTO_INCREMENT PRIMARY KEY,
    weeks VARCHAR(30),
    dates INT,
    FOREIGN KEY (weeks_id) REFERENCES months(id)
);

CREATE TABLE days(
    days_id INT AUTO_INCREMENT PRIMARY KEY,
    days VARCHAR(30),
    dates INT,
    FOREIGN KEY (days_id) REFERENCES weeks(weeks_id)
);

CREATE TABLE business(
    business_id VARCHAR,
    business_name VARCHAR,
    category VARCHAR,
    location_address VARCHAR,
    location_city VARCHAR,
    location_state VARCHAR,
    location_country VARCHAR,
    hour_start INT,
    hour_end INT,
    rating INT,
    business_url VARCHAR
)