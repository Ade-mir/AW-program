const http = require('http');

const server = http.createServer(function (req, res) {
  console.log(req.url);
  const operator = req.url.split('/')[1];
  const firstNum = Number(req.url.split('/')[2]);
  const secondNum = Number(req.url.split('/')[3]);
  let result;

  if (operator === 'sum') {
    result = firstNum + secondNum;
  } else if (operator === 'multiply') {
    result = firstNum * secondNum;
  } else {
    result = {
      error:
        "Invalid operator. Please use '/sum/:firstNum/:secondNum' in the URL",
    };
  }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result: result }));
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
