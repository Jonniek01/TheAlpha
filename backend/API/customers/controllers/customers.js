const poolPromise = require('../config/poolPromise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {createCustomer,
  logout,
  updatecustomer,
  readcustomer,
  readcustomers,
  deletecustomer}= require('../operations/customers');
module.exports = {
  signUp: async (req, res) =>{
    // verify schema here
    const response=await createCustomer(req.body);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        body: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },
  logIn: async (req, res) =>{
    const {email, password}= req.body;
    const query=`EXEC login '${email}'`;
    const pool = await poolPromise();
    pool.query(query).then((result)=>{
      if (result.recordset.length===0) {
        res.status(404).json(
            {
              status: 404,
              success: false,
              error: 'Not found',
              message: 'user does not exist',
            });
        return;
      }
      const user = result.recordset[0];
      bcrypt.compare(password, user.password).then(
          (resp)=>{
            if (resp) {
              const token =
              jwt.sign(user, process.env.CSTMJWTKEY, {
                expiresIn: '12h',
              });
              res.json(
                  {
                    status: 200,
                    success: true,
                    message: 'Logged in',
                    user: user,
                    token,
                  });
              return;
            }
            res.status(401).json(
                {
                  status: 401,
                  success: false,
                  error: 'Incorrect password',
                  message: 'Check passwor',
                });
            return;
          });
    })
        .catch((err)=>{
          return {
            success: false,
            error: err.message,
          };
        });
  },
  logOut: async (req, res) =>{
    // verify schema here
    const response=await logout(req.body);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        body: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },
  update: async (req, res) =>{
    // verify schema here
    const response=await updatecustomer(req.params, req.body);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        data: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },
  getCustomer: async (req, res) =>{
    // verify schema here
    const response=await readcustomer(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        body: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },
  getCustomers: async (req, res) =>{
    // verify schema here
    const response=await readcustomers();
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        body: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },
  deleter: async (req, res) =>{
    // verify schema here
    const response=await deletecustomer(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        body: response.data,
      });
      return;
    }
    res.status(502).send({
      success: false,
      status: 502,
      message: 'Database operation error',
      error: response.error,
    });
  },


};
