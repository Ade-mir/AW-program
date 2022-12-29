function repeat(str, n) {
  let repeated = str;

  if (n !== 0) {
    for (i = 1; i < n; i++) {
      repeated += ' ' + str;
    }

    return repeated;
  }
}

repeat('sup', 1);
