const poolPromise = require('../config/poolPromise');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


/* logCustomer,logout not working*/
const createCustomer= async (params)=> {
  const {name, email, password, phone, location}= params;
  console.log(password);
  const hashedPass = await bcrypt.hash(password, 8);
  console.log(hashedPass);

  const query=`EXEC createcustomer 
  '${name}','${email}','${hashedPass}','${phone}','${location}'`;
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


// const logCustomer= async (params)=> {
//   const {email, password}= params;
//   const query=`EXEC login '${email}'`;
//   const pool = await poolPromise();
//   const queryresult = pool.query(query).then((result)=>{
//     if (result.recordset.length===0) {
//       return {
//         success: false,
//         error: 'user does not exist',
//       };
//     }
//     return {
//       success: true,
//       data: result.recordset[0],
//     };
//   })
//       .catch((err)=>{
//         return {
//           success: false,
//           error: err.message,
//         };
//       });
//   const data= await queryresult.then(async (result)=>{
//     const dbPass =await pass(password, result.data.password);
//     if (dbPass) {
//       const token = jwt.sign({email: result.data.email}, process.env.JWTKEY, {
//         expiresIn: '12h',
//       });
//       result.token=token;
//       return {
//         success: true,
//         data: result,
//       };
//     }
//   });
//   return (data);
// };
const logout = async (params) =>{
  const {id} = params;
  const query=`EXEC productbyid ${id}`;
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
const updatecustomer = async (reqparams, reqbody) =>{
  const {id} = reqparams;
  const {name, email, password, phone, location}= reqbody;
  const hashedPass = await bcrypt.hash(password, 8);

  const query=`EXEC updatecustomer ${id},
  '${name}','${email}','${hashedPass}','${phone}','${location}'`;
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
const readcustomer = async (params) =>{
  const {id} =params;
  const query=`EXEC findcustomer ${id}`;
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
const readcustomers = async () =>{
  const query=`EXEC readcustomers`;
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
const deletecustomer = async (params) =>{
  const {id} = params;
  const query=`EXEC deletecustomer ${id}`;
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

const pass= async (pas, hash)=>{
  return await bcrypt.compare(pas, hash);
};

module.exports = {
  createCustomer,
  // logCustomer,
  logout,
  updatecustomer,
  readcustomer,
  readcustomers,
  deletecustomer};
