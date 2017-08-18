'use strict'

const http = require('http')
const config = require('config')
const webapp = require('../src/server/webapp')

const server = http.createServer(webapp)

server.listen(config.get('port'), () => {
  console.log(`Express server started on *:${config.get('port')}`)
})
