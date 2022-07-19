const readOrders = async (params) =>{
  return {
    success: true,
    data: 'test succesful',
  };

  const {id} = params;
  const query=`EXEC clearproduct ${id}`;
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
  readOrders,
};

