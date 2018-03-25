'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SESSION: '"http://api.fortress.sh/v1/sessions/script"',
  API_URL: '"http://api.fortress.sh/"',
  API_TIMEOUT: '"1000"',
})
