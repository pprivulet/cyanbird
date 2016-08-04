var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');


var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    resolve: {
        alias: {
          'react': pathToReact,
          'react-dom': pathToReactDOM
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, 
            loader: 'babel',
            query:{presets:['react', 'es2015']} 
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }],
        noParse: [pathToReact, pathToReactDOM]
    }
};

module.exports = config;
