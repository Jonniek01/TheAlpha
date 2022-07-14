CREATE DATABASE Products
 
 use Products

 create TABLE products(
     id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     image VARCHAR(50) NOT NULL,
     description VARCHAR(50) NOT NULL,
     category VARCHAR(50) NOT NULL,
 )
 CREATE TABLE category(
id int NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
 )
