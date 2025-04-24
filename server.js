const http = require ('node:http');
const information = require ('./data.js')

const server = http.createServer((req, res) =>{
    console.log('request received');
    res.end(`${information()}`);
})

server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port} `)
})

//console.log(information())