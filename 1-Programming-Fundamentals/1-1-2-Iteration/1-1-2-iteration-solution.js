/**
 * Iteration Exercises Solutions
 */

/**
 * 1 (while-version)
 */
var n = 0;

while (n <= 50) {
  console.log(n);
  n++;
}

/**
 * 1 (for-version)
 */
for (var n = 0; n <= 50; n++) {
  console.log(n);
}

/**
 * 2 (while-version)
 */
var n = 0;

while (n <= 50) {
  console.log(n);
  n = n + 2;
}

/**
 * 2 (for-version)
 */
for (var n = 0; n <= 50; n = n + 2) {
  console.log(n);
}

/**
 * 3 (while-version)
 */
var n = 20;

while (n >= -30) {
  console.log(n);
  n = n - 2;
}

/**
 * 3 (for-version)
 */
for (var n = 20; n >= -30; n = n - 2) {
  console.log(n);
}

/**
 * 4 (while-version)
 */
var n = 0;

while (n <= 100) {
  if (n % 7 === 0) {
    console.log(n);
  }
  n++;
}

/**
 * 4 (for-version)
 */
for (var n = 0; n <= 100; n++) {
  if (n % 7 === 0) {
    console.log(n);
  }
}

/**
 * 5 (while-version)
 */
var n = 0;

while (n <= 20) {
  if (n === 13 || n === 17) {
    n++;
    continue;
  }

  console.log(n);
  n++;
}

/**
 * 5 (for-version)
 */
for (var n = 0; n <= 20; n++) {
  if (n === 13 || n === 17) {
    continue;
  }

  console.log(n);
}

/**
 * 6 (while-version)
 */
var n = 0;

while (n <= 20) {
  if (n % 2 !== 0) {
    n++;
    continue;
  }

  console.log(n);
  n++;
}

/**
 * 6 (for-version)
 */
for (var n = 0; n <= 20; n++) {
  if (n % 2 !== 0) {
    continue;
  }

  console.log(n);
}

/**
 * 7 (while-version)
 */
 var n = 0;

 while (n <= 20) {
   if (n % 2 === 0) {
     n++;
     continue;
   }
 
   console.log(n);
   n++;
 }
 
/**
 * 7 (for-version)
 */
for (var n = 0; n <= 20; n++) {
  if (n % 2 === 0) {
    continue;
  }
 
  console.log(n);
}

/**
 * 8 (while-version)
 */
var n = 0;

while (n < 5) {
  var m = 0;
  var output = '';

  while (m < 5) {
    output = output + '*';
    m++;
  }

  console.log(output);
  n++;
}

/**
 * 8 (for-version)
 */
for (var n = 0; n < 5; n++) {
  var output = '';

  for (var m = 0; m < 5; m++) {
    output = output + '*';
  }

  console.log(output);
}

/**
 * 9 (while-version)
 */
var n = 0;

while (n < 4) {
  var m = 0;
  var line = '';
  
  while (m < n) {
    line = line + '*';
    m++;
  }

  console.log(line);
  n++;
}

while (n > 0) {
  var m = 0;
  var line = '';
  
  while (m < n) {
    line = line + '*';
    m++;
  }

  console.log(line);
  n--;
}

/**
 * 9 (for-version)
 */
for (var n = 0; n < 4; n++) {
  var line = '';
  
  for (var m = 0; m < n; m++) {
    line = line + '*';
  }
  
  console.log(line);
}

for (var n = 4; n > 0; n--) {
  var line = '';
  
  for (var m = 0; m < n; m++) {
    line = line + '*';
  }
  
  console.log(line);
}

/**
 * 10 (while-version)
 */
var n = 1;

while (n <= 6) {
  var m = 1;
  var output = '';

  while (m <= 6) {
    output = output + (n * m) + ' ';
    m++;
  }

  console.log(output);
  n++;
}

/**
 * 10 (for-version)
 */
for (var n = 1; n <= 6; n++) {
  var output = '';

  for (var m = 1; m <= 6; m++) {
    output = output + (n * m) + ' ';
  }

  console.log(output);
}