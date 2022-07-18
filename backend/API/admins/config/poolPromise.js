/* eslint-disable require-jsdoc */
const mssql = require('mssql');
const sqlConfig = require('./config');

async function poolPromise() {
  const pool = await mssql.connect(sqlConfig);
  if (pool.connected) {
    return pool;
  }
}

module.exports = poolPromise;
