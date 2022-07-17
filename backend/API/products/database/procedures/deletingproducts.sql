USE Products
SELECT * FROM products

/*UPDATING PRODUCTS*/
CREATE OR ALTER PROCEDURE 
clearproduct
@id INT
AS
UPDATE products
SET
deleted=1
WHERE
id=@id;
EXEC clearproduct 2