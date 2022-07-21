USE Admins;
SELECT * FROM admins;
go
/* 1. creating admin*/
CREATE OR ALTER PROCEDURE 
createadmin
    @username VARCHAR (MAX) ,
    @email VARCHAR (MAX),
    @password VARCHAR(MAX) 
AS
INSERT INTO admins
(username, email, password)
VALUES
(@username, @email, @password);

EXEC createadmin 'Fred', 'fred@gmail.com', 'pass1'

/* 2. Loging in*/
CREATE OR ALTER PROCEDURE 
login
    @email VARCHAR (MAX)
AS
SELECT
username, email, password
FROM admins
WHERE email=@email
AND
deleted=0
EXEC login  'fred@gmail.com';

/* 3. Loging out*/

/* 4. Update admin*/
CREATE OR ALTER PROCEDURE 
updateadmin
@id INT,
    @username VARCHAR (50) ,
    @email VARCHAR(50),
    @password VARCHAR(50) 
AS
UPDATE admins
SET
username=@username,
email=@email,
password=@password
WHERE id=@id;

EXEC updateadmin 1, 'Fred', 'fred@gmail.com','pass10'

/* 5. get admin by id*/
CREATE OR ALTER PROCEDURE 
findadmin
    @id INT
AS
SELECT
id,username, email, password
FROM admins
WHERE id=@id
AND
deleted=0
EXEC findadmin  1;

/* 6. get all admins*/
CREATE OR ALTER PROCEDURE 
readadmins
AS
SELECT
id, username, email, password
FROM admins
WHERE
deleted=0
EXEC readadmins


/* 7. Deleteadminr*/
CREATE OR ALTER PROCEDURE 
deleteadmin
@id INT
AS
UPDATE admins
SET
deleted=1
WHERE id=@id;

EXEC deleteadmin 1



