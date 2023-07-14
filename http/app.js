const http = require('http')
const port = 8000

const handler = (request, response) => {
    console.log('new user!')
    response.end('Hello Node')
}

const server = http.createServer(handler)

server.listen(port, (err) => {
    if (err) {'something f*cked up'}
    console.log('server is running...')
})