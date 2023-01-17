// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk;
//     });
//     req.on('end', () => {
//       const pathname = url.parse(req.url).pathname;
//       const pathArr = pathname.split('/');
//       if (pathArr[1] === 'sum') {
//         const parsedBody = querystring.parse(body);
//         const a = parsedBody.a || Number(pathArr[2]);
//         const b = parsedBody.b || Number(pathArr[3]);
//         const result = a + b;
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ result }));
//       } else if (pathArr[1] === 'multiply') {
//         const parsedBody = querystring.parse(body);
//         const a = parsedBody.a || Number(pathArr[2]);
//         const b = parsedBody.b || Number(pathArr[3]);
//         const result = a * b;
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ result }));
//       } else {
//         res.writeHead(404);
//         res.end();
//       }
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// POST (CREATE)
// GET (READ)
// PUT/PATCH (UPDATE)
// DELETE (DELETE)

const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.url === '/numbers' && req.method === 'POST') {
    let body = [];
    req.on('data', function (chunk) {
      body.push(chunk);
    });
    req.on('end', function () {
      body = Buffer.concat(body).toString();
      let {a, b, operation} = JSON.parse(body);
      const selectedOperation = availableOperations[operation] || availableOperations[a, b]
      const result = selectedOperation[a,b];
      res.setHeader('Content-Type', 'application/json');
      const resultAsJSON = JSON.stringify{
        result: result
      }
      res.end(resultAsJSON);
    });
  }
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
