function repeat(str, n) {
  if (n == 0) {
    return '';
  } else if (n == 1) {
    return str + repeat(str, n - 1);
  } else {
    return str + (' ' + repeat(str, n - 1));
  }
}
