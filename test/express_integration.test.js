/* global describe, it, expect */
'use strict'

const request = require('supertest-as-promised')
const app = require('../src/server/webapp')

describe('SMS routes', () => {
  it('should return TODO response for /sms', () => {
    return request(app)
      .post('/sms')
      .expect(200)
      .then((res) => {
        let xmlContent = res.header['content-type'].indexOf('text/xml')
        let twiml = '<?xml version="1.0" encoding="UTF-8"?>' +
          '<Response><Message>todo</Message></Response>'
        expect(xmlContent).toBeGreaterThan(-1)
        expect(res.text).toBe(twiml)
      })
  })
})
