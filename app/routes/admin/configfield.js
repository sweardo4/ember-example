import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.unloadAll('configfield');
    let list = this.store.findAll('configfield');
    let data = {
      message: {
        title: "变量设置",
        path: "变量",
        url: 'configfield'
      },
      list: list
    }
    return data;
  }
});
