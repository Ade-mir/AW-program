const form = document.getElementById('conversion-form');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amt = amount.value;

  if (!amt) {
    result.innerHTML = 'Please enter a valid amount';
    return;
  }
  if (!from) {
    result.innerHTML = "Please select a 'From' currency";
    return;
  }
  if (!to) {
    result.innerHTML = "Please select a 'To' currency";
    return;
  }

  const myHeaders = new Headers();
  myHeaders.append('apikey', 'uja1hNBuAafPMMknvipVyorYEUtnPhCB');

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amt}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `${amt} ${from} = ${data.result} ${to}`;
    })
    .catch((error) => {
      result.innerHTML = 'Failed to convert currency';
    });
});
