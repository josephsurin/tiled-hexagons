const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const prod = {
	devtool: 'none',

	watch: false,

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new UglifyJSPlugin()
	]
}

module.exports = merge([common, prod])