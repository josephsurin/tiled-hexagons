const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const prod = {
	devtool: 'none',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	optimization: {
		minimizer: [new UglifyJSPlugin({
			uglifyOptions: {
				warnings: false,
				mangle: true
			},
			extractComments: 'all'
		})]
	},
}

module.exports = merge([common, prod])