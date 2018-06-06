import Component from '@ember/component';

export default Component.extend({
  id: null,
  init() {
    this._super(...arguments);
  },
  setParams() {
    this.get('allParamAction')().then((res) => {
      this.set('methodParams', res)
    })
  },
  checkBox() {
    if (!this.get('methodpa')) {
      alert('请选择参数')
      return false;
    }
  },
  actions: {
    chakan(id) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("数据库详情").next().hide()
      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('method_typezname', data.method_typezname)
        this.set('method_function', data.method_function)
        this.set('param_ids', data.method_params);
        this.set('method_table', data.method_table);
        this.set('method_type', data.method_type);
        this.set('param_znames',data.param_znames);
      })
    },
    setSome(key, value) {
      this.set(key, value)
    },
    editView(id) {
      this.setParams()
      this.set('id', id)
      this.$('#pages').hide();
      this.$('#edit').removeClass('hidden').siblings('.box-body').hide();
      this.$('#id').text('id : ' + id)
      this.$('#action_title').text("修改").next().hide()

      this.get('getAction')(id).then((res) => {
        let data = res.data
        this.set('method_typezname', data.method_typezname)
        this.set('method_function', data.method_function)
        this.set('param_ids', data.method_params);
        this.set('method_table', data.method_table);
        this.set('method_type', data.method_type);
        this.set('param_znames',data.param_znames)
      })
    },
    edit() {
      this.checkBox()
      let db_id = this.get('selectPartId')
      let table_id = this.get('selectPartTId')
      this.get("delAction")(this.get('id')).then((post) => {
        post.set('method_typezname', this.get('method_typezname'));
        post.set('method_function', this.get('method_function'));
        post.set('param_ids', this.get('methodpa'));
        post.set('method_table', this.get('method_table'))
        post.set('method_type', this.get('method_type'))
        post.set('param_znames', this.get('methodnames'))

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
      this.setParams()
      this.$('#pages').hide();
      this.$('#add').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("添加").next().hide()
    },

    add() {
      this.checkBox()
      let res = this.get('addAction')({
        method_function: this.get('method_function'),
        method_typezname: this.get('method_typezname'),
        param_ids: this.get('methodpa'),
        param_znames:this.get('methodnames'),
        method_table: this.get('method_table'),
        method_type: this.get('method_type'),
      })
      res.save().then((s) => {
        // 请求成功
        this.set('iserror', false)
      }).catch((e) => {
        this.set('iserror', true)
        console.log(e)
      });
      this.$('form').each((key) => this.$('form')[key].reset())
    },

    changeState() {
      let methodPa = this.$(event.target).val().toString();
      let names =  this.$(event.target).find("option:selected").text()
      this.set('methodnames',names)
      this.set('methodpa', methodPa)
    }
  }
});
