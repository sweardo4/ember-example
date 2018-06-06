import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
       this.replaceWith('index');
    },
    init(){
        this._super(...arguments)
    },
    afterModel() {
    },
});