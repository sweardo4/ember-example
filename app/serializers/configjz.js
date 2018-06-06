import {
  underscore
} from '@ember/string';
import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  },
  // serialize: function (snapshot, options) {
  //   let json = this._super(...arguments); // ??
  //   let tempdata = json.data.attributes
  //   let data = {
  //     jz_name: tempdata.jz_name,
  //     jz_zname: tempdata.jz_zname,
  //     user_id: tempdata.user_id
  //   }
  //   return json;
  // },
  //反过来 需要重写normalizeResponse
  // normalizeResponse: function (store, primaryModelClass, data, id, requestType) {
  //   return this._super(arguments);
  // }
});
