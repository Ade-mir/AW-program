function returnDuplicates(list) {
  // 112333
  let nonDuplicates = []; // 123
  let onlyDuplicates = []; // 133
  let duplicatesOnlyOnce = []; // 13

  // Checks if list item allready exist in new array and pushed in if not.
  // If allready exists it pushes into another array with only the duplicates.

  for (i = 0; i < list.length; i++) {
    if (!nonDuplicates.includes(list[i])) {
      nonDuplicates.push(list[i]);
    } else onlyDuplicates.push(list[i]);
  }

  // If duplicates apear more than twice this checks and reduces the duplicates to only one accurence in new array.

  for (j = 0; j < list.length; j++) {
    if (!duplicatesOnlyOnce.includes(onlyDuplicates[j])) {
      duplicatesOnlyOnce.push(onlyDuplicates[j]);
    }
  }

  // Removes the last array index which turns out undefined for unknown reason.
  duplicatesOnlyOnce.pop();
  return duplicatesOnlyOnce;
}
