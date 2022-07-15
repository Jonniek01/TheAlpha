module.exports = {
  getCategories: async (req, res) =>{
    res.send('getting all categories');
    // verify params and body schema and continue to operations
  },
  postCategory: async (req, res) =>{
    const {name, description} = req.body;
    res.send(`creating category with
     name ${name}, and description ${description}`);
    // verify params and body schema and continue to operations
  },
  patchCategory: async (req, res) =>{
    const {id} =req.params;
    const {name, description} = req.body;
    res.send(`Updating category with id ${id} to
     name ${name}, and description ${description}`);
    // verify params and body schema and continue to operations
  },
  deleteCategory: async (req, res) =>{
    const {id} =req.params;
    res.send(`Deleting category with id ${id} `);
    // verify params and body schema and continue to operations
  },
};


