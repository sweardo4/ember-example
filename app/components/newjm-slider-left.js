import Component from '@ember/component';

export default Component.extend({
  allfields: {},
  init() {
    this._super(...arguments);
    this.set('isLoading', true)
    this.get('getJzAction')().then((results) => {
      this.set('list', results)
    });
  },


  didReceiveAttrs() {
    this._super(...arguments);
    this.set('errors', []);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.set('errors', []);
  },
  willUpdate() {
    this._super(...arguments);
    this.set('errors', []);
    // this.get('setGlobalParams')('bivarthd', this.get('bivarthd'))
    // this.get('setGlobalParams')('modelperiods', this.get('modelperiods'))
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.set('errors', []);
  },
  didRender() {
    this._super(...arguments);
    this.set('errors', []);
  },
});
