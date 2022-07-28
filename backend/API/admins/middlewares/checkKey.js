const checkKey = (req, res, next) => {
  const {admkey}=req.body;
  if (!admkey) {
    return res.status(403).json({
      message: 'Access denied, no admin key provided',
    });
  } else

  if (admkey==process.env.ADMKEY) {
    next();
  } else {
    return res.status(403).json({
      message: 'Access denied, Invalid admin key',
    });
  }
};

module.exports = checkKey;
