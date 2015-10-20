const jsonParse = require('middleware-json-parse')
const express = require('express')

const app = express()
app.use((req, res, next) => jsonParse(req, 'body')(req, res, next))
app.listen(3000)
