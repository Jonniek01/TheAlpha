const poolPromise = require('../config/poolPromise');

const createCustomer= async (params)=> {
  const {name, email, password, phone, location}= params;
  const query=`EXEC createcustomer 
  '${name}','${email}','${password}','${phone}','${location}'`;
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
  createCustomer,
};
