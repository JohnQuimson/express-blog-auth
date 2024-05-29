const path = require('path');
const express = require('express');
const app = express();
const users = require('./db/users.json');
const { generateToken, authenticateWithJWT } = require('./middlewares/jwt.js');

// body parser json
app.use(express.json());
// body parser per application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(404).send(`Credenziali errate`);
  }
  const token = generateToken(user);
  res.send(token);
});

const postsRouter = require('./routers/posts.js');
const routersLogger = require('./middlewares/routersLogger.js');
const errorsFormatter = require('./middlewares/errorsFormatter.js');
const routesNotFound = require('./middlewares/routesNotFound.js');

app.use(express.static('./public'));
app.use(routersLogger);

// app.use(authenticateWithJWT);

// routers
app.get('/', (req, res) => {
  res.send(`<h1>Benvenuto nel post con dati sensibili!</h1>`);
});

app.use('/posts', postsRouter);
app.use(routesNotFound);
app.use(errorsFormatter);

//start server
app.listen(3000, () => {
  console.log('Server attivo sulla porta http://localhost:3000.');
});
