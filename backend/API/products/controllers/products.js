const {readAllProucts,
  readProductsPaginated,
  readAllProuctsByCategory,
  readProuctsByCategoryPaginated} = require('../operations/products');

module.exports = {
  getProducts: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readAllProucts(req.params);
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
  getProductsPaginated: async (req, res) =>{
  // verify params and body schema and continue to operations
    const response=await readProductsPaginated(req.params);
    if (response.success) {
      if (response.data.length===0) {
        res.status(502).send({
          success: false,
          status: 502,
          message: 'Database operation error',
          error: 'page does not exist',
        });
        return;
      }
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
  getProductsByCategory: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readAllProuctsByCategory(req.params);
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
  getProductsByCategoryPaginated: async (req, res) =>{
    // verify params and body schema and continue to operations
    const response=await readProuctsByCategoryPaginated(req.params);
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
  getProductById: async (req, res) =>{
    const {id} = req.params;
    res.send(`getting product by id ${id} `);
    // verify params and body schema and continue to operations
  },
  postProduct: async (req, res) =>{
    const {name, price, image, description, category} = req.body;
    res.send(`creating product by name ${name}, price ${price} 
    image ${image}, description ${description} category ${category} `);
    // verify params and body schema and continue to operations
  },
  patchProduct: async (req, res) =>{
    const {id} = req.params;
    const {name, price, image, description, category} = req.body;
    res.send(`Updating product with id ${id} 
     to  name ${name}, price ${price} 
    image ${image}, description ${description} category ${category} `);
    // verify params and body schema and continue to operations
  },
  deleteProduct: async (req, res) =>{
    const {id} = req.params;
    res.send(`deleting product by id ${id} `);
    // verify params and body schema and continue to operations
  },
};


