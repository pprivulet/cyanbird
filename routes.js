var Router = require('koa-router');
//var jwt = require('koa-jwt');
//var config = require('./config');

function *foo(next){
   this.body = {
      status: 200,
      hi: "cyanbird"
  };
}

module.exports = function routes(app) {
  app.use(function* (next) {
    try {
      yield next;
    } catch (err) {
      if (401 === err.status) {
        this.status = 401;
        this.body = {};
      } else {
        throw err;
      }
    }
  });
  var router = new Router();
  router.get('/', foo);
    
  app.use(router.middleware());
};
