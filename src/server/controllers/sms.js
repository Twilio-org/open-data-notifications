'use strict'

const config = require('config')
const express = require('express')
const twilio = require('twilio')
const content = require('../../static/content')
const replies = require('../commands/util/replies')

// Create a router for the SMS webhooks
let router = new express.Router()

// Configure Twilio request signature validation for production
let validator = twilio.webhook(config.get('twilio.authToken'), {
  validate: config.get('env') === 'production',
  includeHelpers: false,

  // This needs to be the full webhook URL configured on Twilio
  url: `${config.get('appUrl')}/sms`
})

// Handle incoming Twilio SMS webhook requests
router.post('/', validator, (request, response) => {
  // Create TwiML generation helper
  let twiml = new twilio.twiml.MessagingResponse()

  let user = request.body.From
  let bodyParts = request.body.Body.split(' ')
  let command = bodyParts[0].toLowerCase()
  let args = bodyParts.splice(1)

  // Execute commands (all presumed async)
  handleCommand(user, command, args, (responseText) => {
    twiml.message(responseText)

    // Render XML response
    response.type('text/xml')
    response.send(twiml.toString())
  })
})

// Handle a user command & return a text response
function handleCommand (user, command, args, callback) {
  console.log(`Executing "${command}" for user ${user}`)
  let commandFunc = null

  try {
    commandFunc = require(`../commands/${command}`)
  } catch (e) {
    // Failed to load requested command - send back list
    return replies.delayReply(content.commandNotRecognized, callback)
  }

  // Otherwise, let's execute the provided command
  commandFunc(user, args, callback)
}

// Export SMS handler
module.exports = router
