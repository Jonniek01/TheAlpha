/* eslint-disable camelcase */
const poolPromise = require('../config/poolPromise');

const readorders = async () =>{
  const query=`EXEC readorders`;
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
const createorder = async (params) =>{
  const {customer_id, customer_name, items, items_count, total} = params;
  const query=`EXEC createorder
  ${customer_id}, ${customer_name} ,${items},${items_count},${total} `;
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

const getorder= async (params) =>{
  const {id} = params;
  const query=`EXEC orderbyid
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
const getorderuid = async (params) =>{
  const {uid} = params;
  const query=`EXEC ordersbyuid
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
const updateorder = async (reqparams, reqbody) =>{
  const {id} = reqparams;
  const {items, items_count, total} = reqbody;
  const query=`EXEC updateorder ${id},
${items},${items_count},${total} `;
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

const clearorder = async (params) =>{
  const {id} = params;
  const query=`EXEC clearorder
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
  readorders,
  createorder,
  getorder,
  getorderuid,
  updateorder,
  clearorder};
