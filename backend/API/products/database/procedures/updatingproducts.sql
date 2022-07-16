USE Products
SELECT * FROM products

/*UPDATING PRODUCTS*/
CREATE OR ALTER PROCEDURE 
updateproduct
@id VARCHAR(50),
@name VARCHAR(50),
@price FLOAT,
@image VARCHAR(255),
@description VARCHAR(255),
@category VARCHAR(50)
 AS
UPDATE products
SET
name=@name,
price=@price,
image=@image,
description=@description,
category=@category
WHERE
id=@id;
EXEC productbyid 2
