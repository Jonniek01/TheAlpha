const poolPromise = require('../config/poolPromise');
const bcrypt = require('bcryptjs');

/* logAdmin,logout not working*/
const createAdmin= async (params)=> {
  const {name, email, password, phone, location}= params;
  const hashedPass = await bcrypt.hash(password, 8);
  const query=`EXEC createadmin
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


const logAdmin= async (params)=> {
  const {email, password}= params;
  const query=`EXEC login '${email}'`;
  const pool = await poolPromise();
  const queryresult = pool.query(query).then((result)=>{
    if (result.recordset.length===0) {
      return {
        success: false,
        error: 'user does not exist',
      };
    }
    return {
      success: true,
      data: result.recordset[0],
    };
  })
      .catch((err)=>{
        return {
          success: false,
          error: err.message,
        };
      });
  const data= await queryresult;

  if (data.success) {
    const dbPass = await bcrypt.compare(password, data.data.password);
    console.log('progressing', dbPass);

    return {
      success: true,
      data: data,
    };
  }
  console.log(data);
  return (data);
};
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
const updateadmin= async (reqparams, reqbody) =>{
  const {id} = reqparams;
  const {name, email, password, phone, location}= reqbody;
  const hashedPass = await bcrypt.hash(password, 8);

  const query=`EXEC updateadmin${id},
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
const readadmin = async (params) =>{
  const {id} =params;
  const query=`EXEC findadmin ${id}`;
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
const readadmins = async () =>{
  const query=`EXEC readadmins`;
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
const deleteadmin = async (params) =>{
  const {id} = params;
  const query=`EXEC deleteadmin ${id}`;
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
  createAdmin,
  logAdmin,
  logout,
  updateadmin,
  readadmin,
  readadmins,
  deleteadmin};
