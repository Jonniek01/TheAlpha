/* eslint-disable new-cap */
const express = require('express');

const {signUp,
  logIn,
  logOut,
  update,
  getCustomer,
  getCustomers,
  deleter} = require('../controllers/customers.js');
const customers = express.Router();

/* 1. CUSTOMERS SIGN UP*/
customers.post('/signup',
    signUp);

/*    id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL UNIQUE,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
     */

/* 2.  Log in*/
customers.post('/login',
    logIn);
/* email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
*/

/* 3. Log out*/
// Require to be logged in
customers.patch('/logout',
    logOut);

/* 4.  update account*/

// Require to be logged in
customers.patch('/update',
    update);
/*
    id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL UNIQUE,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
*/
/* 5. Get customer by id*/

customers.get('/id/:id',
    getCustomer);

/* 6. Get all customers*/

customers.get('/all',
    getCustomers);

/* 7. Deleting a customer*/

customers.patch('/delete/',
    deleter);
/*
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,

*/


module.exports = {customers};
