const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname});
});

app.get('/ex1', (req, res) => {
  res.sendFile('./ex1.html', {root: __dirname});
});

app.get('/ex2', (req, res) => {
  res.sendFile('./ex2.html', {root: __dirname});  
});

app.get('/ex3', (req, res) => {
  res.sendFile('./ex3.html', {root: __dirname});
});

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
});
