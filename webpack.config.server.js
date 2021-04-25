const path = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
	name: 'server',
	target: 'node',
	entry: './src/serverRenderer.jsx',
	externals: [nodeExternals()],
	output: {
		filename: 'js/serverRenderer.js',
		libraryTarget: 'commonjs2',
	},
});
