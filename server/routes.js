var Router = require('koa-router');


function *foo(next){
   this.body = {
      status: 200,
      hi: "cyanbird"
  };
}

module.exports = function routes(app) {
  var router = new Router();
  router.get('/api/foo', foo);
    
  app.use(router.middleware());
};
