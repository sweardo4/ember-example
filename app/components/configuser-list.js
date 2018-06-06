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
      this.$('#action_title').text("设备详情").next().hide()
      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('user_name', data.user_name);
        this.set('user_pwd', data.user_pwd);
        this.set('user_email', data.user_email)
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
        this.set('user_name', data.user_name)
        this.set('user_pwd', data.user_pwd)
        this.set('user_email', data.user_email);
      })
      // this.set('one',"cui")
    },
    edit() {
      this.get("delAction")(this.get('id')).then((post) => {
        post.set('user_name', this.get('user_name'));
        post.set('user_pwd', this.get('user_pwd'));
        post.set('user_email', this.get('user_email'));
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
        user_name: this.get('user_name'),
        user_pwd: this.get('user_pwd'),
        user_email: this.get('user_email')
      })
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
