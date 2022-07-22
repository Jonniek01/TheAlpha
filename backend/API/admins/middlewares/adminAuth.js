const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(403).json({
      message: 'Access denied, no token provided',
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.ADMNJWTKEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      message: 'Access denied, token invalid',
    });
  }
};

module.exports = adminAuth;
