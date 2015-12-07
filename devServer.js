import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.babel';

const bundler = webpack(webpackConfig);

const bs = browserSync.create();

bs.init({
	server: 'dist',
	open: false,
	logFileChanges: false,
	middleware: [
		webpackDevMiddleware(bundler, {
			noInfo: true,
			stats: { colors: true },
			publicPath: webpackConfig.output.publicPath
		}),
		webpackHotMiddleware(bundler)
	],
	files: [
		'src/*.html'
	]
});
