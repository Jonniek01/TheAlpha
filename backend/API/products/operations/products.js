/* eslint-disable require-jsdoc */
const poolPromise = require('../config/poolPromise');

const readAllProucts= async (params)=> {
  let query='';
  const {orderby, orderform}= params;
  if (orderby==='price'&&orderform==='asc') {
    query='EXEC productspriceascending';
  } else if (orderby==='price'&&orderform==='desc') {
    query='EXEC productspricedescending';
  } else if (orderby==='name'&&orderform==='asc') {
    query='EXEC productsnameascending';
  } else if (orderby==='name'&&orderform==='desc') {
    query='EXEC productsnamedescending';
  } else {
    return {
      success: false,
      error: 'Error on url parameters',
    };
  }
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


module.exports={readAllProucts};
