DROP DATABASE IF EXISTS calendar_db;
CREATE DATABASE calendar_db;

USE calendar_db;

CREATE TABLE business(
    id VARCHAR,
    locationName VARCHAR,
    locationAddress VARCHAR,
    locationCity VARCHAR,
    locationState VARCHAR
)

CREATE TABLE user(
    id VARCHAR,
    username VARCHAR
)

INSERT INTO business (id, locationName, locationAddress, locationCity, locationState)
  VALUES (1, "McDonalds", "123 St.", "San Jose", "CA");
