/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const clientConfig = require('./cfg/webpack.client.config');
const serverConfig = require('./cfg/webpack.server.config');

module.exports = [clientConfig, serverConfig];
