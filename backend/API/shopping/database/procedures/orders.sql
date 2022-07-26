USE Shopping
SELECT * FROM orders
/*ALL ORDERS*/
CREATE OR ALTER PROCEDURE 
readorders
AS
SELECT
id, customer_name, customer_id, items, items_count, order_date, total
FROM
orders

EXEC readorders 

/*CREATE ORDER*/
CREATE OR ALTER PROCEDURE 
createorder
@cid INT,
@cname VARCHAR(255),
@items VARCHAR(255),
@count INT,
@total FLOAT
AS
INSERT INTO orders
(customer_id, customer_name, items, items_count, total)
VALUES
(@cid, @cname, @items, @count, @total)

EXEC createorder 110, "Peterson", '[{"name":"jordan","price":5000},{"name":"handbag","price":10000}]' ,2,10000

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
ordersbyuid
@uid INT
AS
SELECT
id, customer_id, items, items_count, order_date, total
FROM
orders
WHERE customer_id=@uid

EXEC ordersbyuid 1



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

/*Recent orders*/

CREATE OR ALTER PROCEDURE 
recentorders
@limit INT
 AS
 SELECT
 id, customer_name, customer_id, items, items_count, order_date, total
     FROM orders
 ORDER BY order_date ASC
 OFFSET 0 ROWS
FETCH NEXT @limit ROWS ONLY

exec recentorders 4