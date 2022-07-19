USE Shopping
SELECT * FROM orders
/*ALL ORDERS*/
CREATE OR ALTER PROCEDURE 
readorders
AS
SELECT
id, customer_id, items, items_count, order_date, total
FROM
orders

EXEC readorders 

/*CREATE ORDER*/
CREATE OR ALTER PROCEDURE 
createorder
@cid INT,
@items VARCHAR(255),
@count INT,
@total FLOAT

AS
INSERT INTO orders
(customer_id, items, items_count, total)
VALUES
(@cid, @items, @count, @total)

EXEC createorder 1, '[{},{},{},]' ,3,855.50

/*ORDER BY ID*/
CREATE OR ALTER PROCEDURE 
orderbyid
@id INT
AS
SELECT
id, customer_id, items, items_count, order_date, total
FROM
orders
WHERE id=@id

EXEC orderbyid 1

/*ORDER BY UID*/
CREATE OR ALTER PROCEDURE 
orderbyuid
@uid INT
AS
SELECT
id, customer_id, items, items_count, order_date, total
FROM
orders
WHERE customer_id=@uid

EXEC orderbyuid 1



/*UPDATE ORDER*/
CREATE OR ALTER PROCEDURE 
updateorder
@id INT,
@items VARCHAR(255),
@count INT,
@total FLOAT

AS
UPDATE orders
SET
items=@items,
items_count=@count,
total=@total

WHERE
id=@id

EXEC updateorder 1, '[{},{},{},{}]' ,4,888.50

/*CLEAR ORDER*/
CREATE OR ALTER PROCEDURE 
clearorder
@id INT

AS
UPDATE orders
SET
cleared=1
WHERE
id=@id

EXEC clearorder 1