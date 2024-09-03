const http = require('http');   // import http from 'http';

const server = http.createServer((request,response) => {
    console.log(request.url);
     response.writeHead(200, {'Content-Tpe': 'text/html'});
     response.end('<h1>Hello Node!</h1>')
});

server.listen(5500, '127.0.0.1', () => console.log("Server started"));
