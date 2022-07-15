/* eslint-disable new-cap */
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
categories.post('/',
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

categories.patch('/del/:id',
    deleteCategory);
/*
deleted: BIT
*/


module.exports = {categories};
