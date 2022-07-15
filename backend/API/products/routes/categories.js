/* eslint-disable new-cap */
const express = require('express');
// const { } = require("../controllers/categories.js") ;
const categories = express.Router();

/* GET ALL CATEGORIES*/
categories.get('/categories',
    getCategories);

/* CREATE CATEGORY*/
categories.post('/category',
    postCategories);

/* UPDATE CATEGORY*/
categories.patch('/category/:id',
    patchCategory);
/*
name VARCHAR(50) NOT NULL,
description VARCHAR(255) NOT NULL,
*/

/* DELETE CATEGORY*/

categories.patch('/category/del/:id',
    deleteCategory);
/*
deleted: BIT
*/


module.exports = {categories};
