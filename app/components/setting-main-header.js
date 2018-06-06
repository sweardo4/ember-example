import Component from '@ember/component';
import {
  storageFor
} from 'ember-local-storage';


export default Component.extend({
  user: storageFor('user'),
  init() {
    this._super(...arguments);
    this.set('username', this.get('user.username'));
  }
});
