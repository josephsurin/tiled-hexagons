const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
})

module.exports = {
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	entry: './src/index.js',
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
			test: /\.(sa|c)ss$/,
			use: extractPlugin.extract({
				use: ['css-loader', 'sass-loader']
			})
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
		},
		{
			test: /\.md$/,
			use: ['json-loader', 'yaml-frontmatter-loader']
		}
		]
	},
	plugins: [
		extractPlugin,
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}