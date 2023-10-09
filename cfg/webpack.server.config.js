const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEX = /\.global\.css$/;
const IS_DEV = NODE_ENV === 'development';

// eslint-disable-next-line no-undef
module.exports = {
	target: 'node',
	mode: NODE_ENV ? NODE_ENV : 'development',
	// eslint-disable-next-line no-undef
	entry: path.resolve(__dirname, '../src/server/server.js'),
	output: {
		// eslint-disable-next-line no-undef
		path: path.resolve(__dirname, '../dist/server'),
		filename: 'server.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['ts-loader'],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',
								exportOnlyLocals: true,
							},
						},
					},
				],
				exclude: GLOBAL_CSS_REGEX,
			},
			{
				test: GLOBAL_CSS_REGEX,
				use: ['css-loader'],
			},
		],
	},
	optimization: {
		minimize: false,
	},
	devtool: IS_DEV ? 'eval' : false,
	plugins: [
		!IS_DEV && new HtmlWebpackPlugin(),
		new webpack.DefinePlugin({
			// eslint-disable-next-line no-undef
			'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`,
		}),
	],
};
