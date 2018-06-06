import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    add: function (db) {
     let res = this.store.createRecord('configmonitor', db);
      return res
    },
    del: function (id) {
      return this.store.findRecord('configmonitor', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configmonitor', id, {
        backgroundReload: false
      })
    },
    get: function (id) {
      return this.get('store').find('configmonitor', id)
    },
    allJz: function () {
      return this.store.findAll('configjz');
    },
    allMethod(){
      return this.store.findAll('configmethod');
    }
  }
});
