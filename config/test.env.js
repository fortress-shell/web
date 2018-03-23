'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SESSION: '"http://localhost:3000/sessions/script"',
  API_URL: '"http://localhost:3000/"',
  API_TIMEOUT: '"1000"',
})
