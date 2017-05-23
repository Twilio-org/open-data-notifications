'use strict'

const request = require('request')
const config = require('config')

const API_BASE = 'https://openstates.org/api/v1'
const API_KEY = config.get('openstates.apiKey')

const openstates = {

  /**
   * Expose a reference to the API base URL.
   */
  API_BASE,

  /**
   * Returns the JSON from an Open States API request method.
   */
  get (method) {
    let requestOptions = {
      url: `${API_BASE}/${method}`,
      headers: { 'x-api-key': API_KEY }
    }

    return new Promise((resolve, reject) => {
      request(requestOptions, (err, response, body) => {
        if (err) return reject(err)

        return resolve({
          status: response.status,
          body: JSON.parse(body)
        })
      })
    })
  }

}

module.exports = openstates
