/**
 * Input / Output Solutions
 */

/**
 * 1.1
 */
function playGuessTheNumber() {
  var numberToGuess = Math.floor(Math.random() * 10) + 1;
  var feedback = '';

  while (true) {
    var guess = prompt(feedback + 'Guess the number between 1 and 10');

    if (guess < numberToGuess) {
      feedback = 'Too low - ';
    } else if (guess > numberToGuess) {
      feedback = 'Too high - ';
    }

    if (guess == numberToGuess) {
      alert('You guessed the number!');
      break;
    }
  }
}

/**
 * 1.2
 */
function playGuessTheNumber() {
  var numberToGuess = Math.floor(Math.random() * 10) + 1;
  var feedback = '';
  var tries = 0;

  while (true) {
    var guess = prompt(feedback + 'Guess the number between 1 and 10');
    tries++;

    if (guess < numberToGuess) {
      feedback = 'Too low - ';
    } else if (guess > numberToGuess) {
      feedback = 'Too high - ';
    }

    if (guess == numberToGuess) {
      alert('You guessed the number in ' + tries + ' tries!');
      break;
    }
  }
}

/**
 * 1.3
 */
function playGuessTheNumber(n, m) {
  var numberToGuess = Math.floor(Math.random() * (m - n)) + n;
  var feedback = '';
  var tries = 0;

  while (true) {
    var guess = prompt(feedback + 'Guess the number between ' + n + ' and ' + m);
    tries++;

    if (guess < numberToGuess) {
      feedback = 'Too low - ';
    } else if (guess > numberToGuess) {
      feedback = 'Too high - ';
    }

    if (guess == numberToGuess) {
      alert('You guessed the number in ' + tries + ' tries!');
      break;
    }
  }
}

/**
 * 1.4
 */
function playGuessTheNumber(n, m) {
  var numberToGuess = Math.floor(Math.random() * (m - n)) + n;
  var feedback = '';
  var tries = 0;

  while (true) {
    var guess = prompt(feedback + 'Guess the number between ' + n + ' and ' + m);
    tries++;

    if (guess < numberToGuess) {
      feedback = 'Too low - ';
    } else if (guess > numberToGuess) {
      feedback = 'Too high - ';
    }

    if (guess == numberToGuess) {
      alert('You guessed the number in ' + tries + ' tries!');
      break;
    }
  }

  var playAgain = confirm('Do you want to play again?');

  if (playAgain) {
    playGuessTheNumber(n, m);
  }
}

/**
 * 2
 */
function convertTemperature() {
  while (true) {
    var input = prompt('Input the temperature you want to convert');

    if (input == null) {
      break;
    }

    var temperature = input.slice(0, input.length - 1);
    var scale = input.charAt(input.length - 1).toLowerCase();

    if (scale == 'f') {
      alert((temperature - 32) / 1.8);
    } else if (scale == 'c') {
      alert((temperature * 1.8) + 32);
    } else {
      alert('Unknown scale - try again');
    }
  }
}

/**
 * 3
 */
function convertMeasure() {
  var metersPerFoot = 0.3048

  while (true) {
    var input = prompt('Input the measure you want to convert');

    if (input == null) {
      break;
    }

    var measure = input.slice(0, input.length - 1);
    var unit = input.charAt(input.length - 1).toLowerCase();

    if (unit == 'm') {
      alert(measure / metersPerFoot);
    } else if (unit == 'ft') {
      alert(measure * metersPerFoot);
    } else {
      alert('Unknown measure - try again');
    }
  }
}

/**
 * 4
 */
function convertCurrencies() {
  var rateFromNokToSek = 1.1;
  var rateFromNokToDkk = 0.8;

  while (true) {
    var from = prompt('Input the amount and currency you want to convert from (ex. 100NOK) - You can choose between NOK, SEK and DKK');

    if (from == null) {
      break;
    }

    var toCurrency = prompt('Input the currency you want to convert to (NOK, SEK, DKK)');

    if (toCurrency == null) {
      break;
    }

    var fromAmount = from.slice(0, from.length - 3);
    var fromCurrency = from.slice(from.length - 3);

    var rate = 0;

    if (fromCurrency == 'NOK') {
      if (toCurrency == 'NOK') {
        rate = 1;
      } else if (toCurrency == 'SEK') {
        rate = rateFromNokToSek;
      } else if (toCurrency == 'DKK') {
        rate = rateFromNokToDkk
      }
    } else if (fromCurrency == 'SEK') {
      if (toCurrency == 'NOK') {
        rate = 1 / rateFromNokToSek;
      } else if (toCurrency == 'SEK') {
        rate = 1;
      } else if (toCurrency == 'DKK') {
        rate = rateFromNokToDkk / rateFromNokToSek
      }
    } else if (fromCurrency == 'DKK') {
      if (toCurrency == 'NOK') {
        rate = 1 / rateFromNokToDkk;
      } else if (toCurrency == 'SEK') {
        rate = rateFromNokToSek / rateFromNokToDkk
      } else if (toCurrency == 'DKK') {
        rate = 1;
      }
    }

    var toAmount = (fromAmount * rate);

    alert(toAmount + toCurrency);
  }
}
