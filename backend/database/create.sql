CREATE DATABASE theAlpha
USE theAlpha

-- customers

CREATE TABLE customers (
  customer_id int NOT NULL IDENTITY(1,1),
  location VARCHAR(70) DEFAULT NULL,
  name varchar(80) DEFAULT NULL,
  email varchar(80) DEFAULT NULL,
  PRIMARY KEY (email)
);

-- products

CREATE TABLE products(
  product_id int NOT NULL IDENTITY,
  image VARCHAR(255),
  name VARCHAR (80),
  description VARCHAR(255),
  price VARCHAR(255),
  category VARCHAR(80),
  PRIMARY KEY (product_id)
);

-- orders

CREATE TABLE orders(
  order_id int NOT NULL IDENTITY PRIMARY KEY,
  orders VARCHAR(255)
);

-- categories

CREATE TABLE categories(
  category_id int NOT NULL IDENTITY(1,1),
  name varchar(80) DEFAULT NULL,
  PRIMARY KEY (category_id)
);



    select * FROM customers
    select * FROM categories

     
    