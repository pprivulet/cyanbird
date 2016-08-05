var path = require('path');
const webpack = require('webpack')
var config = {    
    entry: {
        app: (process.env.NODE_ENV === 'prod' ? './client/index.js': [
            'webpack-dev-server/client?http://127.0.0.1:3001',
            'webpack/hot/dev-server',
            './client/index.js']
        )
    },    
    output: {
        path: path.join(__dirname, 'assets'),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'prod' ? '/' : 'http://127.0.0.1:3001/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, 
            loader: 'babel',
            query:{presets:['react', 'es2015'],compact: false} 
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }],
        noParse: []
    },
    devServer: {
        hot: true,
        port: 3001,
        historyApiFallback: true,
        publicPath: 'http://127.0.0.1:3001/'
    },
    plugins: (process.env.NODE_ENV === 'prod'
        ? []
        : [new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()]
    ),
    resolve: {
        modulesDirectories: ['node_modules', 'client']
    }
};

module.exports = config;
