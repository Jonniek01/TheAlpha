module.exports = {
  getProducts: async (req, res) =>{
    res.send('getting all products');
    // verify params and body schema and continue to operations
  },
  getProductsPaginated: async (req, res) =>{
    const {page, orderby, orderform} = req.params;
    res.send(`getting products paginated page: ${page},
     order by: ${orderby}, order form: ${orderform} `);

    // verify params and body schema and continue to operations
  },
  getProductsByCategory: async (req, res) =>{
    const {category, orderby, orderform} = req.params;
    res.send(`getting products paginated category: ${category},
     order by: ${orderby}, order form: ${orderform} `);
    // verify params and body schema and continue to operations
  },
  getProductsByCategoryPaginated: async (req, res) =>{
    const {page, category, orderby, orderform} = req.params;
    res.send(`getting products paginated category: ${category},
    page: ${page}, order by: ${orderby}, order form: ${orderform} `);
    // verify params and body schema and continue to operations
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


