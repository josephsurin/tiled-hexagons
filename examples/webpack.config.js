const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	entry: './examples/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: './',
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env', '@babel/react']
			}
		},
		{
			test: /\.(png|jpe?g|gif|svg|eot|svg|otf|ttf|woff|woff2)$/,
			loader: 'file-loader',
			options: {
				name: 'assets/[name].[ext]'
			}
		},
		{
			test: /\.html$/,
			use: ['html-loader']
		}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'examples/index.html'
		})
	]
}
