
USE Shopping

 create TABLE items(
     id int NOT NULL PRIMARY KEY IDENTITY(1,1),
     customer_id INT NOT NULL,
     product_id INT NOT NULL,
     count int NOT NULL,
     total VARCHAR(50) NOT NULL,
     date_added DATETIME DEFAULT GETDATE(),
     active BIT DEFAULT 1
 )

CREATE TABLE orders(
id int NOT NULL PRIMARY KEY IDENTITY(1, 1),
customer_id int NOT NULL,
items VARCHAR(255) NOT NULL,
items_count VARCHAR(255) NOT NULL,
total FLOAT,
order_date DATETIME DEFAULT GETDATE(),
cleared BIT DEFAULT 0
 )

DROP TABLE items