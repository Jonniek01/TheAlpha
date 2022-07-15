/* eslint-disable new-cap */
const express = require('express');
const {
  getProducts,
  getProductsPaginated,
  getProductsByCategory,
  getProductsByCategoryPaginated,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct} = require('../controllers/products.js');
const products = express.Router();

/* orderby: name or price or none {"na"}
orderform: descending or ascending {asc, desc} or none {"na"}
page: pass a page. Server should respond when it hits the last page.
*/

/*  READING PRODUCTS*/
// 1. all products in the DB: pass orderby and orderform parameters
// Admin privillage, communicate with admins micro service
products.get('/all/:orderby/:orderform',
    getProducts);
// 2.All products paginated: pass page, orderby
// and orderform parameters, for users
products.get('/pg/:page/:orderby/:orderform',
    getProductsPaginated);
// 3. products by category all:orderby and orderform parameters, for users
products.get('/category/all/:category/:orderby/:orderform',
    getProductsByCategory);
// 4. products by category paginated: pass page,
// orderby and orderform parameters, for users
products.get('/category/pg/:category/:page/:orderby/:orderform',
    getProductsByCategoryPaginated);
// 5. Get product by id
products.get('/:id',
    getProductById);

/* ------BELOW REQUIRE ADMIN PRIVILLAGE,
USE adminverfication MIDDLEWARE
TO COMMUNICATE TO admins MICROSERVICE and verify
*/
/*  CREATING PRODUCTS*/

products.post('/post',
    postProduct);
/*
     name VARCHAR (50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     image VARCHAR(255) NOT NULL,
     description VARCHAR(255) NOT NULL,
     category VARCHAR(50) NOT NULL,
*/

/* UPDATING PRODUCTS*/
products.patch('/:id',
    patchProduct);
/*
     name VARCHAR (50) NOT NULL,
     price VARCHAR(50) NOT NULL,
     image VARCHAR(255) NOT NULL,
     description VARCHAR(255) NOT NULL,
     category VARCHAR(50) NOT NULL,
*/

/* DELETING PRODUCTS*/
products.patch('/del/:id', deleteProduct);
/*
deleted: BIT
*/

module.exports = {products};
