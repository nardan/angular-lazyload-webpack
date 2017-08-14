var path = require('path');

var config = {
	entry: {
		app: ['./src/core/bootstrap.js']
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		modules:[
			path.join(__dirname, 'src'),
			'node_modules'
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.html$/,
				use: 'raw-loader'
			}
		]
	}
};

module.exports = config;
