function capitalized(str) {
  let lowCase = str.toLowerCase();
  let result = lowCase.charAt(0).toUpperCase();

  for (i = 1; i < lowCase.length; i++) {
    result += lowCase.charAt(i);
  }
  console.log(result);
}
