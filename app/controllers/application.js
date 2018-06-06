import Controller from '@ember/controller';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({
  user: storageFor('user'),
  init() {
    this._super(...arguments)
    this.set('isLogin',false)
    //检查是否已经登录
    this.get('user.username')?this.set('isLogin',true):'';
  },

  actions: {
    getUser(username,userpwd){
      return this.get('store').query('configuser', {
        user_name:username,
        user_pwd:userpwd
      })
    },
    setTemp(key,value){
      this.set(key,value)
    }
  },

});
