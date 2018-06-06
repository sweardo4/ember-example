import Component from '@ember/component';

export default Component.extend({
  sbname: null,
  init() {
    this._super(...arguments);
  },
  didRender() {
    let id = this.get('ids')
    console.log('get-jzname')
    debugger
    this.set('sbname','123456'+id)
    console.log(this)
    let that = this
    // if (id) {
    //   this.get('getJz')(id).then((res) => {
    //     // console.log(res.data)
    //     // console.log(that)
    //     that.set('sbname',res.data.jz_zname)
    //     // this.set('sbname','无')
    //   }, (err) => {
    //     // this.set('sbname','无')
    //   })
    // }


  }
});
