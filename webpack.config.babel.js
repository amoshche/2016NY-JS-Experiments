import path from 'path';
import webpack from 'webpack';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import extractTextPlugin from 'extract-text-webpack-plugin';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
    //context: path.resolve(__dirname,'src'),
    entry:{
        common:'babel-polyfill',
        main:['./src/index','webpack-hot-middleware/client'],
        styles:['./src/index.less','webpack-hot-middleware/client']
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
        filename:'[name].js'
    },
    module: {
        loaders: [
          {
              test: /\.less$/,
              loader: extractTextPlugin.extract(
                // activate source maps via loader query
                // 'autoprefixer?sourceMap!' +
                //'style!' +
                'css?sourceMap!' +
                'less?sourceMap'
              )
          },
          {
            loader: 'babel-loader',
            include: [
              path.resolve(__dirname,'src'),
            ],
            test: /\.jsx?$/,
            query: {
              plugins: [
                'transform-runtime',
		['react-transform', {
                  transforms: [{
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }, {
                    transform: 'react-transform-catch-errors',
                    imports: ['react', 'redbox-react']
                  }]
                }]
              ],
              presets: ['es2015', 'react'],
              sourceRoot: './'
            }
          }
        ]
    },
    plugins: [
        new cleanWebpackPlugin([path.resolve(__dirname,'dist')]),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            moduleFilenameTemplate: 'webpack:///[resourcePath]',
            fallbackModuleFilenameTemplate: 'webpack:///[resourcePath]?[hash]'
//            moduleFilenameTemplate: 'webpack:///[absolute-resource-path]',
//            fallbackModuleFilenameTemplate: 'webpack:///[absolute-resource-path]?[hash]'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new extractTextPlugin('[name].css'),
        new htmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
