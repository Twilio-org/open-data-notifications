'use strict'

// Return a message after a delay, to consistently make the commands return
// async (not releasing Zalgo)
exports.delayReply = (content, callback) => {
  process.nextTick(() => {
    callback(content)
  })
}
