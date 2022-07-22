const jwt = require('jsonwebtoken');

const customerAuth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(403).json({
      message: 'Access denied, no token provided',
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.CSTMJWTKEY);
    req.user = decoded;
    next();
  } catch (error) {
    try {
      const decoded = jwt.verify(token, process.env.ADMNJWTKEY);
      req.user = decoded;
      next();
    } catch {
      return res.status(403).json({
        message: 'Access denied, token invalid',
      });
    }
  }
};

module.exports = customerAuth;
