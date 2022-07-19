/* eslint-disable new-cap */
const express = require('express');
const {getOrders,
  createOrder,
  getOrder,
  getOrdersUid,
  updateOrder,
  deleteOrder,

} = require('../controllers/orders.js');
const orders = express.Router();


/* GETTING ALL ORDERS*/
orders.get('/',
    getOrders);

/* CREATE order*/
orders.post('/',
    createOrder);
/* GET ORDER BY ID*/
orders.get('/:id',
    getOrder);

/* GET orders by user id*/
orders.get('/user/:uid',
    getOrdersUid);

/* UPDATE ORDER*/
orders.patch('/:id',
    updateOrder);
/* Delete order by id*/
orders.patch('/cl/:id',
    deleteOrder);


module.exports = {orders};
