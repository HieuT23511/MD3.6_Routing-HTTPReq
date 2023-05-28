let http = require ('http');
let url = require('url');
let stringDecoder = require('string_decoder').StringDecoder;
let port = 8000;
let server = http.createServer((req, res)=>{
    //get url and parse
    let parseUrl = url.parse(req.url, true);
    let queryStringObject = parseUrl.query;
    res.end('Hello Node Js');
    console.log(queryStringObject);
})
server.listen(port,'localhost',()=>{
    console.log(`Server is running at port http://localhost:${port}`);
})
