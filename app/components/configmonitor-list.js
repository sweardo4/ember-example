import Component from '@ember/component';

export default Component.extend({
  id: null,
  isyz: null,
  isjc: null,
  isfjc: null,
  setSelect() {
    this.get('allJzAction')().then((res) => {
      this.set('jzData', res)
    })
  },
  setMethod() {
    this.get('allMethodAction')().then((res) => {
      this.set('sfData', res)
    })
  },
  // 参数监测
  checkSelect() {
    let a = this.get('selectUserId');
    let b = this.get('methodId')
    if (!a || !b) {
      console.log("参数填写不完整")
    }
    this.get('selectUserId') ? '' : this.set('selectUserId', '')
    this.get('methodId') ? '' : this.set('methodId', '')
    // return false
  },
  actions: {
    chakan(id) {
      this.$('#pages').hide()
      this.$('#chakan').removeClass('hidden').siblings('.box-body').hide();
      this.$('#action_title').text("变量详情").next().hide()
      this.get("getAction")(id).then((res) => {
        let data = res.data;
        this.set('id', id);
        this.set('monitor_name', data.monitor_name)
        this.set('monitor_zname', data.monitor_zname)
        this.set('monitor_title', data.monitor_title)
        this.set('monitor_usethd', data.monitor_usethd)
        this.set('redisdata_period', data.redisdata_period)
        this.set('redisdata_datanum', data.redisdata_datanum)
        this.set('monitor_isuse', data.monitor_isuse)
        this.set('method_id', data.method_id)
        this.set('method_zname', data.method_zname)
        this.set('method_id', data.method_id)
        this.set('monitor_getfields', data.monitor_getfields)
        this.set('redisdata_type', data.redisdata_type)
        this.set('monitor_getdatas', data.monitor_getdatas)

      })
    },
    setSome(key, value) {
      this.set(key, value)
    },
    getRadioJc(a) {
      this.isjc = a;
    },
    getRadioYz(a) {
      this.isyz = a
    },
    getRadioFJc(a) {
      this.isfjc = a
    },
    editView(id) {

      this.set('id', id)
      this.$('#pages').hide();
      this.$('#edit').removeClass('hidden').siblings('.box-body').hide();
      this.$('#id').text('id : ' + id)
      this.$('#action_title').text("修改").next().hide()
      this.setSelect()
      this.setMethod()
      this.get('getAction')(id).then((res) => {
        let data = res.data
        this.set('monitor_name', data.monitor_name)
        this.set('monitor_zname', data.monitor_zname)
        this.set('monitor_title', data.monitor_title)
        this.set('monitor_usethd', data.monitor_usethd)
        this.set('redisdata_period', data.redisdata_period)
        this.set('redisdata_datanum', data.redisdata_datanum)
        this.set('monitor_isuse', data.monitor_isuse)
        this.set('method_id', data.method_id)
        this.set('method_zname', data.method_zname)
        this.set('user_id', this.get('selectUserId'))

        this.set('monitor_getfields', data.monitor_getfields)
        this.set('redisdata_type', data.redisdata_type)
        this.set('monitor_getdatas', data.monitor_getdatas)
        this.set('monitor_isunite', data.monitor_isunite)
        this.set('monitor_chartopts', data.monitor_chartopts)
      })
    },
    edit() {
      this.checkSelect()
      this.get("delAction")(this.get('id')).then((post) => {
        post.set('monitor_name', this.get('monitor_name'));
        post.set('monitor_zname', this.get('monitor_zname'));
        post.set('monitor_title', this.get('monitor_title'));
        post.set('monitor_usethd', this.isyz !== null ? this.isyz : 1);
        post.set('redisdata_period', this.get('redisdata_period'));
        post.set('redisdata_datanum', this.get('redisdata_datanum'));
        post.set('monitor_isuse', this.isjc !== null ? this.isjc : 1);
        post.set('method_id', this.get('methodId') == null ? '' : this.get('methodId'));
        post.set('method_zname', this.get('method_zname'));
        post.set('user_id', this.get('selectUserId'))
        post.set('monitor_getfields', this.get('monitor_getfields'));
        post.set('redisdata_type', this.get('redisdata_type'));
        post.set('monitor_getdatas', this.get('monitor_getdatas'));

        post.set('monitor_isunite', this.isfjc !== null ? this.isfjc : 1);
        post.set('monitor_chartopts', this.get('monitor_chartopts'));
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
      this.setSelect()
      this.setMethod()
    },
    bindSelectJz(did) {
      let selected = this.$('#' + did).find('option:selected').val();
      this.set('selectUserId', selected);
    },
    bindSelectSF() {
      let selected = this.$(event.target).find('option:selected').val();
      this.set('methodId', selected);
    },
    add() {
      this.checkSelect()
      let res = this.get('addAction')({
        monitor_name: this.get('monitor_name'),
        monitor_zname: this.get('monitor_zname'),
        monitor_title: this.get('monitor_title'),
        monitor_usethd: this.isyz !== null ? this.isyz : 1,
        redisdata_period: this.get('redisdata_period'),
        redisdata_datanum: this.get('redisdata_datanum'),
        monitor_isuse: this.isjc !== null ? this.isjc : 1,
        method_id: this.get('methodId'),
        method_zname: this.get('method_zname'),
        user_id: this.get('selectUserId'),
        monitor_getfields: this.get('monitor_getfields'),
        redisdata_type: this.get('redisdata_type'),
        monitor_getdatas: this.get('monitor_getdatas'),
        monitor_isunite: this.isfjc !== null ? this.isfjc : 1,
        monitor_chartopts: this.get('monitor_chartopts'),
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

    },
  }
});
