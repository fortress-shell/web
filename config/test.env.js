'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SESSION: '"http://api.fortress.sh/v1/sessions"',
  API_URL: '"http://api.fortress.sh/"',
  API_TIMEOUT: '"10000"',
  GITHUB_OAUTH: '"https://github.com/login/oauth/authorize?client_id=aa942c520baf3f84f67f&scope=admin:org_hook%20admin:repo_hook%20admin:public_key%20repo%20user"',
  SOCKET_URL: '"ws://websockets.fortress.sh"',
  SOCKET_PATH: '"/notifications"',
});
