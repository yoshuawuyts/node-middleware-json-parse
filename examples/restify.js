const jsonParse = require('middleware-json-parse')
const restify = require('restify')

const server = restify.createServer()
server.use((req, res, next) => jsonParse(req, 'body')(req, res, next))
server.listen()
