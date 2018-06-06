'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  
  let app = new EmberApp(defaults, {
    minifyJS: {
      enabled: true
    },
    minifyCSS: {
      enabled: true
    },
    sassOptions: {
      // includePaths: [ 'node_modules/ember-dialog/addon/styles' ]
    }
  });
  app.import("node_modules/bootstrap/dist/css/bootstrap.min.css");
  app.import("node_modules/admin-lte/dist/css/AdminLTE.min.css");
  app.import("node_modules/bootstrap/dist/js/bootstrap.min.js");
  app.import("node_modules/admin-lte/dist/js/adminlte.min.js");
  // app.import("node_modules/chart.js/dist/Chart.min.js");
  app.import("node_modules/jquery/dist/jquery.min.js");
  app.import("node_modules/jquery-sparkline/jquery.sparkline.min.js");
  
  return app.toTree();
};
