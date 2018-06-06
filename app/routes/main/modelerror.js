import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let list = this.store.findAll('errormanage');
        let data = {
            message:{
              title:"故障列表",
              path:"故障",
              url:'modelerror'
            },
            list:list
          }
          return data;
    }
});
