function flipCase(str) {
  let flipped = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      flipped += str.charAt(i).toLowerCase();
    } else flipped += str.charAt(i).toUpperCase();
  }
  return flipped;
}

flipCase('hELLO');

function flipCase(str) {
  let flipped = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      flipped += str[i].toLowerCase();
    } else flipped += str[i].toUpperCase();
  }
  return flipped;
}

flipCase('hELLO');
