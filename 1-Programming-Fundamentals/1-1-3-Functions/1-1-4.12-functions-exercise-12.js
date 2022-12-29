function wordCount(str) {
  let count = 1;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      count++;
    }
  }
  return count;
}

wordCount('racecar hi you');
