// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // const generateToken = (user) =>
// //   jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1m' });

// const generateToken = (user) => {
//   const payload = user;
//   const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1m' });
//   return token;
// };

// const authenticateWithJWT = (req, res, next) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).send('Devi autenticarti');
//   }
//   const token = authorization.split(' ')[1];

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).send('token scaduto o non valido');
//     }
//     req.user = user;
//     next();
//   });
// };

// module.exports = {
//   generateToken,
//   authenticateWithJWT,
// };
