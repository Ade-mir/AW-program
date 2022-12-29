function reverseWords(str) {
  let words = str.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = '';

    for (let j = 0; j < word.length; j++) {
      reversedWord += word.charAt(word.length - 1 - j);
    }

    result += reversedWord + ' ';
  }

  return result;
}
