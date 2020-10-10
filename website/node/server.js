let http = require('http');
let url = require('url');
let msg = require('./myModule');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(msg.getMessage(q.query['name']));
}).listen(port, hostname);
