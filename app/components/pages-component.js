import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {
  sort
} from '@ember/object/computed';
import {
  inject as service
} from '@ember/service';

export default Component.extend({
  count: 100,
  current: 1,
  previous: null,
  store: service(),
  isLoading: true,
  init() {
    this._super(...arguments);
    //   初始化分页总数
    let dbtable = this.get('tab')
    const pageSize = this.get('pageSize');
    // this.get('store').unloadAll(dbtable);
    // this.get('store').query('configjz',{page: JSON.stringify({size: pageSize})}).then((result)=>{

    // })
    //   this.loadPosts(1);
  },

  actions: {
    pageChanged(current, previous) {
      let targ = $(event.target).parent()
      let dbtable = this.get('tab')
      this.set('isLoading', false)
      this.get('store').query(dbtable, {
        page: current
      }).then((result) => {
        targ.removeClass('disabled')
        this.get('store').unloadAll(dbtable);
        this.set('isLoading', true);
        this.get('setSome')('list', result)
        this.set('current', current);
        this.set('previous', previous);
      }, (error) => {
        console.log(error)
        targ.addClass('disabled')
        this.set('isLoading', true);
      })
    }
  },
  didRender() {
    this._super(...arguments)
  }
});
