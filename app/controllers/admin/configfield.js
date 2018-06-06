import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    add: function (db) {
     let res = this.store.createRecord('configfield', db);
      return res
    },
    del: function (id) {
      return this.store.findRecord('configfield', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configfield', id, {
        backgroundReload: false
      })
    },
    get: function (id) {
      return this.get('store').find('configfield', id)
    },
    allTable: function () {
      return this.store.findAll('configtable');
    }
  }
});
