USE Products
SELECT * FROM categories
DELETE categories
/*CREATING CATEGORY*/
CREATE OR ALTER PROCEDURE 
createcategory
@name VARCHAR(50),
@description VARCHAR(255)
AS
INSERT INTO categories
(name, description)
VALUES
(@name, @description)

EXEC createcategory 'outdoor', 'clothing for outdoor activities'

/*READING CATEGORIES*/
CREATE OR ALTER PROCEDURE 
readcategories
AS
SELECT id,name, description
FROM categories
WHERE deleted=0


EXEC readcategories 


/*UPDATE CATEGORY*/
CREATE OR ALTER PROCEDURE 
updatecategory
@id INT,
@name VARCHAR(50),
@description VARCHAR(255)
AS
UPDATE categories
SET
name=@name,
description=@description
WHERE
id=@id


EXEC updatecategory 1,'official', 'clothing for outdoor activities'

/*DELITING CATEGORY*/
CREATE OR ALTER PROCEDURE 
deletecategory
@id INT
AS
UPDATE categories
SET
deleted=1
WHERE
id=@id


EXEC deletecategory 1
