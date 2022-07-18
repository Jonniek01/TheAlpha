const {createAdmin,
  logAdmin,
  logout,
  updateadmin,
  readadmin,
  readadmins,
  deleteadmin}= require('../operations/admins');
module.exports = {
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

