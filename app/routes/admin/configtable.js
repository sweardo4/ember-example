import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let list = this.get('store').findAll('configtable')
    let data = {
      message:{
        title:"表设置",
        path:"表",
        url:'configtable'
      },
      list:list
    }
    return data;
  },

})