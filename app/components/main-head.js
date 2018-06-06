import Component from '@ember/component';

export default Component.extend({

  init() {
    this._super(...arguments);
    this.set('curhref', window.location.href)
  },
  actions: {
    reload() {
      let paths = event.path
      let aa = Array.apply(null, paths).filter((v, k) => {
        if (v.tagName == 'A') {
          return v
        }
      })
      let temp = aa[0].href
      let current = this.get('curhref');
      if (current == temp) {
        window.location.href = temp
      }
      this.set('curhref', temp)
    }
  }
});
