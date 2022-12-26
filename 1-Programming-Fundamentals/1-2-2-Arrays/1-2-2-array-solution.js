/**
 * 1
 */
function printItems(list) {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

/**
 * 2
 */
function sumItems(list) {
  var result = 0;

  for (var i = 0; i < list.length; i++) {
    result += list[i];
  }

  return result;
}

/**
 * 3
 */
function generateList(value, len) {
  var result = [];

  for (var i = 0; i < len; i++) {
    result.push(value);
  }

  return result;
}

/**
 * 4
 */
function generateRange(n, m) {
  var result = [];

  for (var i = n; i <= m; i++) {
    result.push(i);
  }

  return result;
}

/**
 * 5
 */
function repeatList(list, n) {
  var result = [];

  for (var i = 0; i < n; i++) {
    result = result.concat(list);
  }

  return result;
}

/**
 * 6
 */
function repeatItems(list, n) {
  var result = [];

  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < n; j++) {
      result.push(list[i]);
    }
  }

  return result;
}

/**
 * 7
 */
function mergeLists(list1, list2) {
  var result = list1;

  for (var i = 0; i < list2.length; i++) {
    var existsAlready = false;

    for (var j = 0; j < list1.length; j++) {
      if (list1[j] == list2[i]) {
        existsAlready = true;
        break;
      }
    }

    if (!existsAlready) {
      result.push(list2[i]);
    }
  }

  return result;
}

/**
 * 8
 */
function isEqual(list1, list2) {
  if (list1.length != list2.length) {
    return false;
  }

  for (var i = 0; i < list1.length; i++) {
    if (list1[i] != list2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * 9
 */
function isSublistOf(list1, list2) {
  for (var i = 0; i < list1.length; i++) {
    var possibleSublist = list1.slice(i, i + list2.length);
    
    if (list2.length > possibleSublist.length) {
      return false;
    }

    if (isEqual(list2, possibleSublist)) {
      return true;
    }
  }

  return false;
}

/**
 * 10
 */
 function flipCase(str) {
  var inputChars = str.split('');
  var outputChars = [];

  for (var i = 0; i < inputChars.length; i++) {
    if (inputChars[i] == inputChars[i].toLowerCase()) {
      outputChars.push(inputChars[i].toUpperCase());
    } else {
      outputChars.push(inputChars[i].toLowerCase());
    }
  }

  return outputChars.join('');
}

/**
 * 11
 */
function removeDuplicates(list) {
  var uniques = [];

  for (var i = 0; i < list.length; i++) {
    var alreadyExists = uniques.indexOf(list[i]) != -1;

    if (!alreadyExists) {
      uniques.push(list[i]);
    }
  }

  return uniques;
}

/**
 * 12
 */
function getDuplicates(list) {
  var uniques = [];
  var duplicates = [];

  for (var i = 0; i < list.length; i++) {
    var alreadyExists = uniques.indexOf(list[i]) != -1;
    var alreadyDuplicate = duplicates.indexOf(list[i]) != -1;

    if (!alreadyExists) {
      uniques.push(list[i]);
    } else if (!alreadyDuplicate) {
      duplicates.push(list[i]);
    }

    console.log({ uniques, duplicates })
  }

  return duplicates;
}

/**
 * 13
 *
 * Hint: Google "Bubblesort algorithm" or "insertion sort"
 */
function sortList(list) {
  while (true) {
    var swapHappened = false;

    for (var i = 1; i < list.length; i++) {
      if (list[i] < list[i - 1]) {
        var temp = list[i];
        list[i] = list[i - 1];
        list[i - 1] = temp;
        swapHappened = true;
      }
    }

    if (!swapHappened) {
      return list;
    }
  }
}