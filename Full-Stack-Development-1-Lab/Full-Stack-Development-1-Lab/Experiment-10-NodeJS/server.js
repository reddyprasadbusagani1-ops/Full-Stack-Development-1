// Aim: Create a basic HTTP server using Node.js built-in modules.
const http = require("node:http");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end("<!doctype html><html><body><h1>Hello from Node.js</h1><p>Server is running on port 3000.</p></body></html>");
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
