 use Products

CREATE TABLE categories(
id int NOT NULL PRIMARY KEY IDENTITY(1,1),
name VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
deleted BIT DEFAULT 0
 )

