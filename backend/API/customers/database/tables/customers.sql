 use Customers

 create TABLE customers(
     id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
     deleted BIT DEFAULT 0
 )
