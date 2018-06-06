import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let list = this.store.findAll('resultmodel');
        return list;
    }
});
