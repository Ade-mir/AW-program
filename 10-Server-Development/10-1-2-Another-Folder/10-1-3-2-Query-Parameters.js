const http = require('http');
const querystring = require('node:querystring');

const server = http.createServer(function (req, res) {
  const operator = req.url.split('/')[1];
  const query = req.url.split('?')[1];
  const decodedQuery = querystring.decode(query);

  if (operator === 'sum') {
    result = parseInt(decodedQuery.a) + parseInt(decodedQuery.b);
  } else if (operator === 'multiply') {
    result = parseInt(decodedQuery.a) * parseInt(decodedQuery.b);
  } else {
    result =
      "Invalid operator. Please use '/sum?a=5&b=10' or /multiply?a=5&b=10 in the URL";
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(`
    {
      "result": "${result}"
    }
    `);
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});

// const http = require('http');
// const querystring = require('node:querystring');

// const server = http.createServer(function (req, res) {
// const operator = req.url.split('/')[1];
// console.log(operator);
//   const query = req.url.split('?')[1];
//   const decodedQuery = querystring.decode(query);

//   // console.log(req.url);
//   // console.log(decodedQuery);
//   // console.log(parseInt(decodedQuery.a) * parseInt(decodedQuery.b));

//   res.setHeader('Content-Type', 'text/plain');
//   res.end(`
//       "result": "${parseInt(decodedQuery.a) * parseInt(decodedQuery.b)}"
//     `);
// });

// server.listen(3000, function () {
//   console.log('Server listening on port 3000');
// });

// // res.end('{"result":parseInt(decodedQuery.a) * parseInt(decodedQuery.b)}');
