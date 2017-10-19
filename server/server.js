const express = require('express');

let app = express();

app.get('/', (req, res) => {
  // res.status(404).send('Hello world!');
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {

  let users = [
    {name: "Diego", age: 32},
    {name: "Mauro", age: 32},
    {name: "Victor", age: 32}
  ];

  res.status(200).send(users);
});

app.listen(3000);
module.exports.app = app;
