var path = require('path');
var logger = require('koa-logger');
var koa = require('koa');
//var error = require('koa-json-error');
var json = require('koa-json');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
//var webpack = require('webpack');
//var webpackMiddleware = require('koa-webpack-dev-middleware');
var nunjucks = require('nunjucks');

//var config = require('./config');
var routes = require('./routes');

var app = koa();

//var router = require('koa-router')


app.use(serve('public'));
app.use(logger());
//app.use(error());
app.use(json());
app.use(bodyParser({
  formLimit: '4mb'
}));

//app.use(router(app))

//app.use(require('koa-router')(app));
routes(app);

app.on('error', function(err, ctx) {
  err.url = err.url || ctx.request.url;
  console.log(err);
  console.log(err.stack);
  logger.error(err);
});

app.listen(process.env.PORT|8081);
console.log("Engine start ... ");

