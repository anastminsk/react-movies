const prod = require('./webpack.config.prod');
const dev = require('./webpack.config.dev');

module.exports = process.env.NODE_ENV === 'production' ? prod : dev;
