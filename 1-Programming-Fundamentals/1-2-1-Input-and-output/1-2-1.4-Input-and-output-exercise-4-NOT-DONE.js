// Convert a program that allows you to convert between currencies (NOK, DKK, SEK).

// IMPLEMENTED - Ask the user to input the ammount and "from" currency (ex: 300NOK).
// IMPLEMENTED - Ask the user to input the "to" currency (ex: DKK).
// IMPLEMENTED - Convert to the requested currency.
// IMPLEMENTED - Display the value to the user.

nokToDkk(1);
function nokToDkk(nok) {
  return nok * 0.72;
}
nokToSek(1);
function nokToSek(nok) {
  return nok * 1.05;
}
dkkToNok(1);
function dkkToNok(dkk) {
  return dkk * 1.39;
}
dkkToSek(1);
function dkkToSek(dkk) {
  return dkk * 1.46;
}
sekToNok(1);
function sekToNok(sek) {
  return sek * 0.95;
}
sekToDkk(1);
function sekToDkk(sek) {
  return sek * 0.68;
}

function conversion() {
  let input = '';
  let currencyAmmount;
  while (input == '') {
    input = prompt(
      'Please write the currency you want to convert FROM (ex: 100NOK)'
    );
    currencyAmmount = Math.floor(input.replace(/\D/g, ''));
  }
  if (input.includes('nok')) {
    input = prompt(
      'Please write the currency you want to convert TO (ex: SEK)'
    );
    if (input.includes('sek')) {
      alert(
        currencyAmmount +
          ' NOK' +
          ' is equal to ' +
          nokToSek(currencyAmmount) +
          ' SEK'
      );
    } else if (input.includes('dkk')) {
      alert(
        currencyAmmount +
          ' NOK' +
          ' is equal to ' +
          nokToDkk(currencyAmmount) +
          ' SEK'
      );
    }
  }
}

conversion();
