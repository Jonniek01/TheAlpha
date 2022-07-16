USE Products

CREATE PROCEDURE SelectAllProducts
AS
SELECT * FROM products
GO;
 

EXEC SelectAllProducts


-- 1. productspriceascending
CREATE OR ALTER PROCEDURE 
productspriceascending
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY price ASC;

EXEC productspriceascending

--DROP PROCEDURE SelectAllProducts

-- 2. productspricedescending
CREATE OR ALTER PROCEDURE 
productspricedescending
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY price DESC;

EXEC productspricedescending
--

-- 3. productsnameascending
CREATE OR ALTER PROCEDURE 
productsnameascending
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY name ASC;

EXEC productsnameascending
--

-- 3. productsnamedescending
CREATE OR ALTER PROCEDURE 
productsnamedescending
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY name DESC;

EXEC productsnamedescending
--

