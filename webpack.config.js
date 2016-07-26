var webpack = require('webpack');

config = {
	entry: {
		app: ['./motorway/templates/app.jsx']
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	plugins: [
		// new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
		// new webpack.BannerPlugin('Motorway is an open source project by Plecto. See https://github.com/plecto/motorway/ for licensing')
	],

	output: {
		path: './motorway/templates/',
		filename: 'app.js'
	},
	module: {
		noParse: [],
		loaders: [
			{
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,
			  loader: 'babel', // 'babel-loader' is also a legal name to reference
			  query: {
				presets: ['es2015']
			  }
			},
			{
				test: /\.jsx?$/,         // Match both .js and .jsx files
				exclude: /node_modules/,
				loader: "babel",
				query:
				  {
					presets:['react']
				  }
			}
		]
	}
};

module.exports = config;