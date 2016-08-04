'use strict'

const path = require('path')
const config = require('./config')
const app = require('koa')()
const Router = require('koa-router')
//const jwt = require('koa-jwt')({ secret: config.jwtSecret }).unless({
//  path: [
//    /^\/api\/auth/,
//    /^\/favicon\.ico/,
//  ]
//})

global.debug = process.env.NODE_ENV === 'dev'

//require('./models/init')

app
  .use(handleError)
  .use(require('koa-static')(config.assetsDir))
  //.use(jwt)
  .use(require('koa-body')({ formidable: { uploadDir: config.uploadDir } }))
  //.use(router.allowedMethods())
  .listen(config.port, function() {
    console.log('listening on', config.port)
  })



function *foo(next){
   this.body = {
      status: 200,
      hi: "cyanbird"
  };
}

var router = new Router();
router.get('/api/foo', foo);
app.use(router.middleware());

module.exports = app

function *handleError(next) {
  try {
    yield next
  } catch(e) {
    if (e.message === 'ValidationError') {
      this.status = 400
      this.body = e.errors
      return
    }

    this.status = e.status || /* istanbul ignore next */ 500
    switch (e.status) {
      case 400:
        this.body = e
        break
      /* istanbul ignore next */
      default:
        this.body = e.message
        this.app.emit('error', e, this)
    }
  }
}
