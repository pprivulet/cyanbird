'use strict'

const path = require('path')
let config

switch (process.env.NODE_ENV) {
  case 'test':
    config = {
      port: process.env.PORT || 8002,
      assetsDir: path.join(__dirname, '../assets/'),
      uploadDir: path.join(__dirname, '../uploads/'),
      jwtSecret: 'test jwt secret',
      //mongoUrl: 'mongodb://127.0.0.1:27017/study-test'
    }
    break
  /* istanbul ignore next */
  case 'dev':
    config = {
      port: process.env.PORT || 8001,
      assetsDir: path.join(__dirname, '../assets/'),
      uploadDir: path.join(__dirname, '../uploads/'),
      jwtSecret: 'dev jwt secret',
      //mongoUrl: 'mongodb://127.0.0.1:27017/study-dev'
    }
    break
  /* istanbul ignore next */
  case 'prod':
    config = {
      port: process.env.PORT || 8000,
      assetsDir: path.join(__dirname, '../assets/'),
      uploadDir: path.join(__dirname, '../uploads/'),
      jwtSecret: 'prod jwt secret',
      //mongoUrl: 'mongodb://127.0.0.1:27017/study'
    }
    break
}

module.exports = config
