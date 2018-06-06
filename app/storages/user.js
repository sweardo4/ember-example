import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
    initialState() {
      return { username: null, userpwd:null};
    }
  });


export default Storage;