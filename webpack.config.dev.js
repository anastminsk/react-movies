const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},

	watch: true,
	mode: 'development',
	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.(png|jpe?g|wav|mp3|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
