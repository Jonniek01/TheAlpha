CREATE DATABASE Customers
GO
 use Customers

 create TABLE customer(
     id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL
 )

CREATE TABLE ratings
(
    id INT NOT NULL PRIMARY KEY,
    product_id int NOT NULL,
    rating FLOAT NOT NULL,
    customer_id char(50) NOT NULL
)