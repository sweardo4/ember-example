import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  
});

Router.map(function() {
  this.route('admin',{ path: 'admin' },function(){
    this.route('index');
    this.route('configfield');//字段
    this.route('configtable');//数据库表
    this.route('configdb');//数据库
    this.route('configpart');//部件
    this.route('configjz',function(){
      this.route('configjz', { path: '/:id' });
    });//设备
    this.route('configmonitor');//实时检测

    this.route('configmethod');
    this.route('configparam');
    this.route('configuser');
  });
  
  this.route('main', function() {
    this.route('newjm');
    this.route('monitor');
    this.route('runreport');
    this.route('modelerror');
    this.route('resultmodel');
  });
  // this.route('index' ,{ path: '/index' });
});

export default Router;
