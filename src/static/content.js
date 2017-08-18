'use strict'

let content = {}

content.help = [
  'HELP - return these commands',
  'LIST - return list of all topics',
  'SUBSCRIBE [topic] - subscribe to updates for a particular topic',
  'SUBSCRIPTIONS - lists current subscriptions',
  'UNSUBSCRIBE [topic] - unsubscribe from a particular topic'
].join('\n')

content.commandNotRecognized = [
  'Thanks for texting! Use one of the following commands:',
  content.help
].join('\n')

module.exports = content
