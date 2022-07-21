USE Customers;
SELECT * FROM customers;
/* 1. creating customer*/
CREATE OR ALTER PROCEDURE 
createcustomer
    @name VARCHAR (255) ,
    @email VARCHAR(255),
    @password VARCHAR(255) ,
    @phone VARCHAR(255) ,
    @location VARCHAR(255) 
AS
BEGIN
INSERT INTO customers
(name, email, password, phone, location)
VALUES
(@name, @email, @password, @phone, @location);
END
GO
EXEC createcustomer 'Fred', 'fred@gmail.com','pass2','+2541234567','Nakuru'

/* 2. Loging in*/
CREATE OR ALTER PROCEDURE 
login
    @email VARCHAR(255)
AS
BEGIN
SELECT
name, email, password, phone, location
FROM customers
WHERE email=@email
AND
deleted=0
END
GO
EXEC login  'fred@gmail.com';

/* 3. Loging out*/

/* 4. Update customer*/
CREATE OR ALTER PROCEDURE 
updatecustomer
@id INT,
    @name VARCHAR (255) ,
    @email VARCHAR(255),
    @password VARCHAR(255) ,
    @phone VARCHAR(255) ,
    @location VARCHAR(255) 
AS
BEGIN
UPDATE customers
SET
name=@name,
email=@email,
password=@password,
phone=@phone,
location=@location
WHERE id=@id;
END
GO

EXEC updatecustomer 2, 'Fred', 'fred@gmail.com','pass2','+2551234567','Nakuru'

/* 5. get gustomer by id*/
CREATE OR ALTER PROCEDURE 
findcustomer
    @id INT
AS
BEGIN
SELECT
id,name, email, password, phone, location
FROM customers
WHERE id=@id
AND
deleted=0
END
GO
EXEC findcustomer  2;

/* 6. get all gustomers*/
CREATE OR ALTER PROCEDURE 
readcustomers
AS
BEGIN
SELECT
id, name, email, password, phone, location
FROM customers
WHERE
deleted=0
END
GO
EXEC readcustomers


/* 7. Delete customer*/
CREATE OR ALTER PROCEDURE 
deletecustomer
@id INT
AS
BEGIN
UPDATE customers
SET
deleted=1
WHERE id=@id
END
GO

EXEC deletecustomer 1



