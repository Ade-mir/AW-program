const express = require('express');
const app = express();

// Currenct exchange rates on Google as of 20.01.2023
const exchangeRates = {
  eur: {
    usd: 1.08,
    nok: 10.75,
  },
  usd: {
    eur: 0.92,
    nok: 9.91,
  },
  nok: {
    eur: 0.093,
    usd: 0.1,
  },
};

app.get('/convert/:from/:to/:amount', (req, res) => {
  const from = req.params.from;
  const to = req.params.to;
  const amount = req.params.amount;

  const rate = exchangeRates[from][to];
  const convertedAmount = amount * rate;
  res.json({ result: convertedAmount });
});

app.get('/convert/:from/:to', (req, res) => {
  // const from = req.params.from;
  // const to = req.params.to;

  const { from, to } = req.params; // Using destructuring to extract values and assign to variables
  const rate = exchangeRates[from][to];
  res.json({ rate });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
