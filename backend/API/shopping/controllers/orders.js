const {readorders,
  createorder,
  getorder,
  getorderuid,
  updateorder,
  clearorder} = require('../operations/orders');
  /* eslint-disable camelcase */
const poolPromise = require('../config/poolPromise');


module.exports = {
  getOrders: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readorders();
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
  getOrder: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await getorder(req.params);
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

  getOrdersUid: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await getorderuid(req.params);
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

  updateOrder: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await updateorder(req.params, req.body);
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

  createOrder: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await createorder(req.body);
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
  clearOrder: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await clearorder(req.params);
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
  recentOrders: async (req, res)=>{
    const {limit}= req.params;
    const query=`EXEC recentorders ${limit}`;
    const pool = await poolPromise();
    pool.query(query).then((result)=>{
      res.status(200).send({
        success: true,
        status: 200,
        message: 'success',
        body: result.recordset});
    })
        .catch((err)=>{
          res.status(502).send({
            success: false,
            status: 502,
            message: 'Database operation error',
            error: err,
          });
        });
  },


};
