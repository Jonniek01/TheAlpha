/* eslint-disable new-cap */
const express = require('express');
// const { } = require("../controllers/products.js") ;
const products = express.Router();

/* orderby: name or price or none {"na"}
orderform: descending or ascending {asc, desc} or none {"na"}

page: pass a page. Server should respond when it hits the last page.
*/

/*  READING PRODUCTS*/
// 1. all products in the DB: pass orderby and orderform parameters
// Admin privillage, communicate with admins micro service
products.get('/all/orderBy/:orderForm',
    getProducts);
// 2.All products paginated: pass page, orderby
// and orderform parameters, for users
products.get('/:page/:orderBy/:orderForm',
    getProductsPaginated);
// 3. products by category all:orderby and orderform parameters, for users
products.get('/category/all/:category/:orderBy/:orderForm',
    getProductsByCategory);
// 4. products by category paginated: pass page,
// orderby and orderform parameters, for users
products.get('/category/pg/:category/:page/:orderBy/:orderForm',
    getProductsByCategoryPaginated);
// 5. Get product by id
products.get('/:id',
    getProductById);


/*  CREATING PRODUCTS*/
// admin privillage
products.post('/create',
    create);

/* UPDATING PRODUCTS*/
// admin privillage
products.patch('/:id',
    patchPost);
/*
     name VARCHAR (50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     image VARCHAR(255) NOT NULL,
     description VARCHAR(255) NOT NULL,
     category VARCHAR(50) NOT NULL,
*/

/* DELETING PRODUCTS*/
// admin privillage
products.patch('/del/:id', patchPost);
/*
deleted: BIT
*/

module.exports = {products};
