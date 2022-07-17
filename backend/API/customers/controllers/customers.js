const {createCustomer,
}= require('../operations/customers');
module.exports = {
  signUp: async (req, res) =>{
    // verify schema here
    const response=await createCustomer(req.body);
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
    res.send({mesage: 'login here'});
  },
  logOut: async (req, res) =>{
    res.send({mesage: 'logout here'});
  },
  update: async (req, res) =>{
    res.send({mesage: 'update here'});
  },
  getCustomer: async (req, res) =>{
    res.send({mesage: 'customer here'});
  },
  getCustomers: async (req, res) =>{
    res.send({mesage: 'customers here'});
  },
  deleter: async (req, res) =>{
    res.send({mesage: 'delete here'});
  },


};
