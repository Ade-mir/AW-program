let arr1 = [1, 2, 2, 3];
let arr2 = [1, 2, 3];

/*
function isEqual(list1, list2) {
  let isFalse = 0; // Starting variable
  if (list1.length !== list2.length) return false; //Stop statement checking if list1 has the same length as list 2. if not => false.

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      isFalse++;
    }
  } // Iterating through the length of list1 checking to see if the index of each list is NOT equal to each other. If true => isFalse variable is incremented.

  if (isFalse !== 0) return false;
  return true; // As long as isFalse is NOT 0 it will return false.
}

console.log(isEqual(arr1, arr2));
*/

function isSublistOf(list1, list2) {
  let sameLengthList = []; // We are filling this list by pushing into it all the numbers from list 2 that exist in list 1 IN THE SAME ORDER.

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[i]) {
        sameLengthList = sameLengthList.concat(list2[j]);
      }
    }
  } // Iterating through the length of list1 checking to see if the index of each list is NOT equal to each other. If true => isFalse variable is incremented.
  console.log(sameLengthList);
  // if (sameLengthList.length === list2.length) return true;
}

console.log(isSublistOf(arr1, arr2));
