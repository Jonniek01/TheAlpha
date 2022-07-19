USE Shopping
SELECT * FROM items
/*ALL ITEMS*/
CREATE OR ALTER PROCEDURE 
readitems
AS
SELECT
id, customer_id, product_id, count, total, date_added
FROM
items

EXEC readitems

/*CREATE ITEM*/
CREATE OR ALTER PROCEDURE 
createitems
@cid INT,
@product_id INT,
@count INT,
@total FLOAT

AS
INSERT INTO items
(customer_id, product_id, count, total)
VALUES
(@cid, @product_id, @count, @total)

EXEC createitems 2, 22, 5, 522.55

/*ITEM BY ID*/
CREATE OR ALTER PROCEDURE 
itembyid
@id INT
AS
SELECT
id, customer_id, product_id, count, date_added, total
FROM
items
WHERE id=@id

EXEC itembyid 1
CREATE OR ALTER PROCEDURE 
createitems
@cid INT,
@product_id INT,
@count INT,
@total FLOAT

AS
INSERT INTO items
(customer_id, product_id, count, total)
VALUES
(@cid, @product_id, @count, @total)

EXEC createitems 2, 22, 5, 522.55

/*ITEMS BY UID*/
CREATE OR ALTER PROCEDURE 
itemsbyuid
@uid INT
AS
SELECT
id, customer_id, product_id, count, date_added, total
FROM
items
WHERE customer_id=@uid

EXEC itemsbyuid 2



/*UPDATE ITEM*/
CREATE OR ALTER PROCEDURE 
updateitem
@id INT,
@cid INT,
@product_id INT,
@count INT,
@total FLOAT
AS
UPDATE items
SET
customer_id=@cid,
product_id=@product_id,
count=@count,
total=@total

WHERE
id=@id

EXEC updateitem 1, 12, 11, 2, 222.00
/*CLEAR ITEM*/
CREATE OR ALTER PROCEDURE 
clearitem
@id INT

AS
UPDATE items
SET
active=0
WHERE
id=@id

EXEC clearitem 1