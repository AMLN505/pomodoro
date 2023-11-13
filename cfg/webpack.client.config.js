const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEX = /\.global\.css$/;

function setupDevtool() {
	if (IS_DEV) {
		return 'eval';
	}
	if (IS_PROD) {
		return false;
	}
}

// eslint-disable-next-line no-undef
module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
	},
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: [
		// eslint-disable-next-line no-undef
		path.resolve(__dirname, '../src/client/index.jsx'),
		'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
	],
	output: {
		// eslint-disable-next-line no-undef
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js',
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: [
					{
						loader: require.resolve('ts-loader'),
						options: {
							getCustomTransformers: () => ({
								before: [IS_DEV && ReactRefreshTypeScript()].filter(Boolean),
							}),
							transpileOnly: IS_DEV,
						},
					},
				],
				// eslint-disable-next-line no-undef
				exclude: path.resolve(__dirname, '../node_modules'),
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
					},
				],
				exclude: GLOBAL_CSS_REGEX,
			},
			{
				test: GLOBAL_CSS_REGEX,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		IS_DEV && new ReactRefreshWebpackPlugin(),
		IS_DEV && new webpack.HotModuleReplacementPlugin(),
		IS_DEV && new CleanWebpackPlugin(),
		IS_PROD &&
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, '../src/client/index.html'),
			}),
		new webpack.DefinePlugin({
			// eslint-disable-next-line no-undef
			'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`,
		}),
	].filter(Boolean),
	devtool: setupDevtool(),
	watchOptions: {
		ignored: /node_modules/,
	},
};
