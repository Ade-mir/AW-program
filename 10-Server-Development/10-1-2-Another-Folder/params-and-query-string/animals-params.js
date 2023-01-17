const http = require('http');

const server = http.createServer(function (req, res) {
  console.log(req.url);
  const firstAnimal = req.url.split('/')[1];
  const secondAnimal = req.url.split('/')[2];

  const result = firstAnimal === secondAnimal ?
  `A ${firstAnimal} is a ${secondAnimal}` :
  `A ${firstAnimal} is not a ${secondAnimal}`;

  res.setHeader('Content-Type', 'text/plain');
  res.end(result);
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});