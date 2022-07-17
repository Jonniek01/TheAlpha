const poolPromise = require('../config/poolPromise');
const readAllCategories= async (params)=> {
  const query='EXEC readcategories';
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};


const createCategory= async (params)=> {
  const {name, description} = params;
  const query=`EXEC createcategory '${name}','${description}'`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

const updateCategory= async (reqparams, reqbody)=> {
  const {id}= reqparams;
  const {name, description} = reqbody;
  const query=`EXEC updatecategory ${id}, '${name}','${description}'`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};
const removeCategory= async (params)=> {
  const {id}= params;
  const query=`EXEC deletecategory ${id}`;
  const pool = await poolPromise();
  const data = pool.query(query).then((result)=>{
    return {
      success: true,
      data: result.recordset,
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  return (data);
};

module.exports = {
  readAllCategories,
  createCategory,
  updateCategory,
  removeCategory};
