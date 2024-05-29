const path = require('path');
const express = require('express');
const app = express();

const postsRouter = require('./routers/posts.js');
const routersLogger = require('./middlewares/routersLogger.js');
const errorsFormatter = require('./middlewares/errorsFormatter.js');
const routesNotFound = require('./middlewares/routesNotFound.js');

// body parser per application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.use(routersLogger);

// routers
app.get('/', (req, res) => {
  res.send(`<h1>Posts</h1>`);
});

app.use('/posts', postsRouter);
app.use(routesNotFound);
app.use(errorsFormatter);

//start server
app.listen(3000, () => {
  console.log('Server attivo sulla porta http://localhost:3000.');
});
