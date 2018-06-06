import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
   
  },
  actions: {
    add: function (db) {
     
      let res = this.store.createRecord('configmethod', db);
      return res
    },
    del: function (id) {
      return this.store.findRecord('configmethod', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configmethod', id, {
        backgroundReload: false
      })
    },
    get: function (id) {
      return this.get('store').find('configmethod', id)
    },
    allParam: function () {
      return this.store.findAll('configparam');
    }
  }
});
