
USE Shopping

 create TABLE cartitems(
     id int NOT NULL PRIMARY KEY,
     customer_id INT NOT NULL,
     product_id INT NOT NULL,
     count int NOT NULL,
     total VARCHAR(50) NOT NULL,
     date_added DATETIME DEFAULT GETDATE(),
     active BIT DEFAULT 0
 )

CREATE TABLE orders(
id int NOT NULL PRIMARY KEY,
customer_id int NOT NULL,
content VARCHAR(255) NOT NULL,
order_date DATETIME DEFAULT GETDATE(),
cleared BIT DEFAULT 0
 )
