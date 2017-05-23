/* global describe, it, expect */
'use strict'

const openstates = require('../src/openstates')
const nock = require('nock')

// Set up our mocked API responses
nock(openstates.API_BASE)
  .get('/metadata/KS').reply(200, { name: 'Kansas' })

describe('get', () => {
  it('Returns a JSON response from the Open States API', done => {
    openstates.get('/metadata/KS', result => {
      expect(result.status).toBe(200)
      expect(result.body.name).toBe('Kansas')

      done()
    }).catch(done)
  })
})
