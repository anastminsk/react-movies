const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
	mode: 'production',

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
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
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
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeComments: true,
			},
		}),
	],
};
