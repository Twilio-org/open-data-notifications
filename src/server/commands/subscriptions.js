'use strict'

const replies = require('./util/replies')

// Handle SUBSCRIPTIONS command
module.exports = (user, args, callback) => {
  replies.delayReply('SUBSCRIPTIONS', callback)
}
