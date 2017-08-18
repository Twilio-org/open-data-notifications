'use strict'

const content = require('../../static/content')
const replies = require('./util/replies')

// Handle help command
module.exports = (user, args, callback) => {
  replies.delayReply(content.help, callback)
}
