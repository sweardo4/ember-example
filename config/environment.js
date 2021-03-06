'use strict';
// ember build --environment production
module.exports = function(environment) {
  let IPART = '127.0.0.1:8000';
  let SKIO = null;
  let ENV = {
    modulePrefix: 'hdsrc',
    environment,
    rootURL: '/',
    locationType: 'auto',
  
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      IP_PART:IPART,
      //common api
      API_HOST: 'http://'+IPART,// default setting
      //websocket api
      SKIO_HOST:SKIO?SKIO:IPART,
      API_NAMESPACE:''
    }
  }
  
  // contentSecurityPolicyHeader: 'Content-Security-Policy'
  // 开发环境
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.API_HOST ='http://'+IPART
  }
// 测试环境
  if (environment === 'test') {
    // Testem prefers this...
    // ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
