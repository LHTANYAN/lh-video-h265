const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	// mode: "development",
	mode: "production",
	entry: {
		main: path.join(__dirname, '../src/plugin.js')
	},
	output: {
		library: 'Flvh265',
		filename: 'lh-video-h265.min.js',
		libraryTarget: "umd",
		path: path.join(__dirname, '../dist'),
		libraryExport: "default",
		globalObject: 'this',
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: "babel-loader",
		}, ],
	},
	externals: {
		"video.js": {
			umd: "video.js",
			amd: "video.js",
			commonjs: "video.js",
			commonjs2: "video.js",
			root: "videojs"
		},
		// "wx-inline-player-new":"WXInlinePlayer"
	},
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules']
	},
	plugins: [
		new CopyPlugin({
			patterns: [{
					from: path.resolve('node_modules','wx-inline-player-new/example/'),
					to: path.join(__dirname, '../dist/lib')
				}
			],
		}),
	],
}