const fs = require('fs');

// try {
// Read files
fs.readFile(
  './7-Advanced-Functional-Asynchronous-JS/7-1-1-JavaScript-Callbacks/example/1.txt',
  function (err, file1) {
    console.log(file1.toString());
  }
);
fs.readFile(
  './7-Advanced-Functional-Asynchronous-JS/7-1-1-JavaScript-Callbacks/example/2.txt',
  function (err, file2) {
    console.log(file2.toString());
  }
);
fs.readFile(
  './7-Advanced-Functional-Asynchronous-JS/7-1-1-JavaScript-Callbacks/example/3.txt',
  function (err, file3) {
    console.log(file3.toString());
  }
);

//   // Combine content
//   const combinedContent = [
//     file1.toString(),
//     file2.toString(),
//     file3.toString(),
//   ];

//   // Transform content
//   const transformedContent = combinedContent.join(' ').toUpperCase();

//   // Write content to new file
//   fs.writeFileSync(
//     './7-Advanced-Functional-Asynchronous-JS/7-1-1-JavaScript-Callbacks/example/result.txt',
//     transformedContent
//   );
// } catch (error) {
//   console.log(error);
// }
