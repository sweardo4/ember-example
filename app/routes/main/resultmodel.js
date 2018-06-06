import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let list = this.store.findAll('resultmodel');
        
        let data = {
            message:{
              title:"模型版本",
              path:"模型",
              url:'resultmodel'
            },
            list:list
          }
          return data;
    }
});

