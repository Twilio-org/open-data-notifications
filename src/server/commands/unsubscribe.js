'use strict'

const replies = require('./util/replies')

// Handle UNSUBSCRIBE command
module.exports = (user, args, callback) => {
  replies.delayReply('UNSUBSCRIBE', callback)
}
