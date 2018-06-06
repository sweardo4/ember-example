import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let list = this.get('store').findAll('configuser')
    let data = {
      message: {
        title: "用户设置",
        path: "用户列表",
        url: 'configuser'
      },
      list: list
    }
    return data;
  },
 

})
