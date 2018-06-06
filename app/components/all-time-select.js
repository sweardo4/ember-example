import Component from '@ember/component';

export default Component.extend({
    init() {
      this._super(...arguments);
    },

    actions:{
        setChange(event){
            let t = event
            let formtime = t.getFullYear() + "-" + ((t.getMonth() + 1) < 10 ? "0" : "") + (t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" : "") + t.getDate() + ' ' + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + t.getMilliseconds()
            this.get('setGlobalParams')(this.get('tid'), formtime)
        }
    }
});
