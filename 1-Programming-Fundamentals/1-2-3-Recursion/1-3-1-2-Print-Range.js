function printRange(n, m) {
  if (n > m) {
    return;
  } else {
    console.log(n);
    printRange(n + 1, m);
  }
}
