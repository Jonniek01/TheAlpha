CREATE DATABASE Admins
GO
 use Admins

 create TABLE admins(
     id int NOT NULL PRIMARY KEY IDENTITY(1,1),
     username VARCHAR (255) NOT NULL,
     email VARCHAR (255) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL,
     deleted BIT DEFAULT 0
 )

DROP TABLE admins

select * from admins