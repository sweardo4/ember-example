import DS from 'ember-data';
import config from '../config/environment';


export default DS.JSONAPIAdapter.extend({
  host: config.APP.API_HOST,
  namespace: config.APP.API_NAMESPACE,
  ajax: function (url, type, hash) {
    // hash = hash || {};
    // hash.headers = hash.headers || {};
    
    // hash.headers['Content-Type'] = 'application/vnd.api+json';
    return this._super(url+'/', type, hash);
  }
});

