'use strict'

const replies = require('./util/replies')

// Handle LIST command
module.exports = (user, args, callback) => {
  replies.delayReply('LIST', callback)
}
