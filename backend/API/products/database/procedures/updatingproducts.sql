USE Products
SELECT * FROM products

/*UPDATING PRODUCTS*/
CREATE OR ALTER PROCEDURE 
updateproduct
@id INT,
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
EXEC updateproduct 2 ,'Brazer', 2520.30, 
'http://imagex/url.com', 'cute brazer','official'
