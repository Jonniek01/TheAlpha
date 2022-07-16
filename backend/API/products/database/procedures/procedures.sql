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
     WHERE deleted=0
 ORDER BY price ASC;

EXEC productspriceascending

--DROP PROCEDURE SelectAllProducts

-- 2. productspricedescending
CREATE OR ALTER PROCEDURE 
productspricedescending
 AS
 SELECT id, name, price, image, description, category 
     FROM products
         WHERE deleted=0
 ORDER BY price DESC;

EXEC productspricedescending
--

-- 3. productsnameascending
CREATE OR ALTER PROCEDURE 
productsnameascending
 AS
 SELECT id, name, price, image, description, category 
     FROM products
      WHERE deleted=0
 ORDER BY name ASC;

EXEC productsnameascending
--

-- 3. productsnamedescending
CREATE OR ALTER PROCEDURE 
productsnamedescending
 AS
 SELECT id, name, price, image, description, category 
     FROM products
      WHERE deleted=0
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
      WHERE deleted=0
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
      WHERE deleted=0
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
      WHERE deleted=0
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
      WHERE deleted=0
 ORDER BY name DESC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC  pgproductsnamedescending 1, 10


/* products by category all*/
-- 1. catproductspriceascending
CREATE OR ALTER PROCEDURE
catproductspriceascending
@cat VARCHAR(50)
 AS
 SELECT id, name, price, image, description, category 
     FROM products
WHERE category=@cat
AND deleted=0
 ORDER BY price ASC;

EXEC  catproductspriceascending 'outdoor'

-- 2. catproductspricedescending
CREATE OR ALTER PROCEDURE
catproductspricedescending
@cat VARCHAR(50)
 AS
 SELECT id, name, price, image, description, category 
     FROM products
WHERE category=@cat AND deleted=0
 ORDER BY price DESC;

EXEC  catproductspricedescending 'outdoor'

-- 3. catproductsnameascending
CREATE OR ALTER PROCEDURE
catproductsnameascending
@cat VARCHAR(50)
 AS
 SELECT id, name, price, image, description, category 
     FROM products
WHERE category=@cat AND deleted=0
 ORDER BY name ASC;

EXEC  catproductsnameascending 'outdoor'

-- 4. catproductsnamedescending
CREATE OR ALTER PROCEDURE
catproductsnamedescending
@cat VARCHAR(50)
 AS
 SELECT id, name, price, image, description, category 
     FROM products
WHERE category=@cat AND deleted=0
 ORDER BY name DESC;

EXEC  catproductsnamedescending 'outdoor'


/* products by category paginated*/
-- 1.pagcatproductspriceascending
CREATE OR ALTER PROCEDURE 
pagcatproductspriceascending
@cat VARCHAR(50),
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
    WHERE category=@cat
     AND deleted=0
 ORDER BY price ASC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC  pagcatproductspriceascending 'outdoor', 1, 1

-- 2.pagcatproductspricedescending
CREATE OR ALTER PROCEDURE 
pagcatproductspricedescending
@cat VARCHAR(50),
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
    WHERE category=@cat
     AND deleted=0
 ORDER BY price DESC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC  pagcatproductspricedescending 'outdoor', 1, 2


-- 3.pagcatproductsnameascending
CREATE OR ALTER PROCEDURE 
pagcatproductsnameascending
@cat VARCHAR(50),
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
    WHERE category=@cat
     AND deleted=0
 ORDER BY name ASC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC  pagcatproductsnameascending 'outdoor', 1, 2


-- 4.pagcatproductsnamedescending
CREATE OR ALTER PROCEDURE 
pagcatproductsnamedescending
@cat VARCHAR(50),
@PageNumber INT,
@RowsOfPage INT
 AS
 SELECT id, name, price, image, description, category 
     FROM products
    WHERE category=@cat
     AND deleted=0
 ORDER BY name DESC
 OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY

EXEC  pagcatproductsnamedescending 'outdoor', 1, 2


