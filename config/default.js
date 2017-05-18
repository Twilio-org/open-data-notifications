'use strict'

// Exported configuration object
let cfg = {}

// Current Node.js environment (for convenience, also available on config API)
cfg.env = process.env.NODE_ENV || 'development'

// Production URL for the application, used in Twilio webhook validation
// e.g. "https://iron-foobar-123.herokuapp.com"
cfg.appUrl = process.env.PRODUCTION_URL || 'http://localhost:3000'

// MongoDB connection string
cfg.mongoUrl = process.env.MONGO_URL || 'mongodb://localhost'

// HTTP port for Express webapp
cfg.port = process.env.PORT || 3000

// Twilio API configuration
cfg.twilio = {
  accountSid: process.env.TWILIO_ACCOUNT_SID || '',
  authToken: process.env.TWILIO_AUTH_TOKEN || ''
}

module.exports = cfg
