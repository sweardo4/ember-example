import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('list', this.get('getAllJzAction')())
  },
  actions: {
    realTimeMonitor(name) {
      if (name !== this.get('jz_name')) {
        this.get('setParams')('isLoading', false)
        this.get('getAllData')(name).then((res) => {
          let data = Object.values(res.content[0]._data.message)
          this.get('setParams')('allData', data)
          this.get('setParams')('isLoading', true)
          this.get('setParams')('isrun', true)
          this.get('setParams')('jz_name', name)
        })
        this.set('jz_name', name)
      } else {
        console.log('重复点击')
      }
    }
  }
});
