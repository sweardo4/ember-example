import Component from '@ember/component';
import json from 'ember-data/serializers/json';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('islist', true)
  },
  actions: {
    chakan(id) {
      let that = this
      this.get("getAction")(id).then((res) => {
        let data = res.content[0]._data
        if (data.status == 200) {
          this.set('islist', false)
          this.set('list.message.path', '详情')
          console.log(data)
          this.set('listdata', data.message)
        }


      },(err)=>{
        alert('请求报错')
        console.log(err)
      })
    },
    setList(key, value) {
      let data = {
        message: {
          title: "故障诊断",
          path: "故障",
          url: 'modelerror'
        },
        list: value
      }
      this.set(key, data)
    },
    del(id) {
      let isTrue = confirm("确认删除吗？")
      if (isTrue) {
        this.get("delAction")(id).then((res) => {
          res.deleteRecord();
          res.get('isDeleted');
          res.save();
        })
      }
    },

  }
});
