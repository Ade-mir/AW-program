function removeDuplicates(list) {
  let result = [];
  for (i = 0; i < list.length; i++) {
    if (!result.includes(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
}
