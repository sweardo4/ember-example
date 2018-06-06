import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
      },
      actions: {
        del: function (id) {
          return this.store.findRecord('errormanage', id, {
            backgroundReload: false
          })
        },
        get: function (id) {
          return this.get('store').query('geterrordatas', {
           error_id:id
          })
        },
      }
});