const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hell0, This is a FoodExpress server! GET');
});

app.post('/', (req, res) => {
  res.send('Hell0, This is a FoodExpress server! POST');
});

app.put('/', (req, res) => {
  res.send('Hell0, This is a FoodExpress server! PUT');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});