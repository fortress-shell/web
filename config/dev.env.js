'use strict'
const merge = require('webpack-merge')
const path = require('path')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SESSION: '"http://api.fortress.sh/v1/sessions"',
  API_URL: '"http://api.fortress.sh/"',
  API_TIMEOUT: '"1000"',
  GITHUB_OAUTH: '"https://github.com/login/oauth/authorize?client_id=aa942c520baf3f84f67f&scope=admin:org_hook%20admin:repo_hook%20admin:public_key%20repo%20user"',
  SOCKET_URL: '"ws://websockets.fortress.sh"',
  SOCKET_PATH: '"/notifications"',
});
