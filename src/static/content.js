'use strict'

let content = {}

content.help = [
  'LIST - return list of all topics',
  'SUBSCRIBE topic - subscribe to updates for a particular topic',
  'SUBSCRIPTIONS - lists current subscriptions',
  'UNSUBSCRIBE topic - unsubscribe from a particular topic',
  'anything else - this list of instructions'
].join('\n')

module.exports = content
