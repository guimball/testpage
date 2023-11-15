const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('1');
});

app.get('/ex1', (req, res) => {
  res.send('2'); 
});

app.get('/ex2', (req, res) => {
  res.send('3');
});

app.get('/ex3', (req, res) => {
  res.send('4'); 
});

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
});
