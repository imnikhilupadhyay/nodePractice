const http = require('http');
const print = require('../node-practice/frame-print');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 
        'Content-Type': 'text/plain' 
    });
    response.write('Hello World');
    response.end();
});

server.listen(8080, () => {
    print('Server listening..');
});

process.on('exit',()=>{
    console.log('Server stopped !!');
});