const http = require("http");


const port = 5000;

const server = http.createServer((req, res) =>{

    res.writeHead(200, {"content-type" : "text/html"})
    res.write("Hello World!")
    res.end();
}).listen(port , () => {
    console.log("Server is listeing on port 5000....")
})