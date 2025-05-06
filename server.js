const http = require('node:http');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello, Server');
});

httpServer.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});
