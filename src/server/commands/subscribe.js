'use strict'

const replies = require('./util/replies')

// Handle SUBSCRIBE command
module.exports = (user, args, callback) => {
  replies.delayReply('SUBSCRIBE', callback)
}
