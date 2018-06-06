import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    add: function (jz) {
      let res = this.store.createRecord('configpart', jz);
      return res
    },
    del: function (id) {
      return this.store.findRecord('configpart', id, {
        backgroundReload: false
      })
    },
    edit: function (id) {
      return this.store.findRecord('configpart', id, {
        backgroundReload: false
      })
    },
    get:function (id) {
      return this.get('store').find('configpart', id)
    },
    allPart: function () {
        return this.store.findAll('configpart');
     },
     allTable:function(){
      return this.store.findAll('configtable');
    },
    allMonitor(){
      return this.store.findAll('configmethod');
    }
  }
});
