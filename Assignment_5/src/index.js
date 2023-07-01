var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if (req.url === '/welcome') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('Welcome to Dominos!')
    } else if (req.url === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'Application/json'
        })
        res.end(JSON.stringify({ phone: '18602100000', email: 'guestcaredominos@jublfood.com' }))
    } else {
        res.statusCode = 404;
        res.end()
    }
}

httpServer.listen(8081, () => console.log('server running on port 8081...'));

module.exports = httpServer;