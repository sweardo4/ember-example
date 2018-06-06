import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let list = this.get('store').findAll('configmonitor')
    let data = {
      message:{
        title:"监测模块设置",
        path:"模块",
        url:'configmonitor'
      },
      list:list
    }
    return data;
  },

})