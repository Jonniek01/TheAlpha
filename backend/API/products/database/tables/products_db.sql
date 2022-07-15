CREATE DATABASE Products
 
 use Products

 create TABLE products(
     id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     image VARCHAR(255) NOT NULL,
     description VARCHAR(255) NOT NULL,
     category VARCHAR(50) NOT NULL,
     deleted BIT

 )


CREATE TABLE categories(
id int NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
deleted BIT
 )

