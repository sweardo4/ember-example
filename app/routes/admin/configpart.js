import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let list = this.get('store').findAll('configpart')
    let data = {
      message:{
        title:"部件列表",
        path:"部件",
        url:'configpart'
      },
      list:list
    }
    return data;
  },

})