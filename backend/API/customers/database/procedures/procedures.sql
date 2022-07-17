USE Customers;
SELECT * FROM customers;
/* 1. creating customer*/
CREATE OR ALTER PROCEDURE 
createcustomer
    @name VARCHAR (50) ,
    @email VARCHAR(50),
    @password VARCHAR(50) ,
    @phone VARCHAR(50) ,
    @location VARCHAR(50) 
AS
INSERT INTO customers
(name, email, password, phone, location)
VALUES
(@name, @email, @password, @phone, @location);

EXEC createcustomer 'Fred', 'fred@gmail.com','pass2','+2541234567','Nakuru'

/* 2. Loging in*/
CREATE OR ALTER PROCEDURE 
login
    @email VARCHAR(50)
AS
SELECT
name, email, password, phone, location
FROM customers
WHERE email=@email
AND
deleted=0
EXEC login  'fred@gmail.com';

/* 3. Loging out*/

/* 4. Update customer*/
CREATE OR ALTER PROCEDURE 
updatecustomer
@id INT,
    @name VARCHAR (50) ,
    @email VARCHAR(50),
    @password VARCHAR(50) ,
    @phone VARCHAR(50) ,
    @location VARCHAR(50) 
AS
UPDATE customers
SET
name=@name,
email=@email,
password=@password,
phone=@phone,
location=@location
WHERE id=@id;

EXEC updatecustomer 2, 'Fred', 'fred@gmail.com','pass2','+2551234567','Nakuru'

/* 5. get gustomer by id*/
CREATE OR ALTER PROCEDURE 
findcustomer
    @id INT
AS
SELECT
name, email, password, phone, location
FROM customers
WHERE id=@id
AND
deleted=0
EXEC findcustomer  2;

/* 6. get all gustomers*/
CREATE OR ALTER PROCEDURE 
readcustomers
AS
SELECT
name, email, password, phone, location
FROM customers
WHERE
deleted=0
EXEC readcustomers


/* 7. Delete customer*/
CREATE OR ALTER PROCEDURE 
deletecustomer
@id INT
AS
UPDATE customers
SET
deleted=1
WHERE id=@id;

EXEC deletecustomer 1



