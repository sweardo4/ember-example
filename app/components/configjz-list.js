import Component from '@ember/component';

export default Component.extend({
  id: null,
  init() {
    this._super(...arguments);
  },
  getUsersRender(that) {
    that.get('getAllUser')().then((res) => {
      console.log(res)
      that.set('userData', res)
    }, (err) => {
      console.log(err)
    })
  },
  actions: {
    chakan(id) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("设备详情").next().hide()
      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('jz_name', data.jz_name);
        this.set('jz_zname', data.jz_zname);
        this.set('user_name', data.user_name)
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
      this.get('getUsersRender')(this)
      this.get('getAction')(id).then((res) => {
        let data = res.data
        this.set('jz_name', data.jz_name)
        this.set('jz_zname', data.jz_zname)
        this.set('user_name', data.user_name);
      })
      // this.set('one',"cui")
    },
    edit() {
      debugger
      let that=this
      this.get("delAction")(this.get('id')).then((post) => {
        post.set('jz_name', this.get('jz_name'));
        post.set('jz_zname', this.get('jz_zname'));
        post.set('user_name', this.get('usern'));
        post.set('jz_isuse', this.get('isuse') ? this.get('isuse') : 1);
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
    getShow(p) {
      this.set('isuse', p)
    },
    bindUsername() {
      let temp = this.$(event.target).find("option:selected").text()
      this.set('usern', temp)
    },
    addView() {
      this.$('#pages').hide();
      this.$('#add').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("添加").next().hide()
      this.get('getUsersRender')(this)
    },
    add() {
      let res = this.get('addAction')({
        jz_name: this.get('jz_name'),
        jz_zname: this.get('jz_zname'),
        user_name: this.get('usern'),
        jz_isuse: this.get('isuse') ? this.get('isuse') : 1,
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
