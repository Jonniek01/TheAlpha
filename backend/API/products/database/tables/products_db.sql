 use Products

 create TABLE products(
     id int NOT NULL PRIMARY KEY IDENTITY(1,1),
     name VARCHAR (50) NOT NULL,
     price FLOAT NOT NULL,
     image VARCHAR(255) NOT NULL,
     description VARCHAR(255) NOT NULL,
     category VARCHAR(50) NOT NULL,
     deleted BIT DEFAULT 0

 )





INSERT INTO products (name, price, image, description, category)
VALUES('Ancle socks', 5120.20, 'http://image/url.com','beautiful socks','outdoor'),

VALUES('jeans', 200.50, 'http://image/url.com','beautiful jeans','official'),

VALUES('Snickers', 4120.20, 'http://image/url.com','beautiful snickers','outdoor'),


SELECT * FROM PRODUCTS