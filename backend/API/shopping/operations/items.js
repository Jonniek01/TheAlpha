/* eslint-disable camelcase */
const poolPromise = require('../config/poolPromise');

const readItems = async () =>{
  const query=`EXEC readitems `;
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
const createitem = async (params) =>{
  const {customer_id, product_id, count, total} = params;
  const query=`EXEC createitems 
  ${customer_id}, ${product_id},${count},${total} `;
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

const getitem = async (params) =>{
  const {id} = params;
  const query=`EXEC itembyid
  ${id} `;
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
const getitemuid = async (params) =>{
  const {uid} = params;
  const query=`EXEC itemsbyuid
  ${uid} `;
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
const updateitem = async (reqparams, reqbody) =>{
  const {id} = reqparams;
  const {customer_id, product_id, count, total} = reqbody;
  const query=`EXEC updateitem ${id},
  ${customer_id}, ${product_id},${count},${total} `;
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

const clearitem = async (params) =>{
  const {id} = params;
  const query=`EXEC clearitem
  ${id} `;
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
  readItems,
  createitem,
  getitem,
  getitemuid,
  updateitem,
  clearitem};
