const express = require('express');
const app = express();

app.get('/convert', (req, res) => {
  // Get the query parameters from the request
  const { to, from, amount } = req.query;

  const myHeaders = new Headers();
  myHeaders.append(
    'apikey',
    'CHANGE-WITH-Exchange-Rates-Data-API-KEY' // Not putting my API because repository is public
  );

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  // Make the API request using the Fetch API
  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send({ error: 'Failed to convert currency' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// http://localhost:3000/convert?to=EUR&from=USD&amount=50
