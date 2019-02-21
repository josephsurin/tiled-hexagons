const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	watch: true,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: './',
	},
	module: {
		rules: [{
			include: [path.resolve(__dirname, 'src')],
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	externals: {
		react: {
			commonjs: 'react',          
			commonjs2: 'react',          
			amd: 'React',          
			root: 'React'      
		},  
		'react-dom': {
			commonjs: 'react-dom',          
			commonjs2: 'react-dom',          
			amd: 'ReactDOM',          
			root: 'ReactDOM'      
		}  
	} 
}
