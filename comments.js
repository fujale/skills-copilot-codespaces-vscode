// Create web server
// Create a web server that listens on port 3000 and serves a static HTML file. Use the code from the lessons as a template.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'index.html');
  let fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});