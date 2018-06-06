import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    add: function (db) {
     
      let res = this.store.createRecord('configparam', db);
      return res
    },
    del: function (id) {
      return this.store.findRecord('configparam', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configparam', id, {
        backgroundReload: false
      })
    },
    get: function (id) {
      return this.get('store').find('configparam', id)
    },
    allJz: function () {
      return this.store.findAll('configjz');
    }
  }
});
