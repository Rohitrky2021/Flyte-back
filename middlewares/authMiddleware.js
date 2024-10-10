const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // const token = req.headers['authorization'];
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log("first");
  if (!token) return res.status(401).json({ message: 'Unauthorizeds' });
  console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log(decoded);
    console.log("second2");

    if (err) return res.status(401).json({ message: 'Unauthorizedd' });
    req.user = decoded;
    next();
  });
};


