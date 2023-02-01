const http = require("http");


const port = 5000;

const server = http.createServer((req, res) =>{
    res.end("Qunnderrie Snelling is the goat!");
})


server.listen(port);