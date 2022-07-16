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

/*READING PRODUCTS PAGINATED*/

-- 1. pgproductspriceascending
CREATE OR ALTER PROCEDURE 
pgproductspriceascending
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY price ASC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC pgproductspriceascending 3, 1

-- 2. pgproductspricedescending
CREATE OR ALTER PROCEDURE 
pgproductspricedescending
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY price DESC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC pgproductspricedescending 3, 1

-- 3. pgproductsnamedescending
CREATE OR ALTER PROCEDURE 
pgproductsnameascending
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY name ASC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC pgproductsnameascending 1, 10

-- 4. pgproductsnamedescending
CREATE OR ALTER PROCEDURE 
 pgproductsnamedescending
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
 ORDER BY name DESC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC  pgproductsnamedescending 1, 10