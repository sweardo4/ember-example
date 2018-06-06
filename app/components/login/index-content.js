import Component from '@ember/component';

export default Component.extend({
    counte:0,
    init(){
        this._super(...arguments)
        let that = this
        // let homet = setInterval(()=>{
        //     let temp = that.get('counte')
        //     temp++
        //     let isname = ('homel'+temp)
        //     that.set('counte',temp)
        //     that.set(isname,true)
        //     if(temp === 4){
        //         clearInterval(homet)
        //     }
           
        // },1000)
    },
    didRender(){
        this._super(...arguments)
    }
});
