
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id int unsigned NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured bool NOT NULL,
    PRIMARY KEY (id)
)

