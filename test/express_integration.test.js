/* global describe, it, expect */
'use strict'

const bodyParser = require('body-parser')
const request = require('supertest')

const app = require('../src/server/webapp')
const content = require('../src/static/content')

app.use(bodyParser.urlencoded({extended: false}))

describe('SMS routes', () => {
  it('should return instructions as response for /sms', () => {
    return request(app)
      .post('/sms')
      .type('form')
      .send({'From': '+14151234567', 'Body': 'foobar'})
      .expect(200)
      .then((res) => {
        let xmlContent = res.header['content-type'].indexOf('text/xml')
        let body = content.help
        let twiml = '<?xml version="1.0" encoding="UTF-8"?>' +
          '<Response><Message>' + body + '</Message></Response>'
        expect(xmlContent).toBeGreaterThan(-1)
        expect(res.text).toBe(twiml)
      })
  })
})
