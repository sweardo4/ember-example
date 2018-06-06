import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    add: function (jz) {
      return this.store.createRecord('configjz', jz);
    },
    del: function (id) {
      return this.store.findRecord('configjz', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configjz', id, {
        backgroundReload: false
      })
    },
    get: function (id) {
      return this.get('store').find('configjz', id)
    },
    getUsers: function () {
      return this.store.findAll('configuser')
    }
  }
});
