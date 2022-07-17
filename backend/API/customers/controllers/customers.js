const { }= require('../operations/customers');
module.exports = {
  signUp: async (req, res) =>{
    res.send({mesage: 'signup here'});
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
