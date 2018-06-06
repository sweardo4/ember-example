import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    setFocus(tid) {
      this.get('setGlobalParams')(tid, event.target.value)
    }
  }
});
