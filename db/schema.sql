DROP DATABASE IF EXISTS calendar_db;
CREATE DATABASE calendar_db;

USE calendar_db;

CREATE TABLE business(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    locationName VARCHAR(30),
    locationAddress VARCHAR(30),
    locationCity TEXT,
    locationState TEXT
);

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(30),
    userPassword VARCHAR(30)
);

INSERT INTO business (id, locationName, locationAddress, locationCity, locationState)
    VALUES (1, "McDonalds", "123 St.", "San Jose", "CA");

INSERT INTO user(id, userName, userPassword)
    VALUES (1, "bootcampuser", "lavender");