/* eslint-disable new-cap */
const express = require('express');
const customerAuth = require('../middlewares/customerAuth');
const adminAuth = require('../middlewares/adminAuth');

const {getItems,
  getItem,
  getItemsUid,
  updateItem,
  clearItem,
  createItem} = require('../controllers/items');

const items = express.Router();


/* GETTING ALL Items*/
items.get('/', adminAuth,
    getItems);

/* CREATE item*/
items.post('/', customerAuth,
    createItem);
/* GET item BY ID*/
items.get('/:id', customerAuth,
    getItem);

/* GET items by user id*/
items.get('/user/:uid', customerAuth,
    getItemsUid);

/* UPDATE item*/
items.patch('/:id', customerAuth,
    updateItem);
/* Delete item by id*/
items.delete('/:id', customerAuth,
    clearItem);


module.exports = {items};
