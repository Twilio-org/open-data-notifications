/* global describe, it, expect */

'use strict'

const eventRetriever = require('../src/jobs/eventretriever')

describe('Testing Event Retriever', () => {
  it('event retriever returns sample text', () => {
    expect(eventRetriever()).toBe('Events are retrieved')
  })
})
