CREATE DATABASE Shopping
 GO
 use Shopping

 create TABLE cartItem(
     id int NOT NULL PRIMARY KEY,
     customer_id INT NOT NULL,
     product_id INT NOT NULL,
     count int NOT NULL,
     total VARCHAR(50) NOT NULL,
     active VARCHAR(50) NOT NULL,
 )
 CREATE TABLE orders(
id int NOT NULL PRIMARY KEY,
customer_id int NOT NULL,
content VARCHAR(255) NOT NULL,
order_date DATE NOT NULL,
cleared VARCHAR NOT NULL
 )

