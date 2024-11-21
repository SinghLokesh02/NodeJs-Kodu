// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello</h1>');
});

// starts a simple http server locally on port 3000
const port = 5000;
server.listen(port, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:' + port);
});

// run with `node server.mjs`
