import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let list = this.get('store').findAll('configparam')
        let data = {
          message:{
            title:"建模算法参数",
            path:"参数",
            url:'configparam'
          },
          list:list
        }
        return data;
      },
});
