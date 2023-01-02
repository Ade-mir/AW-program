function convertCurrencies() {
  let rateFromNokToSek = 1.1;
  let rateFromNokToDkk = 0.8;

  while (true) {
    let from = prompt(
      'Input the amount and currency you want to convert from (ex. 100NOK) - You can choose between NOK, SEK and DKK'
    );

    if (from == null) {
      break;
    }

    let toCurrency = prompt(
      'Input the currency you want to convert to (NOK, SEK, DKK)'
    );

    if (toCurrency == null) {
      break;
    }

    let fromAmount = from.slice(0, from.length - 3);
    let fromCurrency = from.slice(from.length - 3);

    let rate = 0;

    if (fromCurrency == 'NOK') {
      if (toCurrency == 'NOK') {
        rate = 1;
      } else if (toCurrency == 'SEK') {
        rate = rateFromNokToSek;
      } else if (toCurrency == 'DKK') {
        rate = rateFromNokToDkk;
      }
    } else if (fromCurrency == 'SEK') {
      if (toCurrency == 'NOK') {
        rate = 1 / rateFromNokToSek;
      } else if (toCurrency == 'SEK') {
        rate = 1;
      } else if (toCurrency == 'DKK') {
        rate = rateFromNokToDkk / rateFromNokToSek;
      }
    } else if (fromCurrency == 'DKK') {
      if (toCurrency == 'NOK') {
        rate = 1 / rateFromNokToDkk;
      } else if (toCurrency == 'SEK') {
        rate = rateFromNokToSek / rateFromNokToDkk;
      } else if (toCurrency == 'DKK') {
        rate = 1;
      }
    }

    var toAmount = fromAmount * rate;

    alert(toAmount + toCurrency);
  }
}
