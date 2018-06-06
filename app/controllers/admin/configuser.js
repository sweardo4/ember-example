import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
     add: function (jz) {

        let res = this.store.createRecord('configuser', jz);
        // res.save();
        return res;
      },
      del: function (id) {
        return this.store.findRecord('configuser', id, {
          backgroundReload: false
        })
      },
      edit: function (id) {
        return this.store.findRecord('configuser', id, {
          backgroundReload: false
        })
      },
      get:function (id) {
        return this.get('store').find('configuser', id)
      }
    }
});
