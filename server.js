const http = require ('node:http');

const server = http.createServer((req, res) =>{
    console.log('request received')
    res.end('<h1>Hola mundo</h1>')
})

server.listen(0, () =>{
    console.log(`Server listening on port http://localHost:${server.address().port} `)
})