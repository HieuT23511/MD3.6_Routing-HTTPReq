const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('qs');
let handle = {};

const server = http.createServer((req, res) => {
    let urlPath = url.parse(req.url).pathname
    switch (urlPath){
        case '/users':


    }

})
server.listen(8080, 'localhost', () => {
    console.log(`Server is running on http://localhost:8080`)
})