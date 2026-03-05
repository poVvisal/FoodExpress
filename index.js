const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hell0, This is a FoodExpress server! GET');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});