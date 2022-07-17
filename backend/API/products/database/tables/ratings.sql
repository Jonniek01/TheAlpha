use Customers

CREATE TABLE ratings
(
    id INT NOT NULL PRIMARY KEY,
    product_id int NOT NULL,
    rating FLOAT NOT NULL,
    customer_id char(50) NOT NULL,
    deleted BIT DEFAULT 0

)