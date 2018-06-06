import Component from '@ember/component';

export default Component.extend({
  id: null,
  init() {
    this._super(...arguments);
  },

  actions: {
    chakan(id) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("数据库详情").next().hide()
      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('param_name', data.param_name)
        this.set('param_zname', data.param_zname)
        this.set('param_type', data.param_type);
        this.set('param_code', data.param_code);
      })
    },
    setSome(key, value) {
      this.set(key, value)
    },
    editView(id) {

      this.set('id', id)
      this.$('#pages').hide();
      this.$('#edit').removeClass('hidden').siblings('.box-body').hide();
      this.$('#id').text('id : ' + id)
      this.$('#action_title').text("修改").next().hide()

      this.get('getAction')(id).then((res) => {
        let data = res.data
        this.set('param_name', data.param_name)
        this.set('param_zname', data.param_zname)
        this.set('param_type', data.param_type);
        this.set('param_code', data.param_code);
      })
    },
    edit() {
      let db_id = this.get('selectPartId')
      let table_id = this.get('selectPartTId')
      this.get("delAction")(this.get('id')).then((post) => {
        post.set('param_name', this.get('param_name'));
        post.set('param_zname', this.get('param_zname'));
        post.set('param_type', this.get('param_type'));
        post.set('param_code', this.get('param_code'))
        // post.save();
        post.save().then((s) => {
          // 请求成功
          this.set('iserror', false)
        }).catch((e) => {
          this.set('iserror', true)
          console.log(e)
        });
        this.$('form').each((key) => this.$('form')[key].reset())
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

    addView() {
      this.$('#pages').hide();
      this.$('#add').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("添加").next().hide()
    },

    add() {

      let res = this.get('addAction')({
        param_zname: this.get('param_zname'),
        param_name: this.get('param_name'),
        param_type: this.get('param_type'),
        param_code: this.get('param_code'),
      })
      // res.save()
      res.save().then((s) => {
        // 请求成功
        this.set('iserror', false)
      }).catch((e) => {
        this.set('iserror', true)
        console.log(e)
      });
      this.$('form').each((key) => this.$('form')[key].reset())
    }
  }
});
