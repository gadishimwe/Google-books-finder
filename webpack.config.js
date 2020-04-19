const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				API_URL: JSON.stringify(process.env.API_URL)
			}
		})
	]
};
