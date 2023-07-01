const http = require('http');
const fs = require('fs');
const PORT = 5000;

fs.writeFile(
    "index.html",
    `<h1>Hello World</h1><p>This is M Abhay Kamath...</p>`,
    (err) => {
        if (err) console.log(err);
    })

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            else {
                const htmlFile = data.toString();
                res.end(htmlFile, 'text/html')
            }
        });
    }
})

app.listen(PORT, () => console.log('Server running on port', PORT));