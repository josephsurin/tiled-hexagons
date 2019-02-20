const path = require('path')

module.exports = {
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		publicPath: './',
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env', '@babel/react']
			}
		}
		]
	}
}