import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
       
      },
      actions: {
        del: function (id) {
          return this.store.findRecord('resultmodel', id, {
            backgroundReload: false
          })
        },
        edit: function (id) {
          return this.store.findRecord('resultmodel', id, {
            backgroundReload: false
          })
        },
        get: function (id) {
          // return this.get('store').find('resultmodel', id)
          return this.get('store').query('modelgetdetail', {
            model_id:id
          })
        },
        doRefresh(){
          this.get('main.resultmodel').refresh();
        }
      }
});
