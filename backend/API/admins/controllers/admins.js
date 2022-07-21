const {createAdmin,
  logAdmin,
  logout,
  updateadmin,
  readadmin,
  readadmins,
  deleteadmin}= require('../operations/admins');
// const poolPromise = require('../config/poolPromise');
// const bcrypt = require('bcryptjs');


module.exports = {
  // signUp: async (req, res)=>{
  //   const {name,
  //     email,
  //     password} = req.body;
  //   try {
  //     const pool = await poolPromise();
  //     const hashPass = await bcrypt.hash(password, 8);
  //     console.log(hashPass);
  //     pool.request()
  //         .input('username', name)
  //         .input('email', email)
  //         .input('password', hashPass)
  //         .execute('createadmin').then((res)=>console.log(res));
  //   } catch (error) {

  //   }
  //   const response=await createAdmin(req.body);
  //   if (response.success) {
  //     res.status(200).send({
  //       success: true,
  //       status: 200,
  //       message: 'success',
  //       products: response.data,
  //     });
  //     return;
  //   }
  //   res.status(502).send({
  //     success: false,
  //     status: 502,
  //     message: 'Database operation error',
  //     error: response.error,
  //   });
  // },
  // logIn: async (req, res)=>{
  //   const {email, password} = req.body;
  //   try {
  //     const pool = await poolPromise();
  //     const result = await pool.request()
  //         .input('email', email)
  //         .execute('login');
  //     // console.log(res);
  //     const user = result.recordset[0];
  //     console.log(user.password);
  //     const userpass = await bcrypt.compare(password, user.password);
  //     console.log(userpass);
  //     if (result) {
  //       return res.status(200).send({
  //         success: true,
  //         status: 200,
  //         message: 'success',
  //         products: res.data,
  //       });
  //     } else {
  //       return res.status(502).send({
  //         success: false,
  //         status: 502,
  //         message: 'Database operation error',
  //         error: response.error,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // },
  signUp: async (req, res) =>{
    // verify schema here
    const {adminkey} = req.body;
    if (adminkey===process.env.ADMINKEY) {
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
    } else {
      res.status(401).send({
        success: false,
        status: 401,
        message: 'Provide an admin key to register as an admin',
        error: 'not authorized',
      });
    }
  },
  logIn: async (req, res) =>{
    // verify schema here
    const response=await logAdmin(req.body);
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

