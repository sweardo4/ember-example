import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let list = this.get('store').findAll('configmethod')
        let data = {
          message:{
            title:"建模算法",
            path:"算法",
            url:'configmethod'
          },
          list:list
        }
        return data;
      },
});
