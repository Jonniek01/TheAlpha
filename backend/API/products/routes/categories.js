/* eslint-disable new-cap */
const adminAuth = require('../middlewares/adminAuth');

const express = require('express');

const {getCategories,
  postCategory,
  patchCategory,
  deleteCategory,
} = require('../controllers/categories.js');
const categories = express.Router();

/* GET ALL CATEGORIES*/
categories.get('/all',
    getCategories);

/* CREATE CATEGORY*/
categories.post('/', adminAuth,
    postCategory);
/*
name VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
*/


/* UPDATE CATEGORY*/
categories.patch('/:id',
    patchCategory);
/*
name VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
*/

/* DELETE CATEGORY*/

categories.patch('/del/:id', adminAuth,
    deleteCategory);
/*
deleted: BIT
*/


module.exports = {categories};
