import Component from '@ember/component';
import {
  storageFor
} from 'ember-local-storage';

export default Component.extend({
  user: storageFor('user'),
  init() {
    this._super(...arguments);
    this.set('username', this.get('user.username'));
    this.set('curhref',window.location.href)
  },
  
  actions:{
    reload(){
      let h = this.$(event)
      let paths = event.path
      let aa = Array.apply(null,paths).filter((v,k)=>{
        if(v.tagName =='A'){
          return v
        }
      })
      let temp = aa[0].href
      let current = this.get('curhref');
      if(current == temp){
        window.location.href = temp
      }
      this.set('curhref',temp)
    }
  },
  
});
