'use strict'

const config = require('config')
const express = require('express')
const twilio = require('twilio')

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

  // TODO - create conversation interface with subscriber
  twiml.message('todo')

  // Render XML response
  response.type('text/xml')
  response.send(twiml.toString())
})

// Export SMS handler
module.exports = router
