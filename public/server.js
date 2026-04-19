const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.woff2': 'application/font-woff2',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((request, response) => {
  let filePath = '.' + request.url;
  // Strip query parameters
  filePath = filePath.split('?')[0];

  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // SPA Routing Fallback!
        // If the requested path is not found, serve index.html
        fs.readFile('./index.html', (err, indexContent) => {
          if (err) {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: ' + err.code + ' ..\n');
          } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(indexContent, 'utf-8');
          }
        });
      } else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
      }
    } else {
      const contentType = mimeTypes[extname] || 'application/octet-stream';
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
