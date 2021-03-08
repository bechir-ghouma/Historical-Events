DROP DATABASE IF EXISTS historical ,
CREATE DATABASE historical ,
USE historical ,

CREATE TABLE posts (
id int NOT NULL AUTO_INCREMENT,
title varchar(50) NOT NULL,
author varchar(50) NOT NULL,
body TEXT NOT NULL,
name varchar(50) NOT NULL,
PRIMARY KEY (id)
)
