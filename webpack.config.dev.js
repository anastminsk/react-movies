const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
});
