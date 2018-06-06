import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    let list = this.get('store').findAll('configjz');
    let data = {
      message: {
        title: "设备列表",
        path: "设备",
        url: 'configjz'
      },
      list: list
    }
    return data;
  },
  

})
