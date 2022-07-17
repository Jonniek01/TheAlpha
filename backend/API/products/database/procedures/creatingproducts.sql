USE Products
SELECT * FROM products

/*CREATING PRODUCT*/
CREATE OR ALTER PROCEDURE 
createproduct
@name VARCHAR(50),
@price FLOAT,
@image VARCHAR(255),
@description VARCHAR(255),
@category VARCHAR(50)
AS
INSERT INTO products
(name, price, image, description, category)
VALUES
(@name,@price,@image, @description, @category)

EXEC createproduct 'trouser',785, 'brown trouser', 'https://url/image/', 'outdoor'