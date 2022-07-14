CREATE DATABASE Admins
GO
 use Admins

 create TABLE admin(
     id int NOT NULL PRIMARY KEY,
     user_name VARCHAR (50) NOT NULL,
     password VARCHAR(50) NOT NULL
 )

