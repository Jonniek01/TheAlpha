 use Customers

 create TABLE customers(
     id int NOT NULL PRIMARY KEY IDENTITY(1,1),
     name VARCHAR (MAX) NOT NULL,
     email VARCHAR(MAX) NOT NULL UNIQUE,
     password VARCHAR(MAX) NOT NULL,
     phone VARCHAR(MAX) NOT NULL,
     location VARCHAR(MAX) NOT NULL,
     deleted BIT DEFAULT 0
 )

DROP TABLE customers