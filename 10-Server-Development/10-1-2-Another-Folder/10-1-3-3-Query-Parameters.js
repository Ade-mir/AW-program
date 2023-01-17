const http = require('http');
const querystring = require('node:querystring');

const server = http.createServer(function (req, res) {
  const type = req.url.split('/')[1].split('?')[0];
  const query = req.url.split('?')[1];
  const decodedQuery = querystring.decode(query);
  let operation = decodedQuery.operation;
  result = 0;

  // console.log(req.url);
  // console.log(decodedQuery);
  // console.log(operation);
  // console.log(typeof type);

  if (type == 'numbers') {
    if (operation === 'sum') {
      result = parseInt(decodedQuery.a) + parseInt(decodedQuery.b);
    } else if (operation === 'multiply') {
      result = parseInt(decodedQuery.a) * parseInt(decodedQuery.b);
    } else {
      result =
        "Invalid operator. Please use '/numbers?operation=sum&a=5&b=10 in the URL";
    }
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
