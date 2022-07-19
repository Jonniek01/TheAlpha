/* eslint-disable new-cap */
const express = require('express');
const {getItems,
  getItem,
  getItemsUid,
  updateItem,
  clearItem,
  createItem} = require('../controllers/items');

const items = express.Router();


/* GETTING ALL Items*/
items.get('/',
    getItems);

/* CREATE item*/
items.post('/',
    createItem);
/* GET item BY ID*/
items.get('/:id',
    getItem);

/* GET items by user id*/
items.get('/user/:uid',
    getItemsUid);

/* UPDATE item*/
items.patch('/:id',
    updateItem);
/* Delete item by id*/
items.delete('/:id',
    clearItem);


module.exports = {items};
