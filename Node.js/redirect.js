const http = require('http');
const fs = require('fs');
let path;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
        case '/home':
            res.statusCode = 200;
            path = "../Another form/form-grid.html";
            break;
        case '/about':
            res.statusCode = 200;
            path = "../chess(using-grid)/chess(using js).html";
            break;
        case '/hell':
            res.statusCode = 200;
            path = "../food ordering website/Order Page.html";
            break;
            case '/aboutme':
                res.statusCode=301;
                res.setHeader('Location', '/home');
                res.end();
        default:
            res.statusCode = 200;
            path = "first.html";
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.write("Error loading this page");
            console.log("Error loading this page:", err.message);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log("Server is listening on port 3000");
});
