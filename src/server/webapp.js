'use strict'

const path = require('path')
const { urlencoded } = require('body-parser')
const express = require('express')
const smsRouter = require('./controllers/sms')

// Module exports a configured Express app
const app = express()

// Configure Express webapp with necessary middleware
app.use(express.static(path.join('..', '..', 'public')))
app.use(urlencoded({ extended: false }))

// Application routes
app.use('/sms', smsRouter)

// Export Express webapp
module.exports = app
