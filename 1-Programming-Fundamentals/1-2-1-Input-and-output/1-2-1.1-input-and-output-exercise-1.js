// IMPLEMENTED - For every guess, give the user feedback (too high, too low)
// IMPLEMENTED - Make it possible to choose the range for the guess when you start the game.

// IMPLEMENTED - When the user guesses correct, tell the user how many guesses it took to get the correct answer.

// IMPLEMENTED - When the user guesses correct, ask the user if they want to play again and restart if necessary.

guessTheRightNumberGame(1, 10);

function guessTheRightNumberGame(n, m) {
  var numberToGuess = Math.floor(Math.random() * m + n);
  var lastGuessed = -1;
  var numberOfGuesses = 0;

  while (numberToGuess !== lastGuessed) {
    lastGuessed = prompt('Guess the right number from ' + n + ' to ' + m);
    numberOfGuesses += 1;
    if (lastGuessed == numberToGuess) {
      console.log(
        'You guesses the right number.' +
          ' It took you ' +
          numberOfGuesses +
          ' tries to get the right answer.'
      );
      break;
    } else if (lastGuessed === null) {
      console.log('Cancelled');
      break;
    }
    console.log(
      lastGuessed > numberToGuess
        ? 'Your guess is too high'
        : 'Your guess is too low'
    );
  }
  if (numberToGuess == lastGuessed) {
    confirm('Do you want to play again?');
    guessTheRightNumberGame(n, m);
  }
}
