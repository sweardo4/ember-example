import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    add: function (db) {
     let res = this.store.createRecord('configtable', db);
      return res
    },
    del: function (id) {
      return this.store.findRecord('configtable', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configtable', id, {
        backgroundReload: false
      })
    },
    get: function (id) {
      return this.get('store').find('configtable', id)
    },
    allDb: function () {
      return this.store.findAll('configdb');
    },
  
  }
});
