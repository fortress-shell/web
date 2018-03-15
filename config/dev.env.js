'use strict'
const merge = require('webpack-merge')
const path = require('path')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SCRIPT: '"http://localhost:3000/posts/script"',
})
