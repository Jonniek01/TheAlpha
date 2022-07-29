/* eslint-disable new-cap */
const express = require('express');
const customerAuth = require('../middlewares/customerAuth');
const mailHandler = require('../middlewares/mailhandler');
const adminAuth = require('../middlewares/adminAuth');

const {getOrders,
  createOrder,
  getOrder,
  getOrdersUid,
  updateOrder,
  clearOrder,
  recentOrders,

} = require('../controllers/orders.js');
const orders = express.Router();


/* GETTING ALL ORDERS*/
orders.get('/', adminAuth,
    getOrders);

/* CREATE order*/
orders.post('/', customerAuth, mailHandler,
    createOrder);
/* GET ORDER BY ID*/
orders.get('/:id', customerAuth,
    getOrder);

/* GET orders by user id*/
orders.get('/user/:uid', customerAuth,
    getOrdersUid);

/* UPDATE ORDER*/
orders.patch('/:id', customerAuth,
    updateOrder);
/* Delete order by id*/
orders.patch('/cl/:id', customerAuth,
    clearOrder);
/* Recent orders*/
orders.get('/recent/:limit', adminAuth,
    recentOrders);


module.exports = {orders};
