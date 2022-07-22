const {createAdmin,
  logout,
  updateadmin,
  readadmin,
  readadmins,
  deleteadmin}= require('../operations/admins');
const poolPromise = require('../config/poolPromise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  signUp: async (req, res)=>{
    const response=await createAdmin(req.body);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
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
              jwt.sign(user, process.env.ADMNJWTKEY, {
                expiresIn: '12h',
              });
              res.json(
                  {
                    status: 200,
                    success: true,
                    message: 'Logged in',
                    token,
                  });
              return;
            }
            res.status(401).json(
                {
                  status: 401,
                  success: false,
                  error: 'Incorrect password',
                  message: 'Check password',
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
        products: response.data,
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
    const response=await updateadmin(req.params, req.body);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
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
  getAdmin: async (req, res) =>{
    // verify schema here
    const response=await readadmin(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
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
  getAdmins: async (req, res) =>{
    // verify schema here
    const response=await readadmins();
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
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
    const response=await deleteadmin(req.params);
    if (response.success) {
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        products: response.data,
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

