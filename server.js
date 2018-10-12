const http = require('http');

const server = http.createServer((request,response)=>{
    response.end('Hello World');
});

server.listen(8080,()=>{
    console.log('sever listening..');
});