/* global test, expect */
'use strict'

const initial = require('../src')

test('placeholder test', () => {
  expect(initial()).toBe(42)
})
