'use strict'
const merge = require('webpack-merge')
const path = require('path')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SESSION: '"http://api.fortress.sh/v1/sessions/script"',
  API_URL: '"http://api.fortress.sh/"',
  API_TIMEOUT: '"1000"',
})
