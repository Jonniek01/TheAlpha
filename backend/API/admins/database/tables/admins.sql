CREATE DATABASE Admins
GO
 use Admins

 create TABLE admins(
     id int NOT NULL PRIMARY KEY IDENTITY(1,1),
     username VARCHAR (50) NOT NULL,
     email VARCHAR (50) NOT NULL,
     password VARCHAR(50) NOT NULL,
     deleted BIT DEFAULT 0
 )

