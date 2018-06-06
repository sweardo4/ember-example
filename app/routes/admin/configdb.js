import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let list = this.store.findAll('configdb');
        let data = {
            message:{
              title:"数据库设置",
              path:"数据库",
              url:'configdb'
            },
            list:list
          }
          return data;
    }
});
