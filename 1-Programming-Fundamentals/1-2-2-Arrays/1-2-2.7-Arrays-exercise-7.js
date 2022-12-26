let arr1 = [1, 1, 2, 3];
let arr2 = [3, 1, 3, 3, 2, 1, 4, 5];

// function mergeList(list1, list2) {
//   let arr = list1;
//   for (let i = 0; i < list1.length; i++) {
//     list2 += list2.includes(list1[i]);
//   }
//   if ((list2 = true)) console.log(list2);
//   console.log(arr);
//   console.log(list2);
// }

function mergeList(list1, list2) {
  let arr = list1;
  for (let i = 0; i < list2.length; i++) {
    if (list1.every((item) => item !== list2[i])) {
      arr = arr.concat(list2[i]);
    }
  }
  console.log(arr);
}

mergeList(arr1, arr2);
