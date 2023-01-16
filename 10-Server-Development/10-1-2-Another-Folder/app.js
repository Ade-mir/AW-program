const http = require('http');

// const server = http.createServer(function (req, res) {
//   // console.log(req.headers);
//   console.log(req.url);
//   console.log(req.method);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`
//   <html>
//     <head>
//       <title>This is my first server</title>
//     </head>
//     <body>
//       <h1>My first server</h1>
//     </body>
//   </html>
//   `);
// });

const server = http.createServer(function (req, res) {
  // console.log(req.headers);
  console.log(req.url);
  console.log(req.method);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  // let result = {
  //   a: 5,
  //   b: 10,
  // };
  // res.end(JSON.stringify(result));
  res.end(`
    {
      "a": 5,
      "b": 10
    }
  `);
});

// const host = 'localhost';

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
