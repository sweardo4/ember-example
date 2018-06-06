import Component from '@ember/component';

export default Component.extend({
  id: null,
  init() {
    this._super(...arguments);
    this.set('isload',false)
    this.set('isnoload', !this.get('isload'))
    // this.get('getAction')().then((results) => this.set('results', results));
  },
  actions: {
    chakan(id,type) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("模型详情").next().hide()
      this.set('isload',true)
      this.set('isnoload', !this.get('isload'))
      let that = this
      console.log(type)
     
      this.get("getAction")(id).then((res) => {
        let data = res.content[0]._data.message
        that.set('listdata',data)
        that.set('isnoload',true)
        data.details?that.set('tabledata',data.details):'';
        data.msdata?that.set('chartdata',data.msdata):'';
        that.set('chartname', 'modelversion/'+type+'-chart');
        that.set('tablename', 'modelversion/'+type+'-table');
      
        console.log(data)
      },(err)=>{
        alert('服务器错误')
        console.log(err)
      })
    },
    setList(key, value) {
      let data = {
        message: {
          title: "模型版本",
          path: "模型",
          url: 'resultmodel'
        },
        list: value
      }
      this.set(key, data)
    },
    edit(id) {
      
      this.get("delAction")(id).then((post) => {
        post.set('model_isuse', 1);
        post.save();
        window.location.reload(true);
        // this.get('doRefresh')()
      })
    },
    editname(id) {
      var name = prompt("模型新名称");
      this.get("delAction")(id).then((post) => {
        post.set('model_methodzname', name);
        post.save();
      })
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
    add() {
      let res = this.sendAction('addAction', {
        jz_name: this.get('jz_name'),
        jz_zname: this.get('jz_zname'),
        user_id: this.get('user_id')
      })

    }
  }
});
