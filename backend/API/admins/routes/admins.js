/* eslint-disable new-cap */
const express = require('express');
const adminAuth = require('../middlewares/adminAuth');


const {signUp,
  logIn,
  logOut,
  update,
  getAdmin,
  getAdmins,
  deleter} = require('../controllers/admins.js');
const admins = express.Router();

/* 1. CUSTOMERS SIGN UP*/
admins.post('/signup',
    signUp);

/*    id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL UNIQUE,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
     */

/* 2.  Log in*/
admins.post('/login',
    logIn);
/* email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
*/

/* 3. Log out*/
// Require to be logged in
admins.patch('/logout',
    logOut);

/* 4.  update account*/

// Require to be logged in
admins.patch('/update/:id', adminAuth,
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

admins.get('/id/:id', adminAuth,
    getAdmin);

/* 6. Get all admins*/
// Require admin
admins.get('/all', adminAuth,
    getAdmins);

/* 7. Deleting a customer*/
// Require to be logged in

admins.patch('/delete/:id', adminAuth,
    deleter);
/*
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,

*/


module.exports = {admins};
