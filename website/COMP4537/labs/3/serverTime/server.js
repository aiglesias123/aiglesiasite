let http = require('http');
let msg = require('./myModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Now: " + msg.getMessage("John"));
    res.end();
}).listen(8888);