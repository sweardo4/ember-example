import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super(...arguments);
    },
    didRender(){
        console.log(this.get('tabledata'))
    }
});
