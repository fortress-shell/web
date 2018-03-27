'use strict'
const path = require('path');

module.exports = {
  NODE_ENV: '"production"',
  SESSION: '"http://fortress.sh/api/v1/sessions"',
  API_URL: '"http://fortress.sh/api"',
  API_TIMEOUT: '"1000"',
  GITHUB_OAUTH: '"https://github.com/login/oauth/authorize?client_id=aa942c520baf3f84f67f&scope=admin:org_hook%20admin:repo_hook%20admin:public_key%20repo%20user"',
  SOCKET_URL: '"wss://fortress.sh"',
  SOCKET_PATH: '"/notifications"',
}
