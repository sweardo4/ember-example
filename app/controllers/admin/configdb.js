import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    add: function (db) {
      let res = this.store.createRecord('configdb', db);
      return res
    },
    del: function (id) {
      return this.store.findRecord('configdb', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configdb', id, {
        backgroundReload: false
      })
    },
    get: function (id) {
      return this.get('store').find('configdb', id)
    },
    allJz: function () {
      return this.store.findAll('configjz');
    },
    getJz:function(id){
      return this.get('store').find('configjz', id)
    }
  }
});
