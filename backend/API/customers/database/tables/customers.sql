 use Customers

 create TABLE customers(
     id int NOT NULL PRIMARY KEY IDENTITY(1,1),
     name VARCHAR (255) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL,
     phone VARCHAR(255) NOT NULL,
     location VARCHAR(255) NOT NULL,
     deleted BIT DEFAULT 0
 )

